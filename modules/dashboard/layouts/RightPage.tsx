"use client";
import React from "react";
import LineBreak from "../../../components/LineBreak";
import Resume from "@/modules/dashboard/components/Resume";
import Feature from "@/modules/dashboard/components/Feature";

import { motion } from "framer-motion";
import SocialMedia from "@/modules/dashboard/components/SocialMedia";
import Spotify from "@/modules/dashboard/components/Spotify";

function RightPage() {
  return (
    <motion.footer
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
      className=" lg:block w-full lg:w-fit "
    >
      <section className="w-full md:w-60 rounded-2xl h-fit md:sticky top-5">
        <div className="bg-[#1c1c1c] min-w-min rounded-2xl p-4 border border-neutral-800 ">
          <Resume />
          <LineBreak />
          <Feature />
          <LineBreak />
          <SocialMedia />
        </div>

        <div className="bg-[#1c1c1c] min-w-min rounded-2xl p-4 border border-neutral-800 mt-3">
          <Spotify />
        </div>
      </section>
    </motion.footer>
  );
}

export default RightPage;
