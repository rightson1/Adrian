import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext"
import { useAuth } from "../utils/authContext";
import Link from "next/link";
const Hero = () => {
    const { colors } = useGlobalProvider();
    const { signInWithGoogle, user } = useAuth()
    const submit = async () => {
        await signInWithGoogle()
    }
    return <Box className="w-screen h-[100vh] gap-2 text-white flex justify-center items-center flex-col -mt-[100px]"

        sx={{
            display: 'inline-block',
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./pullUps.jpg")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }}
    >
        <Typography color={colors.red[600]} fontFamily="Questrial" className="text-[30px]  font-[400]">
            ATHLETS FITNESS CLUB
        </Typography>
        <Typography color={"white"} variant="h1" className="font-[900] text-[70px]">
            TRAIN THE
        </Typography>
        <Typography color={"white"} variant="h3" className="font-[300] my-1 text-[50px]">
            FIGHTER IN YOU
        </Typography>

        <Typography color={colors.black[100]} variant="body1" fontFamily="Questrial" className="my-1 text-center">
            Welcome to our gym! Join us for a fun and effective workout experience. Get started on your fitness journey today and become the best version of yourself!
        </Typography>
        {
            !user ? <Button className="text-white py-2 px-5 hover:bg-transparent mt-6" onClick={submit} sx={{
                bgcolor: colors.red[600] + "!important",
                border: "2px solid " + colors.red[600] + "!important",
                "&:hover": {
                    bgcolor: "transparent" + "!important",
                    color: colors.red[600] + "!important",
                }
            }}>
                Lets Get Started
            </Button> :
                <Link href="/dashboard">
                    <Button className="text-white py-2 px-5 hover:bg-transparent mt-6" sx={{
                        bgcolor: colors.red[600] + "!important",
                        border: "2px solid " + colors.red[600] + "!important",
                        "&:hover": {
                            bgcolor: "transparent" + "!important",
                            color: colors.red[600] + "!important",
                        }
                    }}>
                        Get Started
                    </Button>
                </Link>
        }

    </Box>;
};

export default Hero;
