import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import { Box, Grid, Typography, Button } from "@mui/material";

const Contact = () => {
    const { colors } = useGlobalProvider()
    return <Box bgcolor={colors.black[600]} className="pt-10 pb-[100px] px-3 md:px-10">
        <Grid container spacing={5}>
            <Grid item xs={12} md={6} className="flex flex-col  gap-6">
                <Typography color={"white"} variant="h3" fontFamily="Questrial" className="">
                    KEEP IN TOUCH
                </Typography>
                <div className="flex flex-col gap-2">
                    <Typography color={"white"} variant="h5" fontFamily="Questrial" className=" ">
                        Name
                    </Typography>
                    <input type="text" id="name" className=" p-2 outline-none w-full " />
                </div>
                <div className="flex flex-col gap-2">
                    <Typography color={"white"} variant="h5" fontFamily="Questrial" className=" ">
                        Email
                    </Typography>
                    <input type="text" id="name" className=" p-2 outline-none w-full " />
                </div>
                <div className="flex flex-col gap-2">
                    <Typography color={"white"} variant="h5" fontFamily="Questrial" className=" ">
                        Message
                    </Typography>
                    <textarea type="text" id="name" className=" p-2 outline-none w-full   h-[100px]" />
                </div>
                <Button className="text-white py-2 px-5 hover:bg-transparent mt-6 w-[120px]" sx={{
                    bgcolor: colors.red[500] + "!important",
                    border: "2px solid " + colors.red[600] + "!important",
                    "&:hover": {
                        bgcolor: "transparent" + "!important",
                        color: colors.red[600] + "!important",
                    }
                }}>
                    Submit
                </Button>
            </Grid>
            <Grid item xs={12} md={6} className="">
                <Box className="h-[450px]">
                    <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=riara university&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </Box>
            </Grid>
        </Grid>
    </Box>;
};

export default Contact;
