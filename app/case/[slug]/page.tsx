import { getCaseData, CaseType, getSortedCasesData } from "@/lib/cases";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import Image from "next/image";
import { notFound } from "next/navigation";
import Projects from "@/components/Projects";

interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ type?: string }>;
}

export default async function CasePage({ params, searchParams }: PageProps) {
    const { slug } = await params;
    const { type } = await searchParams;
    const personalCases = getSortedCasesData("personal");
    const workCases = getSortedCasesData("work");

    if (!type || (type !== "personal" && type !== "work")) {
        return notFound(); // Or try to find in both
    }

    const caseData = getCaseData(slug, type as CaseType);

    if (!caseData) {
        return notFound();
    }

    return (
        <main className="min-h-screen bg-white">
            <SmoothScroll />
            <Navbar />

            <article className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-8 max-w-[740px] mx-auto">
                <header className="mb-12 md:mb-20">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {caseData.tags?.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-lg bg-gray-100 text-sm text-gray-600"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-2xl md:text-[40px] font-bold mb-4">
                        {caseData.title}
                    </h1>

                    <p className="text-lg md:text-2xl text-gray-500 mb-8">
                        {caseData.description}
                    </p>

                    {caseData.image && (
                        <div className="relative w-full h-[400px] rounded-card overflow-hidden bg-gray-100 mb-8">
                            <Image
                                src={caseData.image}
                                alt={caseData.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                </header>

                <div className="prose prose-lg max-w-none">
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm, remarkBreaks]}
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            h1: ({ ...props }) => (
                                <h2
                                    className="text-2xl md:text-[40px] font-bold mt-12 mb-6 font-heading"
                                    {...props}
                                />
                            ),
                            h2: ({ ...props }) => (
                                <h3
                                    className="text-2xl md:text-[40px] font-bold mt-10 mb-4 font-heading"
                                    {...props}
                                />
                            ),
                            p: ({ children, ...props }) => {
                                // Check if paragraph contains only an image
                                // ReactMarkdown wraps images in paragraphs, so we need to unwrap them
                                const isImageOnly = () => {
                                    if (!children) return false;
                                    const childArray = Array.isArray(children)
                                        ? children
                                        : [children];
                                    if (childArray.length !== 1) return false;
                                    const child = childArray[0];
                                    if (
                                        typeof child === "object" &&
                                        child !== null &&
                                        "props" in child &&
                                        child.props &&
                                        typeof child.props === "object" &&
                                        "src" in child.props
                                    ) {
                                        return true;
                                    }
                                    return false;
                                };

                                if (isImageOnly()) {
                                    return <>{children}</>;
                                }

                                return (
                                    <p
                                        className="text-lg md:text-2xl text-base-text mb-6 leading-relaxed"
                                        {...props}
                                    >
                                        {children}
                                    </p>
                                );
                            },
                            ul: ({ ...props }) => (
                                <ul
                                    className="list-disc pl-6 mb-6 space-y-2 text-base-text"
                                    {...props}
                                />
                            ),
                            ol: ({ ...props }) => (
                                <ol
                                    className="list-decimal pl-6 mb-6 space-y-2 text-base-text"
                                    {...props}
                                />
                            ),
                            li: ({ ...props }) => (
                                <li
                                    className="text-lg md:text-2xl"
                                    {...props}
                                />
                            ),
                            strong: ({ ...props }) => (
                                <strong
                                    className="font-bold text-heading"
                                    {...props}
                                />
                            ),
                            img: ({ ...props }) => {
                                // Handle relative paths from markdown
                                let imageSrc =
                                    typeof props.src === "string"
                                        ? props.src
                                        : "";
                                if (
                                    imageSrc &&
                                    !imageSrc.startsWith("http") &&
                                    !imageSrc.startsWith("/")
                                ) {
                                    imageSrc = `/images/cases/${imageSrc}`;
                                } else if (
                                    imageSrc &&
                                    (imageSrc.startsWith("./") ||
                                        imageSrc.startsWith("../"))
                                ) {
                                    imageSrc = `/images/cases/${imageSrc.replace(/^\.\.?\//, "")}`;
                                }

                                return (
                                    <figure className="my-8 md:my-12 w-full h-[400px] rounded-card overflow-hidden bg-gray-100 relative">
                                        <Image
                                            src={imageSrc}
                                            alt={
                                                typeof props.alt === "string"
                                                    ? props.alt
                                                    : ""
                                            }
                                            fill
                                            className="object-cover"
                                        />
                                    </figure>
                                );
                            },
                        }}
                    >
                        {caseData.content}
                    </ReactMarkdown>
                </div>
            </article>

            <Footer />
            <Projects
                isOtherProjects
                personalCases={personalCases}
                workCases={workCases}
            />
        </main>
    );
}
