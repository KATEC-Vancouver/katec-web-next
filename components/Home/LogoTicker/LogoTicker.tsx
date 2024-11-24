'use client';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Fragment } from 'react';

const logos = [
  { name: 'logo1', src: '/images/logo1.png' },
  { name: 'logo2', src: '/images/logo2.png' },
  { name: 'logo3', src: '/images/logo3.png' },
  { name: 'logo4', src: '/images/logo4.png' },
  { name: 'logo5', src: '/images/logo5.png' },
];

export default function LogoTicker() {
  return (
    <section className="py-6 overflow-x-clip bg-[#f7f6fb]">
      <div className="max-w-[90%] xl:max-w-[80%] 2xl:max-w-[70%] mx-auto">
        {/* Title */}
        <h3 className="text-center text-gray-400 text-xl">
          Together with our sponsors, shaping a better tech community
        </h3>

        {/* Logo Ticker */}
        <div
          className="flex overflow-hidden mt-10"
          style={{
            maskImage: "linear-gradient(to right, transparent, black, transparent)",
          }}
        >
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {logos.map((logo) => (
                  <Image
                    src={logo.src}
                    key={logo.name}
                    alt={logo.name}
                    width={100} 
                    height={50} 
                  />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
