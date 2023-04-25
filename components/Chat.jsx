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
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Foods from "./Foods";


const Chat = () => {
    const { colors } = useGlobalProvider();
    const [text, setText] = useState(null);
    const [food, setFood] = useState([])
    const [foodRes, setFoodRes] = useState(null)
    const [messages, setMessages] = useState([])
    const [last, setLast] = useState(null)
    const [mic, setMic] = useState(false)
    const [loading, setLoading] = useState(false)
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();


    const submit = (e) => {
        setLoading(true)
        e.preventDefault(0);
        const data = [{ text, own: true }]
        axios.post('/api/nlp', { name: text || transcript }).then((res) => {
            data.push({ text: res.data.answer, own: false, doubts: res.data.doubts })
            setLast(res.data.answer)
            setMessages([...messages, ...data]);
            setLoading(false)
        }).catch((e) => {
            console.log(e)
            setLoading(false)
        })
        setText(null)
        e.target.reset();
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
    useEffect(() => {
        if (transcript) {
            setText(transcript)

        }
    }
        , [transcript])

    useEffect(() => {
        if (mic) {
            SpeechRecognition.startListening({ continuous: true })
        } else {
            SpeechRecognition.stopListening()
        }
    }, [mic])
    return <Grid container bgcolor={colors.black[600]} className="p-5" spacing={3}>
        <Foods />
        <Grid item xs={12} md={7}>

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
                                        alignSelf: item.own ? "end" : "start",
                                        bgcolor: item.own ? "white" : colors.teal[100],
                                    }}
                                        className={`flex p-5   w-[70%] flex-col ${item.own ? "rounded-tl-lg rounded-bl-lg  rounded-br-lg" : "rounded-tr-lg rounded-bl-lg rounded-br-lg"}`}>
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
                                                            item.doubts?.map(({ intent }, index) => <button key={index} className="cursor-pointer" onClick={(e) => setText(intent)}>{intent}</button>)
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
                    <Box className="flex  gap-2  mt-10" component="form" onSubmit={submit}>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter your message " id="name" className="rounded-md p-2 outline-none w-full " />
                        <Button onClick={() => setMic(!mic)
                        } className="text-white" sx={{
                            bgcolor: (mic ? colors.red[500] : colors.teal[500]) + "!important",
                        }}>
                            <KeyboardVoiceIcon />
                        </Button>

                        <IconButton type="submit" className="text-white text-xl">
                            {loading ? '....' : <SendIcon className="text-[30px] text-white -rotate-[38deg]" />}
                        </IconButton>
                    </Box>
                </div>
            </Box>
        </Grid>
    </Grid>
};

export default Chat;
