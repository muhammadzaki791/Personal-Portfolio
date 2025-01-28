"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
          <Image
          src={"/logo.png"}
          width={80}
          height={80}
          alt="Personal"
          className="rounded-full p-4"
          />
            <span className="font-bold text-xl">Personal</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="hover:text-primary transition-colors">
              About Me
            </Link>
            <Link href="#skills" className="hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors">
              Project
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact Me
            </Link>
          </div>
          <Link href="https://static-resume-ashen.vercel.app/" target="_blank">
          <Button variant="default" className="flex items-center space-x-2">
            <span>Resume</span>
            <ExternalLink className="h-4 w-4" />
          </Button>
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}

