import { useEffect, useRef } from 'react';
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton';
import { ArrowDown, ArrowRight, Download, Mail } from 'lucide-react';

const GithubIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
    </svg>
);

const LinkedinIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

const skills = [
    "C/C++",
    "Python",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "SQL",
    "HTML/CSS",
    "Node.js",
    "Git",
    "AWS",
    "Generative AI",
    "Chrome Extensions API",
    "RESTful APIs",
    "Object-Oriented Programming",
    "Data Structures",
    "Algorithms",
    "Vite",
    "Netlify",
];

export const Hero = () => {
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
        <section ref={sectionRef} className="relative min-h-screen flex flex-col overflow-hidden">
            {/* Bg */}
            <div className="absolute inset-0 hero-gradient" />

            {/* Content */}
            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 flex-1 flex flex-col justify-center">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text */}
                    <div className="flex-1 text-center md:text-left space-y-6">
                        {/* Headline */}
                        <div className="reveal">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-primary">
                                <span className="text-sm text-primary">
                                    Building tools & solving problems
                                </span>
                            </div>
                        </div>
                        <div className="reveal reveal-delay-100">
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-primary">
                                Hi, I'm{" "}
                                <span className="glow-text">Payal Mistry</span>
                                <br />
                                <span className="font-serif italic text-3xl md:text-5xl" style={{color: "#7a5c7e"}}>
                                    Software Engineer
                                </span>
                            </h1>
                        </div>
                        <div className="reveal reveal-delay-200">
                            <p className="text-lg text-muted-foreground max-w-lg">
                                PSU CS student with hands-on experience building browser extensions,
                                designing object-oriented systems, and developing modern web applications.
                                Passionate about leveraging AI tools to build smarter software.
                                Currently seeking a summer 2026 software engineering internship.
                            </p>
                        </div>
                        {/* CTA Buttons */}
                        <div className="reveal reveal-delay-300 flex gap-4 justify-center md:justify-start items-center">
                            <a href="#projects" className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors">
                                View Projects
                            </a>
                            <a href="#contact" className="border border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-surface transition-colors">
                                Contact Me
                            </a>
                            <AnimatedBorderButton href="/Payal_Mistry_Resume.pdf" download>
                                <Download className="w-5 h-5" />
                                Resume
                            </AnimatedBorderButton>
                        </div>
                        {/* Social Links */}
                        <div className="reveal reveal-delay-400 flex items-center gap-4 justify-center md:justify-start">
                            <span className="text-sm text-muted-foreground">Connect with me: </span>
                            {[
                                { icon: GithubIcon, href: "https://github.com/payalmistryy" },
                                { icon: LinkedinIcon, href: "https://linkedin.com/in/payalmistryy" },
                                { icon: Mail, href: "mailto:payal.mistryy@gmail.com" }
                            ].map((social, idx) => (
                                <a key={idx} href={social.href} target="_blank" rel="noopener noreferrer"
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Profile Photo */}
                    <div className="reveal reveal-delay-200 flex-1 flex justify-center">
                        <div className="relative max-w-md mx-auto">
                            <div className="relative glass rounded-full p-2 glow-border">
                                <img
                                    src="/profile-photo.jpg"
                                    alt="Payal Mistry"
                                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
                                />
                            </div>
                            {/* Floating Badge */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass rounded-full px-3.5 py-1.5 whitespace-nowrap shadow-lg">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                                    <span className="text-xs font-medium">Available Summer 2027</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Marquee */}
                <div className="reveal reveal-delay-400 mt-20">
                    <p className="text-center text-sm text-muted-foreground mb-6">
                        Technologies I work with
                    </p>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-marquee gap-4">
                            {[...skills, ...skills].map((skill, idx) => (
                                <div key={idx} className="flex-shrink-0 glass-skill rounded-full px-6 py-2">
                                    <span className="text-sm font-medium whitespace-nowrap" style={{color: "#452a47"}}>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Down Arrow */}
            <div className="relative z-10 pb-8 flex justify-center animate-bounce">
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    <ArrowDown size={24} />
                </a>
            </div>
        </section>
    );
};
