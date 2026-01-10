'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Button() {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    const handleChangeTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }

    return (
        <button
        onClick={handleChangeTheme}
        className="px-6 py-2 rounded-md bg-green-600 text-white font-semibold cursor-pointer mt-4 hover:bg-green-500 transition duration-300"
        >
            {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
        </button>
    );
}