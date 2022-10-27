import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function

  ExperienceCard({ }: Props) {
  return (
    <article>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        className="w-32 h-32 rounded-full object-cover object-center xl:w-[200px] xl:h-[200px]"
        src=""
        alt=""
      />

      <div>
        <h4>OFFICE MANAGER at MARINAJ BANQUETS AND EVENTS</h4>
        <p></p>
        <div>

        </div>
        <p>Started work... -Ended...</p>
      </div>
    </article>
  );
}
