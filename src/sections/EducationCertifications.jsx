import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const certifications = [
    {
        title: "Google AI Essentials",
        type: "Specialization · 5 courses",
        issuer: "Google · via Coursera",
        date: "Issued May 2026",
        verifyUrl: "https://coursera.org/verify/specialization/GRRW1NKFGG4C",
    },
    {
        title: "Google AI Professional Certificate",
        type: "Professional Certificate · 7 courses",
        issuer: "Google · via Coursera",
        date: "Issued May 2026",
        verifyUrl: "https://coursera.org/verify/professional-cert/CQZ27EUFTPBL",
    },
    {
        title: "AWS Certified Cloud Practitioner",
        type: "Foundational Certification",
        issuer: "Amazon Web Services",
        date: "Expected 2026",
        inProgress: true,
    },
];

export const EducationCertifications = () => {
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
        <section ref={sectionRef} id="education" className="py-20 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="reveal text-primary text-sm font-medium tracking-wider uppercase">
                        Certifications
                    </span>
                    <h2 className="reveal reveal-delay-100 text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
                        Always
                        <span className="font-serif italic font-normal text-primary">
                            {" "}learning.
                        </span>
                    </h2>
                    <p className="reveal reveal-delay-200 text-muted-foreground">
                        Industry-recognized credentials in cloud computing and AI development.
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {certifications.map((cert, idx) => (
                        <div
                            key={idx}
                            className={`reveal group glass rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 ${
                                cert.inProgress
                                    ? 'border-2 border-primary/40 hover:border-primary/60'
                                    : 'hover:border-primary/30'
                            }`}
                            style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* Badges row */}
                            <div className="flex items-start justify-between gap-2 flex-wrap">
                                <span className="text-xs px-3 py-1 rounded-full bg-surface text-muted-foreground border border-border/50">
                                    {cert.type}
                                </span>
                                {cert.inProgress && (
                                    <span className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/30 font-medium">
                                        In Progress
                                    </span>
                                )}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                {cert.title}
                            </h3>

                            {/* Issuer & Date */}
                            <div className="space-y-1 text-sm text-muted-foreground flex-1">
                                <p>{cert.issuer}</p>
                                <p>{cert.date}</p>
                            </div>

                            {/* Verify button */}
                            {cert.verifyUrl && (
                                <a
                                    href={cert.verifyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                                >
                                    Verify Credential
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
