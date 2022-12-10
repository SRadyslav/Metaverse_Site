'use client';

import { motion } from "framer-motion";
import styles from '../styles'
import { fadeIn, staggerContainer } from '../utils/motion'
import { TypingText, TitleText, ImgForWorld, WorldCard } from '../components'
import { exploreWorlds } from '../constants'

const World = () => (
  <section
    className={`${styles.paddings} relative z-10`}
  >
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: 'false', amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the World" textStyles="text-center" />
      <TitleText title={(<>
        Track friends around you and invite them to play together in the same World
      </>)} textStyles="text-center" />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full"
      >
        <img
          src="map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
        <ImgForWorld img="people-01.png" position="bottom-20 right-20" />
        <ImgForWorld img="people-02.png" position="top-10 left-20" />
        <ImgForWorld img="people-03.png" position="top-1/2 left-[45%]" />
        <WorldCard img={exploreWorlds[1].imgUrl} position="bottom-20 left-1/5" title={exploreWorlds[1].title} />
        <WorldCard img={exploreWorlds[0].imgUrl} position="top-18 right-[20%]" title={exploreWorlds[0].title} />
      </motion.div>
    </motion.div>
  </section>
);

export default World;
