"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/about-pic.png"
              alt="About Me Illustration"
              width={400}
              height={400}
              className="w-full h-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I&apos;m a passionate, self-proclaimed designer and developer who
                specializes in full-stack development (React.js & Next.js). I
                thrive on bringing the technical and visual aspects of digital
                products to life with a seamless user experience.
              </p>
              <p>
                I began my journey as a web developer during my high school
                years, and since then, I’ve continued to evolve, taking on
                exciting challenges and mastering the latest technologies. Now,
                as an 18-year-old enthusiast, I’m building cutting-edge web
                applications using modern tools like Next.js 15, TypeScript,
                Tailwind CSS, Sanity, and much more.
              </p>
              <p>
                My portfolio showcases projects such as a blog website, an
                e-commerce platform, and Figma templates, where I combined
                creativity with robust functionality. I also have hands-on
                experience with API integration and backend development using
                Sanity.
              </p>
              <p>
                Currently, I’m diving into advanced Python and learning to build
                AI agents, expanding my skillset into the world of artificial
                intelligence and automation.
              </p>
              <p>
                When I’m not coding, you can find me exploring new technologies,
                brainstorming startup ideas, or simply learning from the journey
                of other developers. Let’s connect!
              </p>
              <p>
                Follow me on <Link href="https://github.com/muhammadzaki791" className="hover:text-black">GitHub</Link> to explore my projects. Connect with me on <Link href="www.linkedin.com/in/muhammad-zaki-444244302" className="hover:text-black">LinkedIn</Link>, where I share the latest updates about my career and
                ongoing projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
