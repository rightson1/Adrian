import Box from "@mui/material/Box";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import Hero from "../components/Hero";
import DashHero from "../components/DashHero";
import Slide from "../components/Slide";
import Progress from "../components/Progress";
import TextField from '@mui/material/TextField';
import { useAuth } from "../utils/authContext";
import { Button, Grid, Typography } from "@mui/material";
import Chat from "../components/Chat";
const items = [
    {
        title: "beginner",
        url: "./Beginner.png",
        excerpt: "If you're new to fitness, our beginner exercises are perfect for you! We focus on building a solid foundation with basic movements like bodyweight exercises, light resistance training, and gentle cardio. Our trainers will guide you every step of the way, ensuring proper form and safety as you start your fitness journey.",

    },
    {
        title: "intermediate",
        url: "./Intermediate.png",
        excerpt: "Ready to take your fitness to the next level? Our intermediate exercises are designed to challenge you with moderate resistance training, more advanced cardio, and increased intensity. You'll continue to build strength, stamina, and flexibility, pushing yourself to new limits under the guidance of our experienced trainers",
    },
    {
        title: "advanced",
        url: "./Advanced.png",
        excerpt: "Looking for a challenge? Our advanced exercises are for those who are already in great shape and want to push themselves to the max. We'll focus on heavy resistance training, high-intensity interval training (HIIT), and advanced cardio techniques to take your fitness to new heights. Our trainers will provide expert guidance as you strive for peak performance.",
    },
]
const submit = (e) => {
    e.preventDefault();
    const { name, difficulty, type } = e.target.elements;
}
const Index = () => {
    const { colors } = useGlobalProvider();
    const { user } = useAuth();
    const userDetails = [
        {
            title: "User Name",
            excerpt: user?.displayName
        },
        {
            title: "Email",
            excerpt: user?.email
        },
        {
            title: "Level",
            excerpt: user?.level
        }


    ]

    const types = [
        "cardio", "olympic_weightlifting", "plyometrics", "powerlifting", "strength", "stretching", "strongman"
    ]
    const difficulty = [
        "Beginner", "Intermediate", "Expert"
    ]
    const progress = [
        {
            title: "Hours",
            excerpt: "1000+",
        },
        {
            title: "Minutes",
            excerpt: "1000+",
        },
        {
            title: "Exercises",
            excerpt: "1000+"
        }

    ]
    return (
        <Box>

            <Slide {...{ items, dashboard: true }} />
            <Progress {...{ progress, title: "Your Progress" }} />
            <Chat />
            <Progress {...{ progress: userDetails, title: "Your Progress" }} />
            <Box bgcolor={colors.black[600]} className="w-screen  px-5 py-10 min-h-[50vh]">

                <Typography className=" w-full text-center text-white underline" variant="h3" fontFamily="Questrial">
                    ACCOUNT SETTINGS
                </Typography>
                <Grid container spacing={3} className="py-10" component="form" onSubmit={submit}>
                    <Grid item xs={12} md={6} className="flex flex-col gap-2">
                        <Typography className="   text-white " component="label" htmlFor="name" fontFamily="Questrial">
                            Name
                        </Typography>
                        <input type="text" id="name" name="name" className=" p-2 outline-none w-full" />
                    </Grid>

                    <Grid item xs={12} md={6} className="flex flex-col gap-2">
                        <Typography className="   text-white " component="label" htmlFor="name" fontFamily="Questrial">
                            Difficulty
                        </Typography>
                        <select name="difficulty" className=" p-2 outline-none w-full" id="difficulty">
                            {
                                difficulty.map((type, index) => (
                                    <option key={index} value={type} className="capitalize">{type}</option>
                                ))
                            }
                        </select>
                    </Grid>
                    <Grid item xs={12} md={6} className="flex flex-col gap-2">
                        <Typography className="   text-white " component="label" htmlFor="type" fontFamily="Questrial">
                            Excercise Type
                        </Typography>
                        <select name="type" className=" p-2 outline-none w-full" id="type">
                            {
                                types.map((type, index) => (
                                    <option key={index} value={type} className="capitalize">{type}</option>
                                ))
                            }
                        </select>
                    </Grid>
                    <Grid item xs={12} md={6} className="flex flex-col gap-2 justify-end">
                        <Button variant="contained" color="primary" type="submit" className="w-full">
                            Save
                        </Button>
                    </Grid>
                </Grid>

            </Box>

        </Box>
    )

};

export default Index;
