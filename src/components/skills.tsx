"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    name: "Next.js",
    icon: "/icon-nextjs.png",
  },
  {
    name: "React.js",
    icon: "/icon-react.png",
  },
  {
    name: "Tailwind CSS",
    icon: "/icon-tailwind.png",
  },
  {
    name: "TypeScript",
    icon: "/TypeScript.png",
  },
  {
      name: "JavaScript",
      icon: "/icon-javascript.png",
    },
    {
        name: "Python",
        icon: "/Python.png",
    },
    {
        name: "Vs-Code",
    icon: "/vs-code.png",
  },
  {
    name: "Figma",
    icon: "/Figma.png",
  },
  {
      name: "Sass/Scss",
      icon: "/icon-sass.png",
  },
  {
      name: "Git",
      icon: "/icon-git.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-primary">Skills</span>
        </h2>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
            >
              <div className="aspect-square relative">
                <Image
                  src={skill.icon || "/placeholder.svg"}
                  alt={skill.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <p className="text-center mt-4 font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
