import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

const Pricing = () => {
    const { colors } = useGlobalProvider()

    const Card = ({ list, title, price, middle }) => {
        return <Grid item xs={12} md={4} >
            <Box bgcolor={middle ? colors.red[500] : colors.black[700]} className="w-full h-full py-10 rounded-md flex flex-col justify-center gap-2 shadow-lg"
            >

                <Typography variant="h3" color={middle ? "white" : colors.red[600]} fontFamily="Questrial" className="font-[400] text-center">
                    {title}
                </Typography>
                <Box bgcolor={middle ? colors.red[600] : colors.black[900]} className="flex justify-center items-center flex-col p-5">
                    <Box className="flex items-start text-white gap-1">
                        <span className="text-[24px] font-[500] ">ksh</span>
                        <Typography fontFamily="Questrial" className="font-[600] text-[40px] md:text-[50px]">
                            {price}
                        </Typography>
                    </Box>
                </Box>
                <Box className="flex justify-center items-center flex-col p-5 gap-4">
                    {
                        list.map((item, index) => {
                            return <Box key={index} className="w-full flex flex-col justify-center items-center">
                                <Box className="flex items-center justify-start gap-2  text-white  w-[250px]">
                                    <CheckCircleOutlinedIcon />
                                    <Typography color={colors.black[100]} variant="h5" fontFamily="Questrial" className="my-1 text-center">
                                        {item}
                                    </Typography>
                                </Box>
                                <Box bgcolor={colors.grey[800]} className="w-full h-[1px] "></Box>
                            </Box>
                        })


                    }

                </Box>
                <Button className="w-[200px] self-center text-white mb-20 mt-10"
                    sx={{
                        bgcolor: (middle ? colors.red[700] : colors.black[900]) + "!important",
                    }}>
                    Submit
                </Button>
            </Box>

        </Grid>

    }

    return <Box bgcolor={colors.black[600]} className="flex justify-center items-center flex-col p-5 py-10 px-5 md:px-20  pb-[100px]" >
        <Typography color={'white'} fontFamily="Questrial" className="text-[30px]  font-[400]">
            PRICING
        </Typography>
        <Typography color={colors.red[600]} fontFamily="Questrial" className="text-[15px]  font-[400]">
            Go with the right one
        </Typography>
        <Grid container spacing={5} className="py-5">
            <Card {...{ list: list1, title: "BASIC PLAN", price: "250" }} />
            <Card {...{ list: list2, title: "IINTERMEDIATE PLAN", price: "500", middle: true }} />
            <Card {...{ list: list3, title: "ADVANCED PLAN", price: "750" }} />


        </Grid>;
    </Box>
};
const list1 = [
    "Access to beginner exercises",
    "100 messages on chatbot",
    "Unlimited Tanning",
    "unlimited Hydromassage",
]
const list2 = [
    "Access to all exercises", ,
    "1000 messages on chatbot",
    "Unlimited Tanning",
    "unlimited Hydromassage",
]
const list3 = [
    "Access to all exercises", ,
    "Unlimited messages on chatbot",
    "Unlimited Tanning",
    "unlimited Hydromassage",
]
export default Pricing;
