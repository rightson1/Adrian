import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { toast } from 'react-hot-toast';
import { auth, db } from "../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { useAuth } from '../utils/authContext';

export default function Form({ plan, setPlan, setValues, values, setOpen }) {
    const [data, setData] = React.useState(null)
    const { user } = useAuth();
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {
        setValues({ ...values, ...data, memberEmail: user.email, memberEmail: user.email })
        if (data.code) {
            const userRef = doc(db, "users", user.uid);
            toast.loading("Subscribing...")
            updateDoc(userRef, {
                plan: values.name

            }).then((res) => {
                setPlan(false);
                setOpen(true);
                toast.dismiss();
                toast.success("Subscribed successfully")
            }).catch((err) => {
                console.log(err)
                toast.dismiss();
                toast.error("Something went wrong")
            })

        }
        else {
            toast.error("Please fill all fields")
        }

    };
    const handleClose = () => {
        setPlan(false);
    };

    return (
        <div>
            <Dialog open={plan} >
                <DialogTitle>Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        To subscribe to this website, please enter your email address and name here. We
                        will send updates occasionally.
                    </DialogContentText>
                    <TextField
                        onChange={handleChange}
                        autoFocus
                        margin="dense"
                        label="Mpesa Code"
                        name="code"
                        type='text'
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}