import React from "react";
import { Avatar, Box, Button, Grid, Skeleton, Typography } from "@mui/material";
import { useGlobalProvider } from "../../utils/themeContext"
import Link from "next/link";
import { useRouter } from "next/router";
import Slide from "../../components/Slide";
import Pcon from "../../components/Pcon";
import { useInstructions } from "../../utils/hooks/useApi";
import Instructions from "../../components/Instructions";
import { useAuth } from "../../utils/authContext";
import { useStopwatch } from 'react-timer-hook';
import { auth, db } from "../../utils/firebase";
import { doc, updateDoc, query, collection, where, onSnapshot } from "firebase/firestore";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
const Ex = () => {
    const { colors } = useGlobalProvider();
    const { slug: name } = useRouter().query;
    const { user } = useAuth();
    const [started, setStarted] = React.useState(false);
    const [users, setUsers] = React.useState([]);


    const { data } = useInstructions(name, user?.plan)
    const slug = name || ""

    const items =
    {
        title: slug?.toUpperCase(),
        url: `/${slug.charAt(0).toUpperCase() + slug.slice(1)}.gif`,
        img: `/${slug.charAt(0).toUpperCase() + slug.slice(1)}.png`,
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet lorem.",

    }
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false });

    const handleSubmit = (action) => {
        if (action === "start") {
            const userRef = doc(db, "users", user.uid);
            const update = () => updateDoc(userRef, {
                exercise: slug,
            })
            toast.promise(update(), {
                loading: 'Informing your partners...',
                success: 'successfully informed your partners',
                error: 'Error',
            })
            setStarted(true)
        }
        else if (action === "stop") {
            const userRef = doc(db, "users", user.uid);
            const update = () => updateDoc(userRef, {
                exercise: "",
                time: {
                    minutes: minutes + user.minutes || 0,
                    seconds: seconds + user.seconds || 0,
                    hours: hours + user.hours || 0,
                },
            })
            toast.promise(update(), {
                loading: 'Loading',
                success: 'saved',
                error: 'Error',
            })
        }

    };

    useEffect(() => {
        if (!user) return;
        const q = query(collection(db, "users"), where("exercise", "==", slug))
        const unsub = onSnapshot(q, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setUsers(docs);

        });

        return () => unsub();

    }, [start, stop])

    return <Box className="">

        <Box className="w-screen py-20 gap-2 text-white flex justify-center items-center flex-col "

            sx={{
                display: 'inline-block',
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/pullUps.jpg")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <Typography variant="h2" color={'white'} className="font-[700] text-center" fontFamily="Questrial"
            >{slug.toUpperCase()}
            </Typography>
            <div className="flex gap-2 my-5">
                <Box bgcolor={colors.red[800]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.red[500]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.red[800]} className="w-20 h-1 "></Box>
            </div>
            <div className="flex gap-2">
                <Button className="text-white py-2 px-5 hover:bg-transparent mt-6"
                    onClick={() => {
                        start()
                        handleSubmit("start")
                    }}
                    sx={{
                        bgcolor: colors.red[600] + "!important",
                        border: "2px solid " + colors.red[600] + "!important",
                        "&:hover": {
                            bgcolor: "transparent" + "!important",
                            color: colors.red[600] + "!important",
                        }
                    }}>
                    START
                </Button>
                <Button className="text-white py-2 px-5 hover:bg-transparent mt-6"
                    onClick={() => {
                        pause()
                        handleSubmit("stop")
                    }}
                    sx={{
                        bgcolor: colors.red[600] + "!important",
                        border: "2px solid " + colors.red[600] + "!important",
                        "&:hover": {
                            bgcolor: "transparent" + "!important",
                            color: colors.red[600] + "!important",
                        }
                    }}>
                    STOP
                </Button>
            </div>
            <div className="text-6xl font-mono">
                <span>{minutes.toString().padStart(2, '0')}</span>:<span>{seconds.toString().padStart(2, '0')}</span>
            </div>
        </Box>
        <Grid container bgcolor={colors.black[600]} className="py-10">
            <Grid item xs={12} md={6} className="">
                <Typography color={colors.red[600]} fontFamily="Questrial" className="text-[30px]  font-[400] underline text-center">
                    People Doing This Exercise
                </Typography>
                <Grid container className="py-10 w-full">
                    {users.length > 0 ? users.map((user, index) => (
                        <Grid item xs={12} md={4} className="flex flex-col p-5 gap-4" key={index}>
                            <Box className="w-full flex flex-col justify-center items-center">
                                <Box className="flex w-full items-center justify-start gap-2  text-black  ">
                                    <Avatar src={user.photoURL} />
                                    <Typography color={colors.black[100]} variant="h5" fontFamily="Questrial" className="my-1 text-center">
                                        {user.displayName}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    )) :
                        <Box className="w-full ">
                            <Typography variant="h2" color={colors.grey[500]} className="font-[700] opacity-70 text-center " fontFamily="Questrial"
                            >No one is doing this exercise
                            </Typography>
                        </Box>
                    }
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} className="p-5 " sx={{
                display: {
                    xs: 'none',
                    md: 'block',
                }
            }}>
                <Box className="h-full flex justify-center flex-col items-center">
                    <img src="/robot.gif" alt="" className="w-[200px] w-full " />
                    <Typography color={colors.black[100]} variant="body1" fontFamily="Questrial" className="my-1 text-center">
                        Keep going, you can do it!
                    </Typography>
                </Box>


            </Grid>

        </Grid>
        <div className="w-full h-full   flex flex-col justify-center items-center p-5 gap-4 ">
            <Typography variant="h2" color={colors.grey[500]} className="font-[700] opacity-70 text-center" fontFamily="Questrial"
            >Instructions
            </Typography>
            <div className="flex gap-2 my-5">
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.teal[500]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>
            </div>

        </div>
        <Grid container>
            <Grid item xs={12} md={6} className="p-5 h-[70vh]">
                <Box component="img" className="w-full h-full "
                    src={items.url}
                />
            </Grid>
            <Grid item xs={12} md={6} className="p-5">
                {
                    data?.length > 0 ? <Instructions instructions={data} url={items.img} /> :
                        <Skeleton variant="rectangular" width="100%" height="100%" />

                }
            </Grid>
        </Grid>

    </Box >
};

export default Ex;
