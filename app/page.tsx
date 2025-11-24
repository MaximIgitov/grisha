import { getAllCases, getSortedCasesData } from "@/lib/cases";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Career from "@/components/Career";
import SoftSkills from "@/components/SoftSkills";
import Projects from "@/components/Projects";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
    const personalCases = getSortedCasesData("personal");
    const workCases = getSortedCasesData("work");

    return (
        <main className="min-h-screen bg-white relative">
            <SmoothScroll />
            <Navbar />

            <Hero />
            <Skills />
            <Career />
            <SoftSkills />
            <Projects personalCases={personalCases} workCases={workCases} />

            <Footer />
        </main>
    );
}
