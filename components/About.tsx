import React from 'react';
import { motion } from "framer-motion";


type Props = {}

export default function About({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >

      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>


      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://media-exp1.licdn.com/dms/image/C4E03AQHo1oRSaCAhpg/profile-displayphoto-shrink_800_800/0/1663785490750?e=1672272000&v=beta&t=WIWLyJd4--tRu_wug4jqr13JcS1TZTLVeInblaAN20g"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className='space-y-10 px-10 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]'>little</span> background
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptates voluptas dolores ea consequuntur soluta temporibus repellendus officiis quas excepturi! Facere soluta accusamus vitae ipsum deserunt totam! Quae, distinctio reprehenderit?
        </p>
      </div>
    </motion.div>
  );
}
