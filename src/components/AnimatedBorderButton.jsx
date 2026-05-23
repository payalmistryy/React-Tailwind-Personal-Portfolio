export const AnimatedBorderButton = ({ href, download, target, rel, children }) => {
    return (
        <a
            href={href}
            download={download}
            target={target}
            rel={rel}
            className="laser-button relative rounded-full inline-flex items-center px-6 py-3 text-sm font-medium text-foreground focus:outline-none"
        >
            <span className="relative z-[2] inline-flex items-center justify-center gap-2">
                {children}
            </span>
        </a>
    );
};