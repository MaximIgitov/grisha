"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CaseData } from "@/lib/cases";

interface ProjectCardProps {
    project: CaseData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Link
            href={`/case/${project.slug}?type=${project.type}`}
            className="block group"
        >
            <div className="relative overflow-hidden rounded-card bg-gray-200 w-full h-[400px] mb-4">
                {project.image ? (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full"
                    >
                        <Image
                            src={project.image}
                            fill
                            className="object-cover"
                            alt={project.title}
                        />
                    </motion.div>
                ) : (
                    <div className="w-full h-full bg-gray-600 flex items-center justify-center">
                        {/* Placeholder for design consistency if image missing */}
                    </div>
                )}
            </div>

            <div>
                <h3 className="text-lg md:text-2xl font-bold text-heading mb-1 group-hover:text-active-icon transition-colors">
                    {project.title}
                </h3>
                <p className="text-lg md:text-2xl text-base-text/60 font-medium">
                    {project.description}
                </p>
            </div>
        </Link>
    );
}
