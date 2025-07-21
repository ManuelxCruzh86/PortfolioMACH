"use client";

import { motion } from "framer-motion";
import { dataAboutPage, dataEducation } from "@/data";

const Experience = () => {
  return (
    <section className="">
      {/* TÍTULO EXPERIENCIA */}
      <motion.h2
        className="text-3xl font-bold text-center text-purple-400 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My professional experience
      </motion.h2>

      {/* TIMELINE EXPERIENCIA */}
      <div className="flex flex-col justify-center divide-y divide-slate-200">
        <div className="w-full max-w-4xl mx-auto">
          <div className="-my-6">
            {dataAboutPage.map((data, index) => (
              <motion.div
                key={data.id}
                className="relative py-6 pl-8 sm:pl-32 group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-1 text-2xl font-bold sm:mb-0 text-white">{data.title}</h3>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-purple-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 bg-purple-100 text-purple-700 rounded-full">
                    {data.date}
                  </time>
                  <div className="text-lg font-semibold text-purple-300">{data.subtitle}</div>
                </div>
                <p className="text-slate-400 max-w-2xl">{data.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* TÍTULO EDUCACIÓN */}
      <motion.h2
        className="text-3xl font-bold text-center text-purple-400 mt-20 mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Education
      </motion.h2>

      {/* TIMELINE EDUCACIÓN */}
      <div className="flex flex-col justify-center divide-y divide-slate-200">
        <div className="w-full max-w-4xl mx-auto">
          <div className="-my-6">
            {dataEducation.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative py-6 pl-8 sm:pl-32 group"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-1 text-2xl font-bold sm:mb-0 text-white">{edu.title}</h3>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-3 after:h-3 after:bg-purple-500 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 bg-purple-100 text-purple-700 rounded-full">
                    {edu.date}
                  </time>
                  <div className="text-lg font-semibold text-purple-300">{edu.subtitle}</div>
                </div>
                <p className="text-slate-400 max-w-2xl">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
