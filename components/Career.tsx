"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const careerData = [
    {
        company: "Фриланс",
        role: "Графический дизайнер",
        period: "2020-2022",
    },
    {
        company: "goji.studio",
        role: "Продуктовый дизайнер",
        period: "2022-2024",
    },
    {
        company: "PENA",
        role: "Веб-дизайнер",
        period: "2023-н.в.",
    },
];

const pathContent = `Начинал как фрилансер граф.диз, через год стажировался в студии которая занималась созданием контента, параллельно изучал веб, попал в стартап, где 2 года занимался b2b веб-интерфейсами и внутренними продуктами, был как подчиненным так и руководителем небольшой команды, помогал выстраивать процессы лидам, предложили работу веб-дизайнером в пене, где сейчас и работаю, но также продолжаю помогать в стартапах в нерабочее время.

Я люблю свою профессию, постоянно улучшаю навыки, ux/ui интенсивы и челленджи, курсы, дизайн домашки, слежу за трендами и некоторыми студиями (mish, beta, sloy и др.) пробую новые визуальные и ux решения, качаю продуктовую экспертизу в стартапах`;

export default function Career() {
    const [isPathOpen, setIsPathOpen] = useState(false);

    return (
        <section className="py-8 md:py-12 px-4 md:px-8">
            <div className="max-w-[740px] mx-auto">
                <h2 className="text-2xl md:text-[40px] font-bold mb-8 text-heading">
                    Карьера
                </h2>

                <div className="space-y-6 mb-8">
                    {careerData.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-start pb-4 last:pb-0"
                        >
                            <div>
                                <h3 className="text-lg md:text-2xl font-bold text-heading mb-1">
                                    {item.company}
                                </h3>
                                <p className="text-lg md:text-2xl text-base-text/60">
                                    {item.role}
                                </p>
                            </div>
                            <span className="font-mono text-lg md:text-2xl font-bold text-heading">
                                {item.period}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-50 rounded-2xl px-6 py-4">
                    <button
                        onClick={() => setIsPathOpen(!isPathOpen)}
                        className="w-full flex items-center justify-between group"
                    >
                        <span className="text-lg md:text-2xl font-medium text-heading">
                            Путь в дизайне
                        </span>
                        <ChevronDown
                            className={cn(
                                "w-6 h-6 text-heading transition-transform duration-300",
                                isPathOpen ? "rotate-180" : ""
                            )}
                        />
                    </button>

                    <AnimatePresence>
                        {isPathOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-6 pb-2 text-lg md:text-2xl text-heading whitespace-pre-line leading-relaxed">
                                    {pathContent
                                        .split("\n\n")
                                        .map((paragraph, index, array) => (
                                            <span key={index}>
                                                {paragraph}
                                                {index < array.length - 1 && (
                                                    <>
                                                        <br />
                                                        <br />
                                                        <span className="text-heading/30">
                                                            - - - - - - - - - -
                                                            - - - - - -
                                                        </span>
                                                        <br />
                                                        <br />
                                                    </>
                                                )}
                                            </span>
                                        ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
