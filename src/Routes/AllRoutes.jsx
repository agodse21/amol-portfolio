import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "../components/About/About";
import { Contact } from "../components/Contact/Contact";
import { Home } from "../components/Home/Home";
import { Skills } from "../components/Skills/Skills";
import { Work } from "../components/Work/Work";

function AllRoutes({props}){
    const {scrollsection,about,work,conatct,home,skills}=props;


    return(
        <Box>
            <Routes>
                <Route path="/amol-portfolio" element={<Home props={{scrollsection,about,work,conatct,home,skills}} />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
             

            </Routes>
        </Box>
    )
};

export default AllRoutes;