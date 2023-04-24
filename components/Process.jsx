import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import ScienceIcon from '@mui/icons-material/Science';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const Process = () => {
    const { colors } = useGlobalProvider()
    const Gcontainer = ({ icon, text }) => {
        return <Grid item xs={12} md={3}>
            <Box className="flex   justify-center flex-col items-center border-white p-5  -mr-[1px]" sx={{
                border: "1px solid white",

            }}>
                <Button className="rounded-full text-white h-[80px] w-[80px]" sx={{
                    bgcolor: colors.red[600] + "!important",
                }}>
                    {icon}

                </Button>
                <Typography color={"white"} variant="h4" fontFamily="Questrial" className="my-5 font-[400]">
                    {text}
                </Typography>
            </Box>
        </Grid>
    }
    return <Box className="pt-10 pb-[200px] flex flex-col justify-center items-center " sx={{
        bgcolor: colors.black[600] + "!important",
    }}>
        <Typography color={"white"} variant="h1" fontFamily="Questrial" className=" ">
            OUR PROCESS
        </Typography>
        <Grid container className=" p-5 md:px-20 my-[20px]" spacing={2} >
            <Gcontainer icon={<AutoGraphIcon className="text-[40px]" />} text={"      ANALYSE YOUR GOALS"} />
            <Gcontainer icon={<ScienceIcon className="text-[40px]" />} text={"WORK HARD ON IT"} />
            <Gcontainer icon={<NetworkCheckIcon className="text-[40px]" />} text={"IMPROVE YOU"} />
            <Gcontainer icon={<EmojiEventsIcon className="text-[40px]" />} text={"ACHIEVE YOUR DESTINY"} />
        </Grid>

    </Box>;
};

export default Process;
