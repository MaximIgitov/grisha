import fs from "fs";
import path from "path";
import matter from "gray-matter";

const personalCasesDirectory = path.join(process.cwd(), "cases/personal-cases");
const workCasesDirectory = path.join(process.cwd(), "cases/work-cases");

export type CaseType = "personal" | "work";

export interface CaseData {
    slug: string;
    title: string;
    description: string;
    image?: string;
    date?: string;
    tags?: string[];
    content: string;
    type: CaseType;
}

export function getSortedCasesData(type: CaseType): CaseData[] {
    const directory =
        type === "personal" ? personalCasesDirectory : workCasesDirectory;

    if (!fs.existsSync(directory)) {
        return [];
    }

    const fileNames = fs.readdirSync(directory);
    const allCasesData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(directory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);

        return {
            slug,
            ...matterResult.data,
            content: matterResult.content,
            type,
        } as CaseData;
    });

    // Sort by date or custom order if needed
    return allCasesData;
}

export function getAllCases(): CaseData[] {
    const personal = getSortedCasesData("personal");
    const work = getSortedCasesData("work");
    return [...personal, ...work];
}

export function getCaseData(slug: string, type: CaseType): CaseData | null {
    const directory =
        type === "personal" ? personalCasesDirectory : workCasesDirectory;
    const fullPath = path.join(directory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return null;
    }

    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
        slug,
        ...matterResult.data,
        content: matterResult.content,
        type,
    } as CaseData;
}
