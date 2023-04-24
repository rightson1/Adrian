import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";

const Pcon = ({ title, paragraph2 }) => {
    const { colors } = useGlobalProvider()
    return <div className=" bg-white flex justify-center items-center  py-10 ">
        <div className="w-full h-full shadow-lg  flex flex-col justify-center items-center p-5 gap-4">
            <Typography variant="h2" color={colors.grey[500]} className="font-[700] opacity-70 text-center" fontFamily="Questrial"
            >Week  {title}
            </Typography>
            <div className="flex gap-2 my-5">
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.teal[500]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>
            </div>
            <Typography fontFamily="Questrial" className="text-[17px]" textAlign="center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus alias quas quos. Quam iste delectus natus ipsum, omnis quidem reprehenderit nostrum inventore dignissimos sequi ad quis soluta magnam itaque.
            </Typography>

        </div>
    </div>

};

export default Pcon;
