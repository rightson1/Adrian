import Box from "@mui/material/Box";
import React from "react";
import { useGlobalProvider } from "../utils/themeContext";
import Hero from "../components/Hero";
import Process from "../components/Process";
import Testimanials from "../components/Testimanials";

const Index = () => {
  const { colors } = useGlobalProvider();
  return (
    <Box>
      <Hero />
      <Process />
      <Testimanials />
    </Box>
  )

};
Index.homepage = true;

export default Index;
