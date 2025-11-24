import { cn } from "@/lib/utils";

interface TagProps {
    children: React.ReactNode;
    className?: string;
}

export function Tag({ children, className }: TagProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center px-4 py-1.5 rounded-tag border border-border-inactive text-base md:text-2xl text-heading font-medium transition-colors hover:bg-gray-50",
                className
            )}
        >
            {children}
        </span>
    );
}
