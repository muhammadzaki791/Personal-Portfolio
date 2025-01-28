"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    content:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    author: "Evren Shah",
    role: "Designer",
    avatar: "/Evren-Shah.png",
  },
  {
    id: 2,
    content:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    author: "Flora Sheen",
    role: "Designer",
    avatar: "/Flora-Sheen.png",
  },
  {
    id: 3,
    content:
      "I recently had to jump on 10+ different calls across eight different countries to find the right owner.",
    author: "Evren Shah",
    role: "Designer",
    avatar: "/Evren-Shah.png",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          My <span className="text-primary">Testimonial</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="p-6 rounded-lg shadow-lg text-center w-[280px] md:w-[320px] bg-white text-gray-900 transition-all duration-300 hover:bg-black hover:text-white hover:scale-105"
            >
              <div className="flex flex-col items-center">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  width={60}
                  height={60}
                  className="rounded-full mb-4"
                />
                <p className="text-sm md:text-base mb-4">{testimonial.content}</p>
                <div className="font-semibold text-lg">{testimonial.author}</div>
                <div className="text-gray-400 text-sm">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
