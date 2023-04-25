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
import { SayButton } from 'react-say'
import { toast } from "react-hot-toast";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Foods = () => {
    const { colors } = useGlobalProvider();
    const [food, setFood] = useState([])
    const [foodRes, setFoodRes] = useState(null)
    const [mic, setMic] = useState(false)
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    useEffect(() => {
        if (mic) {
            SpeechRecognition.startListening({ continuous: true })
        } else {
            SpeechRecognition.stopListening()
        }
    }, [mic])
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
    useEffect(() => {
        if (transcript) {
            setFood(transcript)

        }
    }
        , [transcript])

    return <Grid item xs={12} md={5} className="flex flex-col gap-4">
        <Typography className=" w-full text-center text-white underline" variant="h3" fontFamily="Questrial">
            Healthy Tips
        </Typography>
        <Typography className=" w-full text-center text-white " variant="h6" fontFamily="Questrial" >
            You wanna  know the nutrients in your foods?
            Type them below and get the starts
        </Typography>
        <Box className="flex  gap-2  mt-10">
            <Box component="input" type="text" value={food} onChange={(e) => setFood(e.target.value)} placeholder="Enter your message " id="name" name="name" className="rounded-md p-2 outline-none w-full " />
            {/* <Button onClick={() => setMic(!mic)
            } className="text-white" sx={{
                bgcolor: (mic ? colors.red[500] : colors.teal[500]) + "!important",
            }}>
                <KeyboardVoiceIcon />
            </Button> */}

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
            !foodRes && <Box className="bg-white w-full  min-h-[100px] md:h-[260px] rounded text-black "
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

};

export default Foods;
