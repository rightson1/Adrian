import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext"
import { useAuth } from "../utils/authContext";
import Link from "next/link";
const Motivation = () => {
    const { colors } = useGlobalProvider();
    return <Box className="w-screen h-[80vh] gap-2 text-white flex justify-center items-center flex-col -mt-[100px] px-20"

        sx={{
            display: 'inline-block',
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./pull.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}
    > <div className="flex flex-col self-center md:self-end  w-[600px] items-end">
            <Typography color={"white"} variant="h3" className="font-[800] my-1 text-[30px] md:text-[50px] text-right">
                GET OUT OF YOUR
            </Typography>

            <Typography color={colors.red[500]} variant="h1" className="font-[900] text-[50px] md:text-[70px] text-right">
                COMFORT ZONE
            </Typography>

            <Typography color={colors.black[100]} variant="body1" fontFamily="Questrial" className="my-1 text-right w-1/2">
                Get started on your fitness journey today and become the best version of yourself!
            </Typography>
        </div>

    </Box>;
};

export default Motivation;
