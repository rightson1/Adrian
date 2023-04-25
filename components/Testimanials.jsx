import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext";
const Testimanials = () => {
    const { colors } = useGlobalProvider();
    return <Box className="w-screen py-[80px] gap-1 text-white flex justify-center items-center flex-col -mt-[100px]"

        sx={{
            display: 'inline-block',
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./hand.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}
    >

        <Typography color={"white"} variant="h3" className="font-[500] my-1 text-[50px]">
            TESTIMANIALS
        </Typography>

        <Typography color={colors.black[100]} variant="body1" fontFamily="Questrial" className="my-1 text-center">
            Get fit. Achieve goals. Expert trainers. Modern facility. Group class. Personalized plans. Amenities. Clean & safe. Positive community
        </Typography>
        <Box component={"img"}
            sx={{
                border: `2px solid ${colors.red[600]}`,
            }}
            src="./sit.jpg" className="w-[100px] h-[100px] rounded-full" alt="" />
        <Typography color={'white'} fontFamily="Questrial" className="text-[30px]  font-[400]">
            Adrian
        </Typography>
        <Typography color={colors.red[600]} fontFamily="Questrial" className="text-[30px] -my-1  font-[400]">
            ATHLETS FITNESS CLUB
        </Typography>

    </Box>;
};


export default Testimanials;
