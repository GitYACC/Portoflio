import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function vh2px(vh: number) {
    if (typeof window === "undefined") {
        return 0; // Return a default value for server-side rendering
    }
    const viewportHeight = window.innerHeight;
    return (vh / 100) * viewportHeight;
}
