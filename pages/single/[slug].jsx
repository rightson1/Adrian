import React from "react";
import { Box, Button, Grid, Skeleton, Typography } from "@mui/material";
import { useGlobalProvider } from "../../utils/themeContext"
import Link from "next/link";
import { useRouter } from "next/router";
import Slide from "../../components/Slide";
import Pcon from "../../components/Pcon";
import { useInstructions } from "../../utils/hooks/useApi";
import Instructions from "../../components/Instructions";
const Ex = () => {
    const { colors } = useGlobalProvider();
    const { slug: name } = useRouter().query;
    const { data } = useInstructions(name, "easy")
    const slug = name || ""

    const items =
    {
        title: slug?.toUpperCase(),
        url: `./${slug.charAt(0).toUpperCase() + slug.slice(1)}.gif`,
        img: `./${slug.charAt(0).toUpperCase() + slug.slice(1)}.png`,
        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam tincidunt, nunc elit aliquam mauris, eget aliquam nisl nisl sit amet lorem.",

    }

    return <Box className="">

        <Box className="w-screen py-20 gap-2 text-white flex justify-center items-center flex-col "

            sx={{
                display: 'inline-block',
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/pullUps.jpg")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <Typography variant="h2" color={'white'} className="font-[700] text-center" fontFamily="Questrial"
            >{slug.toUpperCase()}
            </Typography>
            <div className="flex gap-2 my-5">
                <Box bgcolor={colors.red[800]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.red[500]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.red[800]} className="w-20 h-1 "></Box>
            </div>
            <Button className="text-white py-2 px-5 hover:bg-transparent mt-6" sx={{
                bgcolor: colors.red[600] + "!important",
                border: "2px solid " + colors.red[600] + "!important",
                "&:hover": {
                    bgcolor: "transparent" + "!important",
                    color: colors.red[600] + "!important",
                }
            }}>
                START
            </Button>

        </Box>
        <div className="w-full h-full   flex flex-col justify-center items-center p-5 gap-4 ">
            <Typography variant="h2" color={colors.grey[500]} className="font-[700] opacity-70 text-center" fontFamily="Questrial"
            >Instructions
            </Typography>
            <div className="flex gap-2 my-5">
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.teal[500]} className="w-20 h-1 "></Box>
                <Box bgcolor={colors.grey[800]} className="w-20 h-1 "></Box>
            </div>

        </div>
        <Grid container>
            <Grid item xs={12} md={6} className="p-5">
                <Box component="img" className="w-full h-full "
                    src={items.url}
                />
            </Grid>
            <Grid item xs={12} md={6} className="p-5">
                {
                    data?.length > 0 ? <Instructions instructions={data} url={items.img} /> :
                        <Skeleton variant="rectangular" width="100%" height="100%" />

                }
            </Grid>
        </Grid>

    </Box>
};

export default Ex;
