export const About = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div className="animate-fade-in">
                            <span className="text-sm text-primary uppercase tracking-widest">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-primary animate-fade-in animation-delay-100">
                            Passionate about code,
                            <br />
                            <span className="font-serif italic" style={{color: "#7a5c7e"}}>
                                always building.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                I'm a Computer Science student at Portland State University 
                                with a strong foundation in object-oriented programming, data 
                                structures, and algorithms. I got into CS because I've always 
                                been drawn to problem solving and figuring out how things work 
                                under the hood.
                            </p>
                            <p>
                                My projects span across multiple languages and platforms. I've 
                                built Chrome extensions using JavaScript, designed complex C++ 
                                applications with inheritance hierarchies and recursive data 
                                structures, and developed this portfolio from scratch with React 
                                and Tailwind CSS. I enjoy writing code that is clean, efficient, 
                                and built to last.
                            </p>
                            <p>
                                I hold a Google AI Essentials credential and I'm working toward my
                                AWS Cloud Practitioner certification, continuously expanding my knowledge
                                of cloud architecture and AI-assisted development. I'm seeking a
                                summer 2027 software engineering internship where I can contribute 
                                to meaningful projects and grow alongside experienced engineers.
                            </p>
                        </div>

                        {/* Mission Statement */}
                        <div className="glass-skill rounded-2xl p-6 glow-border animate-fade-in animation-delay-400">
                            <p className="font-serif italic text-lg text-foreground">
                                "My goal is to write software that solves real problems
                                for real people. I believe the best code comes from
                                understanding the people who use it, not just the
                                systems that run it."
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Stats/Highlights */}
                    <div className="grid grid-cols-2 gap-6 animate-fade-in animation-delay-400">
                        <div className="glass-skill rounded-2xl p-6 text-center animate-float">
                            <h3 className="text-3xl font-bold text-primary">5+</h3>
                            <p className="text-sm text-muted-foreground mt-2">Projects Built</p>
                        </div>
                        <div className="glass-skill rounded-2xl p-6 text-center animate-float" style={{ animationDelay: "1s" }}>
                            <h3 className="text-3xl font-bold text-primary">6+</h3>
                            <p className="text-sm text-muted-foreground mt-2">Languages & Frameworks</p>
                        </div>
                        <div className="glass-skill rounded-2xl p-6 text-center animate-float" style={{ animationDelay: "2s" }}>
                            <h3 className="text-3xl font-bold text-primary">2</h3>
                            <p className="text-sm text-muted-foreground mt-2">Certifications</p>
                        </div>
                        <div className="glass-skill rounded-2xl p-6 text-center animate-float" style={{ animationDelay: "3s" }}>
                            <h3 className="text-3xl font-bold text-primary">1</h3>
                            <p className="text-sm text-muted-foreground mt-2">Hackathon</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};