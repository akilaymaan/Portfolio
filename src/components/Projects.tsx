import React from "react";

const projects = [
    {
        title: "HemoLink – Blood Donor Discovery",
        description: "A centralized web application designed to quickly connect blood donors with patients in urgent need. The platform features location-based matching, Emergency SOS requests, and integrates custom Machine Learning to calculate donor eligibility scores. It provides Explainable AI (XAI) reasoning and uses NLP to extract health flags from user input.",
        highlights: [
            "Location-based matching with spatial data (Haversine, Leaflet, OpenStreetMap).",
            "ML-powered eligibility scoring (Scikit-Learn/RandomForest) & NLP health analysis (NLTK/Gemini API).",
            "Voice-based form filling (Web Speech API) & client-side OCR (Tesseract.js).",
            "Test-driven reliability (Jest, Vitest, Pytest) with ML-service fallback."
        ],
        tags: ["React", "Node.js", "Python", "Machine Learning"],
        link: "https://github.com/akilaymaan/HemoLink",
        featured: true,
        image: "/hemolink.png",
    },
    {
        title: "DevTrack – Job Aggregator Dashboard",
        description: "A premium, open-source job aggregation dashboard designed to help software engineers navigate the remote tech job market. It provides a massively unified, randomized feed of active developer positions featuring instant search and secure bookmarking.",
        highlights: [
            "Live Multi-Source Aggregation from Remotive, Jobicy, and Arbeitnow APIs.",
            "Instant Search & Filtering via powerful client-side indexing.",
            "Secure Authentication & Bookmarking using GitHub OAuth (NextAuth) and MongoDB.",
            "Data Insights pages (/companies, /salaries) extracting aggregate metrics."
        ],
        tags: ["Next.js 16", "React 19", "Tailwind CSS", "MongoDB", "NextAuth"],
        link: "https://github.com/akilaymaan/DevTrack",
        featured: true,
    },
];

export default function Projects() {
    return (
        <section className="py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-24 bg-neutral-900/30">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 md:mb-12 tracking-tight">Selected Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 transition-all hover:border-neutral-600 hover:-translate-y-1 ${project.featured ? "md:col-span-2 lg:col-span-3 lg:flex-row" : ""}`}
                        >
                            {/* Image Section */}
                            {(project.image || !project.featured) && (
                                <div className={`${project.featured ? "lg:w-1/2" : "w-full"} relative flex items-center justify-center overflow-hidden bg-neutral-800 ${project.featured ? "aspect-video lg:aspect-auto" : "aspect-video"}`}>
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                                    ) : (
                                        <span className="text-neutral-600 font-medium">Image Placeholder</span>
                                    )}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-neutral-900 ${project.featured ? "lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-900" : ""} via-transparent to-transparent opacity-90 lg:opacity-100`}></div>
                                </div>
                            )}

                            {/* Content Section */}
                            <div className={`p-6 md:p-8 flex flex-col flex-grow ${project.featured ? "lg:w-1/2 lg:justify-center" : ""}`}>
                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="text-neutral-300 mb-6 text-lg font-light leading-relaxed">{project.description}</p>

                                {project.highlights && (
                                    <div className="mb-8">
                                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-3">Key Highlights</h4>
                                        <ul className="list-disc list-inside space-y-2 text-neutral-400 font-light">
                                            {project.highlights.map((highlight, hIndex) => (
                                                <li key={hIndex}>{highlight}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {project.tags?.map((tag, tIndex) => (
                                        <span key={tIndex} className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs font-medium rounded-full border border-neutral-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex w-fit items-center justify-center px-6 py-3 text-sm font-medium rounded-lg bg-white text-black transition-transform hover:scale-105 hover:bg-neutral-200"
                                >
                                    View Source
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
