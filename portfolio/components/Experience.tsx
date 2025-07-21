"use client";

import { motion } from "framer-motion";
import { dataAboutPage } from "@/data";

const Experience = () => {
  return (
    <section className="mt-20 px-6 py-10">
      <motion.h2
        className="text-3xl font-bold text-center text-purple-400 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Professional Experience
      </motion.h2>

      <div className="w-full max-w-4xl mx-auto">
        <div className="relative pl-12 ml-2 z-0"> 
          {dataAboutPage.map((data, index) => (
            <motion.div
              key={data.id}
              className="mb-12 relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Punto del timeline */}
              <div className="absolute -left-[22px] top-1 w-3 h-3 bg-purple-500 border-2 border-white rounded-full z-10" />

              {/* Título y subtítulo en línea */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                <h3 className="text-xl font-bold text-white">{data.title}</h3>
                <p className="text-lg font-medium text-purple-300 sm:ml-4">{data.subtitle}</p>
              </div>

              {/* Fecha debajo */}
              <time className="text-xs text-purple-400 block mb-2">{data.date}</time>

              <p className="text-slate-300">{data.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;