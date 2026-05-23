import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';

const GithubIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
);

const projects = [
    {
        title: "Auto Calendar Chrome Extension",
        description: "Chrome extension that parses selected webpage text and converts it into structured calendar events with ICS file export. Built at Norse Hacks Hackathon with cross-platform support for Google Calendar, Apple Calendar, and Outlook.",
        image: "/projects/project1.png",
        tags: ["JavaScript", "HTML/CSS", "Chrome APIs"],
        link: "https://devpost.com/software/auto-calendar",
        github: "https://github.com/payalmistryy/auto-calendar-extension",
    },
    {
        title: "Personal Portfolio Website",
        description: "Responsive single-page portfolio built from scratch with React and Tailwind CSS. Features a custom color theme system, glassmorphism effects, animated laser borders, a scrolling skills ticker, and continuous deployment through Netlify.",
        image: "/projects/project2.png",
        tags: ["React", "Tailwind CSS", "Vite", "Netlify"],
        link: "https://payalmistry.com",
        github: "https://github.com/payalmistryy/payal-mistry-website",
        imageClass: "scale-110 origin-top group-hover:scale-125",
    },
    {
        title: "Escape Room Manager",
        description: "Developed for CS 302 at Portland State University. Built a C++ escape room manager with player turn rotation, active challenge progression, and event scheduling. Implemented circular and linear linked lists using recursive algorithms.",
        image: "/projects/project3.png",
        tags: ["C++", "OOP", "Data Structures", "Recursion"],
        github: "https://github.com/payalmistryy/Escape-Room-Manager",
        imageClass: "scale-[1.6] origin-top-left group-hover:scale-[1.75]",
    },
    {
        title: "Hiking Club Manager",
        description: "Developed for CS 302 at Portland State University. Built a C++ hiking club system with operator overloading and a templated doubly linked list. Features a single inheritance hierarchy with exception handling.",
        image: "/projects/project4.png",
        tags: ["C++", "OOP", "Templates", "Operator Overloading"],
        github: "https://github.com/payalmistryy/The-Hiking-Club-Manager",
    },
    {
        title: "Driving Simulator",
        description: "Developed for CS 302 at Portland State University. Built a C++ driving simulator game using dynamic binding with an abstract base class, virtual methods, RTTI, and a binary search tree with recursive algorithms.",
        image: "/projects/project5.png",
        tags: ["C++", "Dynamic Binding", "BST", "RTTI"],
        github: "https://github.com/payalmistryy/Cruise-if-you-can---Driving-Simulator",
        imageClass: "scale-[1.6] origin-top-left group-hover:scale-[1.75]",
    },
];


export const Projects = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const revealElements = sectionRef.current?.querySelectorAll('.reveal');
        revealElements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="projects" className="py-20 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="reveal text-primary text-sm font-medium tracking-wider uppercase">
                        Featured Work
                    </span>
                    <h2 className="reveal reveal-delay-100 text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-primary">
                            {" "}
                            make an impact.
                        </span>
                    </h2>
                    <p className="reveal reveal-delay-200 text-muted-foreground">
                        A selection of my recent work, from complex web applications to
                        innovative tools that solve real-world problems.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="reveal group glass rounded-2xl overflow-hidden"
                            style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full object-cover transition-transform duration-700 ${project.imageClass || 'scale-105 group-hover:scale-110'}`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />

                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors"
                                        >
                                            <ArrowUpRight className="w-5 h-5" />
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-colors"
                                        >
                                            <GithubIcon className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="reveal text-center mt-12">
                    <AnimatedBorderButton
                        href="https://github.com/payalmistryy"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View All Projects
                        <ArrowRight className="w-5 h-5" />
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};
