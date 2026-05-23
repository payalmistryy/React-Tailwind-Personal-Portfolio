import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "payal.mistryy@gmail.com",
        href: "mailto:payal.mistryy@gmail.com",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Portland, OR",
    },
];

export const Contact = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
            );
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (err) {
            console.error('EmailJS error:', err);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const inputClass = "w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all";

    return (
        <section ref={sectionRef} id="contact" className="py-20 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="reveal text-primary text-sm font-medium tracking-wider uppercase">
                        Get in Touch
                    </span>
                    <h2 className="reveal reveal-delay-100 text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
                        Let's build
                        <span className="font-serif italic font-normal text-primary">
                            {" "}something great.
                        </span>
                    </h2>
                    <p className="reveal reveal-delay-200 text-muted-foreground">
                        Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can work together.
                    </p>
                </div>

                {/* Contact Info Cards */}
                <div className="reveal reveal-delay-300 max-w-2xl mx-auto grid sm:grid-cols-2 gap-4 mb-8">
                    {contactInfo.map((info, idx) => {
                        const Icon = info.icon;
                        const Wrapper = info.href ? 'a' : 'div';
                        return (
                            <Wrapper
                                key={idx}
                                {...(info.href ? { href: info.href } : {})}
                                className={`group glass rounded-2xl p-5 flex items-center gap-4 transition-colors ${
                                    info.href ? 'hover:border-primary/40' : ''
                                }`}
                            >
                                <div className={`p-3 rounded-full bg-primary/10 text-primary transition-colors ${
                                    info.href ? 'group-hover:bg-primary group-hover:text-primary-foreground' : ''
                                }`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                                        {info.label}
                                    </p>
                                    <p className="text-sm font-medium text-foreground">
                                        {info.value}
                                    </p>
                                </div>
                            </Wrapper>
                        );
                    })}
                </div>

                {/* Availability Status */}
                <div
                    className="reveal max-w-2xl mx-auto glass rounded-2xl p-5 mb-8"
                    style={{ transitionDelay: '0.35s' }}
                >
                    <div className="flex items-start gap-3">
                        <span className="relative flex h-3 w-3 mt-1.5 shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <div>
                            <p className="text-sm font-semibold text-foreground">
                                Open to Summer 2026 Internships
                            </p>
                            <p className="text-sm text-muted-foreground mt-1">
                                Actively seeking software engineering internship opportunities for Summer 2026. Whether you're a recruiter, engineering lead, or fellow developer with an interesting project — I'd love to connect.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="reveal reveal-delay-400 max-w-2xl mx-auto glass rounded-2xl p-8 space-y-6"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your name..."
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className={inputClass}
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message..."
                            className={`${inputClass} resize-none`}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                        <Send className="w-4 h-4" />
                    </button>

                    {status === 'success' && (
                        <p className="text-sm text-center text-primary font-medium">
                            Message sent — I'll get back to you soon!
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="text-sm text-center text-red-600 font-medium">
                            Something went wrong. Please try again or email me directly.
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};
