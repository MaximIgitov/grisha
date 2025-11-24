"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm"
        >
            <div className="max-w-[740px] px-4 md:px-0 mx-auto py-4 md:py-6 flex items-center justify-between">
                <Link
                    href="/"
                    className="text-3xl md:text-[45px] font-heading font-bold text-heading uppercase tracking-tight"
                >
                    GR
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <a
                        href="#projects"
                        className="font-mono text-lg text-heading hover:text-active-icon transition-colors"
                    >
                        Проекты
                    </a>
                </div>

                <a
                    href="https://t.me/grechkunov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-tag bg-heading border-2 border-transparent flex items-center justify-center hover:bg-transparent hover:border-heading transition-all group"
                >
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-heading transition-colors" />
                </a>
            </div>
        </motion.nav>
    );
}
