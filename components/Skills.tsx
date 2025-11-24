"use client";

import { useState } from "react";
import { Tag } from "./ui/Tag";
import { motion, AnimatePresence } from "framer-motion";

const developedTags = [
    "CRM/ERP системы",
    "Мобильные приложения",
    "Презентации",
    "Веб интерфейсы",
    "Лендинги и крупные сайты",
];

const skillsTags = [
    "Компоненты, варианты и лейауты",
    "Адаптивность интерфейсов",
    "Сдавать макет",
    "Прототипы в фигма",
    "Документация",
    "Дизайнить с точки зрения бизнеса",
];

const additionalSkills = [
    "Создание, развитие и работа с дизайн системами",
    "Смотреть на продукт с точки зрения потребителя",
    "Анализировать данные и генерить гипотезы",
    "Видеть продукт целиком",
    "Оптимизация CJM, User Flow, JTBD",
    "Делать с нуля и улучшать существующий продукт",
    "Работать со сложными интерфейсами",
    "Взаимодействовать с разрабами",
    "Понимаю цикл и возможности разработки",
];

export default function Skills() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-8 md:py-12 px-4 md:px-8">
            <div className="max-w-[740px] mx-auto">
                <div className="mb-12">
                    <h2 className="text-2xl md:text-[40px] font-bold mb-6 text-heading">
                        Разрабатывал
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {developedTags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl md:text-[40px] font-bold mb-6 text-heading">
                        Я умею
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {skillsTags.map((tag) => (
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                        {!isExpanded && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="inline-flex items-center px-4 py-4 rounded-tag bg-gray-50 text-base md:text-2xl text-base-text/60 transition-colors hover:bg-gray-100"
                            >
                                +9
                            </button>
                        )}
                    </div>
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden mt-3"
                            >
                                <div className="flex flex-wrap gap-3">
                                    {additionalSkills.map((skill) => (
                                        <Tag key={skill}>{skill}</Tag>
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
