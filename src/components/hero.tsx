"use client";

import { motion } from "framer-motion";
import { Facebook, Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl mb-4">
              Hello I&apos;am{" "}
              <span className="text-primary font-semibold">Muhammad Zaki.</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frontend{" "}
              <span className="bg-primary text-primary-foreground px-2">
                Developer
              </span>
            </h2>
            <h3 className="text-2xl md:text-3xl mb-6">
              Based In <span className="font-bold">Pakistan.</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg">
              Hi, I&apos;m Muhammad Zaki, a passionate full-stack web developer
              skilled in React.js, Next.js, Tailwind CSS, and more. I specialize
              in creating dynamic, user-friendly web applications. Currently,
              I&apos;m exploring advanced Python and learning to build AI agents
              to expand my expertise. Let&apos;s connect and create something
              extraordinary together!
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.linkedin.com/in/muhammad-zaki-444244302/"
                whileHover={{ scale: 1.1 }}
                className="p-2 border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://github.com/muhammadzaki791"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                className="p-2 border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/profile.php?id=61567843524203"
                whileHover={{ scale: 1.1 }}
                className="p-2 border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/muhammad_zaki791/"
                whileHover={{ scale: 1.1 }}
                className="p-2 border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Image
              src="/hero-pic.png"
              alt="Hero Illustration"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
