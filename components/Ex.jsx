import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useGlobalProvider } from "../utils/themeContext"
import Link from "next/link";
const Ex = () => {
    const { colors } = useGlobalProvider();
    const difficulty = [
        "Beginner",
        "Intermediate",
        "Advanced",
    ]
    const muscules = [
        "abdminials", "abductors", "biceps", "calves", "chest", "forearms", "glutes", "hamstrings", "lats", "lower_back", "middle_back", "neck", "quadriceps", "traps", "triceps",
    ]
    return <Box className="py-20"> <Grid container className="w-screen p-5" bgcolor={colors.black[100]} spacing={3}
    >
        {
            difficulty.map((item, index) => {
                return <Grid item xs={12} md={4} key={index} className="flex flex-col items-center justify-center"

                >
                    <Link href={`/workout/${item.toLowerCase()}`}>
                        <Box className="w-full h-[200px] p-5 " sx={{
                            backgroundImage: `linear-gradient(to bottom,rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 6)), url(${`./${item}.png`})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            "&:hover": {
                                cursor: "pointer",
                                transform: "scale(1.05)",
                                transition: "all 0.5s ease",
                            }
                        }}>
                            <Typography variant="h4" className="text-white ">{item}</Typography>
                        </Box>

                    </Link>
                    {/* <Grid container spacing={3} >
                        {
                            muscules.map((item, index) => {
                                return <Grid item xs={12} md={4} key={index} >
                                    <Box className="w-full h-[200px]" sx={{
                                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${`./${item}.png`})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                    }}>
                                        n
                                    </Box>

                                </Grid>
                            })
                        }
                    </Grid> */}
                </Grid>
            })
        }

    </Grid>
    </Box>
};

export default Ex;
