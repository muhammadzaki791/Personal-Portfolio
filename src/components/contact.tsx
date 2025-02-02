"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Github,Linkedin, Instagram } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_portfolioForm",
        "template_j5c1axc",
        e.currentTarget,
        "HGHNLmFBGSLc8eY7W"
      );
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
      console.log(error)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 border border-gray-600 rounded-sm p-4"
            >
              <Input
                type="text"
                name="name"
                placeholder="Your name"
                className="border-2 border-gray-600 rounded-sm"
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="border-2 border-gray-600 rounded-sm"
                required
              />
              <Input
                type="url"
                name="website"
                placeholder="Your website (if exists)"
                className="border-2 border-gray-600 rounded-sm"
              />
              <Textarea
                name="message"
                placeholder="How can I help?"
                className="min-h-[150px] border-2 border-gray-600 rounded-sm"
                required
              />
              <div className="grid gap-4 md:grid-cols-2">
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Get In Touch"}
                </Button>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.facebook.com/profile.php?id=61567843524203"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/muhammadzaki791"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/muhammad_zaki791/"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/muhammad-zaki-444244302/"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 border rounded-md hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </motion.a>
                </div>
              </div>
              {submitStatus === "success" && (
                <p className="text-green-600">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-600">
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let&apos;s <span className="text-primary">talk</span> for
              <br />
              Something special
            </h2>
            <p className="text-muted-foreground mb-8">
              I seek to push the limits of creativity to create high-engaging,
              user- friendly, and memorable interactive experiences.
            </p>
            <div className="space-y-4">
              <p className="text-xl">muhammadzaki.ayaz@gmail.com</p>
              <p className="text-xl">0312-2587835</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
