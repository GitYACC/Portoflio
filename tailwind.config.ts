import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            keyframes: {
                trail: {
                    "0%": { "--angle": "0deg" },
                    "100%": { "--angle": "360deg" },
                },
            },
            animation: {
                trail: "trail var(--duration) linear infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
