"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <h2 className="text-3xl md:text-4xl mb-12 text-center">
        My <span className="text-white font-bold">Projects</span>
      </h2>
      <div className="container mx-auto px-4">
        <div className="space-y-20">
          {/* Project 1 */}
          <motion.div
            key={1}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative">
              <Image
                src="/e-com-pic.png"
                alt="Bandge-Ecommerce (Apparels) Website Template"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-4">
              <div className="text-white font-extrabold text-3xl">01</div>
              <h3 className="text-2xl font-bold">
                Bandge-Ecommerce (Apparels) Website Template
              </h3>
              <p className="text-gray-400">
                A modern e-commerce platform built with Next.js, Tailwind CSS,
                and TypeScript, featuring Sanity CMS for content, Clerk for
                authentication, and Stripe for payments. It offers a responsive
                design and seamless shopping experience.
              </p>
              <Link
                href="https://e-commerce-store-gilt-tau.vercel.app/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  className="text-white border-white mt-4 hover:text-black"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            key={2}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative">
              <Image
                src="/resume-pic.png"
                alt="Resume Builder Application"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-4">
              <div className="text-white font-extrabold text-3xl">02</div>
              <h3 className="text-2xl font-bold">Resume Builder Application</h3>
              <p className="text-gray-400">
                An interactive resume builder created using HTML, CSS, and
                TypeScript. It features downloadable, shareable, and editable
                resumes, allowing users to create professional resumes
                effortlessly.
              </p>
              <Link
                href="https://resume-builder-one-gilt.vercel.app/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  className="text-white border-white mt-4 hover:text-black"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            key={3}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative">
              <Image
                src="/blog-pic.png"
                alt="Blog Website"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-4">
              <div className="text-white font-extrabold text-3xl">03</div>
              <h3 className="text-2xl font-bold">Blog Website</h3>
              <p className="text-gray-400">
                HealthFit Blog — a responsive health and fitness platform! 🏋️‍♀️💪
                Built with Next.js, Tailwind CSS, and TypeScript for speed,
                responsiveness, and functionality. Enjoy dynamic, markdown-based
                posts powered by Remark & Rehype, with a stunning
                Shadcn-designed UI. Explore health tips, fitness guides, and
                wellness content crafted to inspire!
              </p>
              <Link href="https://healthfit-blog.vercel.app/" target="_blank">
                <Button
                  variant="ghost"
                  className="text-white border-white mt-4 hover:text-black"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
