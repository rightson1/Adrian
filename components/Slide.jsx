import React from "react";
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"
import Link from "next/link";
import { useAuth } from "../utils/authContext";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

const Slide = ({ items, dashboard }) => {
    const { user } = useAuth();
    const router = useRouter();
    const submit = (link, title) => {
        router.push(link)
        // if (!user.plan) {
        //     toast.error("You are not subscribed to any plan")
        // } else if (user.plan === "beginner") {
        //     if (title !== "beginner") {
        //         toast.error("You are not subscribed to this plan");
        //     } else {
        //         router.push(link)
        //     }
        // } else {
        //     router.push(link)
        // }
    }
    return <Box
        sx={{
            "& .swiper-pagination-bullet": {
                backgroundColor: "white !important"
            }
        }}>   <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            autoplay={{ delay: 50000 }}
            pagination={{ clickable: true }}

            slidesPerView={1}
        >
            {
                items.map((item, index) => {
                    const { title, excerpt, url } = item
                    return (
                        <SwiperSlide key={index}>

                            <Box

                                className="h-[70vh] w-screen  flex flex-col justify-center items-center gap-8 text-white relative  z-10 ">
                                <div className="flex flex-col gap-5 p-10">
                                    <Typography fontFamily="Questrial" variant="h1" className="uppercase" textAlign="center"
                                        fontSize={{
                                            xs: '2.5rem',
                                            md: '3.5rem'
                                        }}>{
                                            title
                                        }</Typography>
                                    <Typography fontFamily="Questrial" variant="h5" textAlign="center">
                                        {excerpt}
                                    </Typography>


                                    {
                                        dashboard && <div className="flex justify-center">

                                            <Button onClick={() => submit(`/workout/${title?.toLowerCase()}`, title)}
                                                className="w-[150px] "
                                                sx={{
                                                    border: "1px solid white",
                                                    color: "white",
                                                    "&:hover": {
                                                        color: "black",
                                                        backgroundColor: "white"
                                                    }
                                                }}
                                            >
                                                Begin
                                            </Button>
                                        </div>
                                    }

                                </div>
                                <Box
                                    component="img"

                                    className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                                    src={url}
                                />
                                <Box
                                    className="absolute top-0 left-0 w-full z-[-1] h-full object-cover bg-[rgba(0,0,0,0.5)]"

                                />

                            </Box>
                        </SwiperSlide>
                    )
                }

                )
            }
        </Swiper></Box>;
};

export default Slide;
