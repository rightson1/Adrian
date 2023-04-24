import React from "react";
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from "next/link";
import { useGlobalProvider } from "../utils/themeContext";
import { getNamedRouteRegex } from "next/dist/shared/lib/router/utils/route-regex";


const Instructions = ({ instructions, url }) => {

    const { colors } = useGlobalProvider();
    return (
        <Box
            sx={{
                "& .swiper-pagination-bullet": {
                    backgroundColor: "white !important"
                }
            }}>   <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                // autoplay={{
                //     delay: 50000,
                //     disableOnInteraction: false
                // }}
                autoplay={{ delay: 50000 }}
                //disable autoplay


                pagination={{ clickable: true }}

                slidesPerView={1}
            >
                {
                    instructions?.length > 0 && instructions.map((item, index) => {
                        const { name, instructions } = item
                        return (
                            <SwiperSlide key={index}>

                                <Box

                                    className="h-[70vh]   flex flex-col justify-center items-center gap-8 text-white relative  z-10 ">
                                    <div className="flex flex-col gap-5 p-10">
                                        <Typography fontFamily="Questrial" variant="h1" className="uppercase" textAlign="center"
                                            fontSize={{
                                                xs: '2.5rem',
                                                md: '3.5rem'
                                            }}>{
                                                name
                                            }</Typography>
                                        <Typography fontFamily="Questrial" variant="h5" textAlign="center">

                                            <ol className="text-whiye font-[400] text-[20px] text-start">{instructions.split(".").map((item, index) =>


                                                <Typography component="li" className="py-1" fontFamily="Questrial" key={index}>
                                                    <ChevronRightIcon fontSize="small" className="mr-2" />{item}</Typography>

                                            )
                                            }</ol>

                                        </Typography>


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
            </Swiper>
        </Box>
    )

};
// <div className=" bg-white flex justify-center items-center px-5 py-10  md:px-20 ">
//     <div className="w-full h-full shadow-lg  flex flex-col justify-center items-center p-5 gap-4">

//         {/* Typograpgy heading 1 variant color is gray */}
//         <Typography variant="h2" className="font-[700]  text-center" fontFamily="Questrial"
//             color={colors.orange[500]}
//         >   Do One Of These
//         </Typography>
//         <div className="flex gap-2 my-5">
//             <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>
//             <Box bgcolor={colors.orange[500]} className="w-20 h-1 "></Box>
//             <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>


//         </div>
//         <Grid container spacing={2} className="flex justify-center ">
// {
//     instructions?.map((item, index) => {
//         const { name, instructions } = item;
//         return <Grid item xs={12} md={6} key={index}>
//             <div className="flex flex-col justify-center items-center gap-4">

//                 <div className="flex flex-col justify-center items-center gap-2">
//                     <h1 className="text-[#1A1A1A] font-[700] text-[20px]">{name}</h1>
//                     <ol className="text-[#1A1A1A] font-[400] text-[15px] text-start">{instructions.split(".").map((item, index) =>


//                         <Typography component="li" className="py-1" fontFamily="Questrial" key={index}>
//                             <ChevronRightIcon fontSize="small" className="mr-2" />{item}</Typography>

//                     )
//                     }</ol>
//                 </div>
//             </div>
//         </Grid>
//     })
// }

//         </Grid>
//     </div>
// </div>



export default Instructions;
