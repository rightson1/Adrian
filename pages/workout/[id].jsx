import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useGlobalProvider } from "../../utils/themeContext"
import Link from "next/link";
import { useRouter } from "next/router";
import Slide from "../../components/Slide";
import Pcon from "../../components/Pcon";
const Ex = () => {
    const { colors } = useGlobalProvider();
    const { id } = useRouter().query
    const items = [
        {
            title: id?.toUpperCase(),
            url: "/sit.jpg",
            excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet lorem.",

        },

    ]
    const muscles = [
        { week: "One" },
        { name: "abdominals" },
        { name: "abductors" },
        { name: "biceps" },
        {
            week: "Two",
        },
        { name: "calves" },
        { name: "chest" },
        { name: "forearms" },
        { week: "Three" },
        { name: "glutes" },
        { name: "hamstrings" },
        { name: "lats" },
        { week: "Four" },
        { name: "lower_back" },
        { name: "middle_back" },
        { name: "neck" },
        { week: "Five" },
        { name: "quadriceps" },
        { name: "traps" },
        { name: "triceps" },

    ];

    return <Box className="">
        <Slide {...{ items }} />
        <div className="flex my-10 p-5 md:p-10 ">
            <Grid container className="" spacing={3}
            >


                <Grid container spacing={3} >
                    {
                        muscles.map((item, index) => {
                            return item.name ?
                                <Grid item xs={12} md={4} key={index} >
                                    <Link
                                        href={`/single/${item.name}`}
                                    >
                                        <Box className="w-full h-[200px] p-5 cursor-pointer hover:scale-105 transition-all duration-500" sx={{
                                            backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${`/${item.name}.png`})`,
                                            backgroundSize: 'cover',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundPosition: 'center',
                                        }}>
                                            <Typography variant="h4" className="text-white  capitalize">{item.name}</Typography>

                                        </Box>
                                    </Link>

                                </Grid>
                                : <Grid item xs={12} md={12} key={index} >
                                    <Pcon title={item.week} />
                                </Grid>
                        })
                    }
                </Grid>


            </Grid>
        </div>
    </Box>
};

export default Ex;
