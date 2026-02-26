import React from "react";

export default function Hero() {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center gap-4 md:gap-6 px-4 sm:px-8 md:px-12 lg:px-24">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                Hi, I&apos;m <span className="text-neutral-400">Akil Ayman</span>.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-400 max-w-2xl font-light leading-relaxed">
                A passionate developer building modern, responsive, and aesthetic web applications.
            </p>
            <div className="mt-4">
                <a
                    href="https://x.com/akilaymaan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm md:text-base font-medium rounded-full bg-white text-black transition-transform hover:scale-105 hover:bg-neutral-200"
                >
                    Follow me on X
                </a>
            </div>
        </section>
    );
}
