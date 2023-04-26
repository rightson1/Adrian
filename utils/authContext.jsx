
import { createContext, useContext, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth, db } from "./firebase";
import { collection, query, where, getDocs, setDoc, doc, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useRouter } from "next/router";;
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-hot-toast';
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState({});
    const router = useRouter()
    const [user, setUser] = useState(null);

    useEffect(() => {

        const localUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAdmin({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                });

                if (localUser) {
                    setUser(localUser)
                } else {
                    const q = query(collection(db, "users"), where("uid", "==", user.uid));
                    getDocs(q).then((res) => {
                        const [remoteUser, ...rest] = res.docs.map((doc) => {
                            return { id: doc.id, ...doc.data() }
                        })
                        if (remoteUser) {
                            console.log('remote user')
                            setUser(remoteUser);
                            localStorage.setItem('user', JSON.stringify(remoteUser))
                        } else {

                            setUser(null)

                        }
                    }).catch((e) => {
                        console.log(e)
                    })
                }

            } else {
                setAdmin(null);

            }
        });
        setLoading(false);
        return () => {
            unsub()
        }
    }, [])

    const logout = async () => {
        await signOut(auth).then(() => {
            localStorage.removeItem('user')

        }).catch((e) => {
            console.log(e)
        })
        localStorage.clear();
        setUser(null)
    }
    const err = (e) => {
        if (!!e) {
            console.log(e)
            toast.dismiss()
            toast.error('Error signing in')

        } else {
            toast.dismiss()
            toast.success('Signed in successfully')
        }
    }
    const signInWithGoogle = () => {
        toast.loading('Signing in...')
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const data = {
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    uid: user.uid,
                }
                const q = query(collection(db, "users"), where("uid", "==", user.uid));
                getDocs(q).then((res) => {
                    const [remoteUser, ...rest] = res.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    })
                    if (remoteUser) {
                        return
                    } else {
                        setDoc(doc(db, "users", user.uid), data).then(() => err(false)).catch((e) => err(e))
                    }
                }).catch((e) => {
                    console.log(e)
                })


            }).then(() => err(false)).catch((e) => err(e))
    }

    return (
        <AuthContext.Provider value={{ logout, admin, user, setUser, signInWithGoogle }}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
}


export const useAuth = () => useContext(AuthContext);