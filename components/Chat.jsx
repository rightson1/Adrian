import { Box, Button, Collapse, Grid, IconButton, Typography } from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import React from "react";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { useGlobalProvider } from "../utils/themeContext";
import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react";
import { SayButton } from 'react-say'
import { toast } from "react-hot-toast";

const Chat = () => {
    const { colors } = useGlobalProvider();
    const [text, setText] = useState(null);
    const [food, setFood] = useState([])
    const [foodRes, setFoodRes] = useState(null)
    const [messages, setMessages] = useState([])
    const [last, setLast] = useState(null)
    const submit = () => {
        const data = [{ text, own: true }]
        axios.post('/api/nlp', { name: text }).then((res) => {
            data.push({ text: res.data.answer, own: false, doubts: res.data.doubts })
            setLast(res.data.answer)
            setMessages([...messages, ...data]);

        }).catch((e) => {
            console.log(e)
        })
        setText(null)
    }
    const chatWindowRef = useRef();
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    }, [messages])

    useEffect(() => {
        if (last) {
            const speechSynthesisInstance = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(last);
            speechSynthesisInstance.speak(utterance);
            setLast(null)
        }
    }, [last])

    const submitFood = () => {
        const api = () => axios.get(`https://api.api-ninjas.com/v1/nutrition?query=${food}`, {
            headers: {
                "X-Api-Key": "UCUER7elJh39pQXJZSA0pg==mZ31FCMMuLzvQHaR",

            }
        }).then((res) => {

            setFoodRes(res.data[0])
        })
        toast.promise(api(),
            {
                loading: 'Fetching..',
                success: <b>Done!</b>,
                error: <b>Could not save.</b>,
            })
    }
    return <Grid container bgcolor={colors.black[600]} className="p-5" spacing={3}>
        <Grid item xs={12} md={4} className="flex flex-col gap-4">
            <Typography className=" w-full text-center text-white underline" variant="h3" fontFamily="Questrial">
                Healthy Tips
            </Typography>
            <Typography className=" w-full text-center text-white " variant="h6" fontFamily="Questrial" >
                You wanna  know the nutrients in your foods?
                Type them below and get the starts
            </Typography>
            <Box className="flex  gap-2  mt-10">
                <Box component="input" type="text" value={food} onChange={(e) => setFood(e.target.value)} placeholder="Enter your message " id="name" name="name" className="rounded-md p-2 outline-none w-full " />
                <Button onClick={submitFood} className="text-white" sx={{
                    bgcolor: colors.red[500] + "!important",
                }}>
                    Send
                </Button>

            </Box>
            <Typography className=" w-full text-center text-white  underline" variant="h6" fontFamily="Questrial" >
                Results
            </Typography>
            {
                !foodRes && <Box className="bg-white w-full  min-h-[100px] rounded text-black "
                >



                </Box>
            }
            {foodRes && <div className="bg-white rounded-md p-5">
                <h1 className="text-xl font-bold mb-2">{foodRes.name}</h1>
                <ul className="list-disc pl-5">
                    <li>Calories: {foodRes.calories}</li>
                    <li>Serving Size (g): {foodRes.serving_size_g}</li>
                    <li>Total Fat (g): {foodRes.fat_total_g}</li>
                    <li>Saturated Fat (g): {foodRes.fat_saturated_g}</li>
                    <li>Protein (g): {foodRes.protein_g}</li>
                    <li>Sodium (mg): {foodRes.sodium_mg}</li>
                    <li>Potassium (mg): {foodRes.potassium_mg}</li>
                    <li>Cholesterol (mg): {foodRes.cholesterol_mg}</li>
                    <li>Total Carbohydrates (g): {foodRes.carbohydrates_total_g}</li>
                    <li>Fiber (g): {foodRes.fiber_g}</li>
                    <li>Sugar (g): {foodRes.sugar_g}</li>
                </ul>
            </div>}
        </Grid>
        <Grid item xs={12} md={8}>

            <Typography className=" w-full text-center text-white underline" variant="h3" fontFamily="Questrial">
                Chat Gym
            </Typography>

            <Box >
                <div className="flex flex-col  h-[70vh] pt-5" >
                    {
                        messages.length > 0 ? <div className="h-full flex flex-col overflow-auto gap-2" ref={chatWindowRef}>
                            {
                                messages.map((item, index) => {
                                    return <Box key={index} sx={{
                                        alignSelf: item.own ? "end" : "start"
                                    }}
                                        className="flex p-5 bg-white rounded-md  w-[70%] flex-col">
                                        <Typography>
                                            {item.text}
                                        </Typography>

                                        {item.doubts && item.doubts.length > 0 &&
                                            <Box className="my-1 rounded p-1" bgcolor={colors.black[100]}>
                                                <Typography className="flex justify-between" onClick={() => setOpen(open === index ? null : index)}>
                                                    <span>   Did you mean   </span>  {open ? <ExpandLess /> : <ExpandMore />}
                                                </Typography>
                                                <Collapse in={open === index} timeout="auto" unmountOnExit>
                                                    <Typography

                                                        className="underline" color={colors.teal[400]}>
                                                        {
                                                            item.doubts?.map(({ intent }, index) => <Typography key={index} className="cursor-pointer" onClick={(e) => setText(intent)}>{intent}</Typography>)
                                                        }
                                                    </Typography>

                                                </Collapse>
                                            </Box>
                                        }
                                    </Box>
                                })
                            }
                        </div> :
                            <Box className="h-full flex justify-center flex-col items-center">
                                <img src="/robot.gif" alt="" className="w-[300px] w-full " />
                                <Typography color={colors.red[600]} className=" w-full text-center text-white " variant="h6" fontFamily="Questrial" >
                                    Enter Message to start chating
                                </Typography>
                            </Box>

                    }
                    <Box className="flex  gap-2  mt-10">
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your message " id="name" name="name" className="rounded-md p-2 outline-none w-full " />
                        <IconButton onClick={submit}>
                            <SendIcon className="text-[30px] text-white -rotate-[38deg]" />
                        </IconButton>
                    </Box>
                </div>
            </Box>
        </Grid>
    </Grid>
};

export default Chat;
