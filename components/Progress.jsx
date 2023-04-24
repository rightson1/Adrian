import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";

const Progress = ({ title, progress }) => {
    const { colors } = useGlobalProvider()
    return <div className=" bg-white flex justify-center items-center ">
        <div className="w-full h-full shadow-lg  flex flex-col justify-center items-center p-5 gap-4">

            {/* Typograpgy heading 1 variant color is gray */}
            <Typography variant="h2" className="font-[700]  text-center" fontFamily="Questrial"
                color={colors.orange[500]}
            >  {title}
            </Typography>
            <div className="flex gap-2 my-5">
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.orange[500]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>


            </div>
            <Grid container spacing={2} className="flex justify-center ">
                {
                    progress.map((item, index) => {
                        const { excerpt, title } = item;
                        return <Grid item xs={4} md={4} key={index}>
                            <div className="flex flex-col justify-start  items-center gap-4">

                                <div className="flex flex-col justify-start items-center gap-2 p-5">
                                    <h1 className="text-[#1A1A1A] font-[700] text-[20px]">{title}</h1>
                                    <p className="text-[#1A1A1A] font-[400] text-[15px] text-center">{excerpt}</p>
                                </div>
                            </div>
                        </Grid>
                    })
                }

            </Grid>
        </div>
    </div>

};


export default Progress;
