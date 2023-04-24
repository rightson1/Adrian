import Box from "@mui/material/Box";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Testimanials from "../components/Testimanials";
import Pricing from "../components/Pricing";
import Motivation from "../components/Motivation";
import Contact from "../components/Contact";

const Index = () => {
  const { colors } = useGlobalProvider();
  return (
    <Box >
      <Hero />
      <Process />
      <Testimanials />
      <Pricing />
      <Motivation />
      <Contact />
    </Box>
  )

};
Index.homepage = true;

export default Index;
