import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import { PDFDownloadLink } from '@react-pdf/renderer';
import InvoicePdf from './Invoice';
import Modal from '@mui/material/Modal';
import { PDFViewer } from '@react-pdf/renderer';
import Form from "./Form";
import { useAuth } from "../utils/authContext";

const Pricing = () => {
    const { colors } = useGlobalProvider();
    const [open, setOpen] = React.useState(false);
    const { user, signInWithGoogle } = useAuth();
    const now = new Date();
    const [plan, setPlan] = React.useState(false);
    const [values, setValues] = React.useState({
        date: `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`,
        subscriptionName: "",
        memberName: "",
        memberEmail: "",
        amount: "",
        name: "",
        receiptNumber: Math.floor(Math.random() * 1000000)
    });
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
    };


    const Card = ({ list, title, price, middle, name }) => {
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
                {
                    user ? <Button onClick={() => {
                        setPlan(title);
                        setValues({ ...values, subscriptionName: title, amount: price, name });
                    }} className="w-[200px] self-center text-white mb-20 mt-10"
                        sx={{
                            bgcolor: (middle ? colors.red[700] : colors.black[900]) + "!important",
                        }}>
                        Subscribe Now
                    </Button> :
                        <Button onClick={signInWithGoogle} className="w-[200px] self-center text-white mb-20 mt-10"
                            sx={{
                                bgcolor: (middle ? colors.red[700] : colors.black[900]) + "!important",
                            }}>
                            Subscribe Now
                        </Button>

                }
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
            <Card {...{ list: list1, title: "BASIC PLAN", price: "250", name: "beginner" }} />
            <Card {...{ list: list2, title: "INTERMEDIATE PLAN", price: "500", middle: true, name: "intermediate" }} />
            <Card {...{ list: list3, title: "ADVANCED PLAN", price: "750", name: "advanced" }} />


        </Grid>;
        <Modal
            open={open}
            onClose={() => setOpen(false)}
        >
            <Box sx={style} className="p-10 flex flex-col items-end">
                <PDFViewer width="500px" height="500px">
                    <InvoicePdf receiptData={values} />
                </PDFViewer>
                <Button onClick={() => setOpen(false)} className="w-[200px] s text-white my-5"
                    sx={{
                        bgcolor: colors.red[700] + "!important",
                    }}>
                    Close
                </Button>
            </Box>

        </Modal>
        <Form {...{ plan, setPlan, setValues, setOpen, values }} />
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
