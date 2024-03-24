import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';



const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
        <>
            <button
                className="pointer w-8 h-8 rounded-full flex items-center justify-center focus:outline-none col-span-1"
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                aria-label="Toggle Dark Mode"
            >
                {theme === 'light' ? (
                    <MoonIcon className="bg-[#D4E8FD] border-[1px] border-[#b4c7db] text-[#1a2838] p-2 rounded-full" />
                ) : (
                    <SunIcon className="bg-[#242424] border-[1px] border-[#393939] text-[#fff] p-2 rounded-full" />
                )}
            </button>
        </>

    );
};

export default ThemeToggler;