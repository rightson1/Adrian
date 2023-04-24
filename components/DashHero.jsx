import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext"
import Ex from "./Ex";
const DashHero = () => {
    const { colors } = useGlobalProvider();
    return <Box className="w-screen   "

    >
        <Box className="p-5  text-black">
            <Typography fontFamily="Questrial" className="text-[30px]  font-[400] text-black">
                HOME WORKOUTS
            </Typography>
            <div className="flex justify-around ">
                <Box className="flex flex-col justify-center items-center ">
                    <Typography color={"white"} variant="h5" className="font-[900] text-black">
                        0
                    </Typography>
                    <Typography color={"white"} variant="h6" className="font-[300] my-1 text-black">
                        WORKOUTS
                    </Typography>
                </Box>
                <Box className="flex flex-col justify-center items-center">
                    <Typography color={"white"} variant="h5" className="font-[900] text-black">
                        0
                    </Typography>
                    <Typography color={"white"} variant="h6" className="font-[300] my-1 text-black">
                        Minutes
                    </Typography>
                </Box>
                <Box className="flex flex-col justify-center items-center">
                    <Typography color={"white"} variant="h5" className="font-[900] text-black">
                        0
                    </Typography>
                    <Typography color={"white"} variant="h6" className="font-[300] my-1 text-black">
                        Friends
                    </Typography>
                </Box>

            </div>
        </Box>
        <Ex />

    </Box>;
};

export default DashHero;
