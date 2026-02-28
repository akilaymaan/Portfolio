import React from "react";

export default function AboutAndContact() {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-24">
            <div className="max-w-3xl mx-auto text-center md:text-left flex flex-col md:flex-row gap-8 md:gap-12 items-center md:items-start">
                <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight">About Me</h2>
                    <p className="text-base sm:text-lg text-neutral-400 leading-relaxed mb-8 md:mb-8 font-light">
                        I am a full-stack developer with a passion for creating beautiful, intuitive, and performant web experiences. I specialize in the React ecosystem, specifically Next.js, and enjoy solving complex problems with elegant code. When I&apos;m not coding, you can find me exploring new technologies or sharing my knowledge with the community.
                    </p>
                </div>
                <div className="flex-1 w-full md:mt-2">
                    <div className="bg-neutral-900 p-6 sm:p-8 rounded-2xl border border-neutral-800">
                        <h3 className="text-2xl font-semibold mb-4">Let&apos;s Connect</h3>
                        <p className="text-neutral-400 mb-8">
                            Interested in working together or just want to say hi? I&apos;m currently open to new opportunities.
                        </p>
                        <a
                            href="mailto:akilaymaan@gmail.com"
                            className="flex w-full items-center justify-center px-6 py-4 text-base font-medium rounded-xl bg-white text-black transition-transform hover:scale-[1.02] hover:bg-neutral-200"
                        >
                            Send an Email
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
