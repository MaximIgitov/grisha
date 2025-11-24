import { MessageCircle, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-12 md:py-20 px-4 md:px-8">
            <div className="max-w-[740px] mx-auto">
                <a
                    href="https://t.me/grechkunov"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-8 py-5 bg-heading text-white rounded-tag border-2 border-transparent font-oswald text-base md:text-lg hover:bg-transparent hover:border-heading hover:text-heading transition-all mb-12"
                >
                    Написать в мессенджер
                </a>

                <div className="flex flex-col items-center gap-5">
                    <div className="flex gap-8 md:gap-12">
                        <a
                            href="https://t.me/grechkunov"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 group"
                        >
                            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-[#2CAEFF] shrink-0" />
                            <span className="font-oswald text-sm md:text-base text-heading group-hover:text-[#2CAEFF] transition-colors">
                                @grechkunov
                            </span>
                        </a>

                        <a
                            href="tel:+79652997889"
                            className="flex items-center gap-3 group"
                        >
                            <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#2CAEFF] shrink-0" />
                            <span className="font-oswald text-sm md:text-base text-heading group-hover:text-[#2CAEFF] transition-colors">
                                +7 (965) 299-78-89
                            </span>
                        </a>
                    </div>

                    <a
                        href="mailto:g.rechkunov@yandex.ru"
                        className="flex items-center gap-3 group"
                    >
                        <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#2CAEFF] shrink-0" />
                        <span className="font-oswald text-sm md:text-base text-heading group-hover:text-[#2CAEFF] transition-colors">
                            g.rechkunov@yandex.ru
                        </span>
                    </a>
                </div>
            </div>
        </footer>
    );
}
