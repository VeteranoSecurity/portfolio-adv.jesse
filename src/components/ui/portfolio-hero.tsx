import React, { useState, useEffect, useRef, useMemo } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { FloatingPathsBackground } from "@/components/ui/floating-paths";
import foto2 from "@/assets/Foto 2.png";
import headerTitle from "@/assets/Header-title.png";

// Inline Button component
export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

// BlurText animation component
interface BlurTextProps {
  text: string;
  delay?: number;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  className?: string;
  style?: React.CSSProperties;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text,
  delay = 50,
  animateBy = "words",
  direction = "top",
  className = "",
  style,
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const segments = useMemo(() => {
    return animateBy === "words" ? text.split(" ") : text.split("");
  }, [text, animateBy]);

  return (
    <p ref={ref} className={`inline-flex flex-wrap ${className}`} style={style}>
      {segments.map((segment, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            filter: inView ? "blur(0px)" : "blur(10px)",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : `translateY(${direction === "top" ? "-20px" : "20px"})`,
            transition: `all 0.5s ease-out ${i * delay}ms`,
          }}
        >
          {segment}
          {animateBy === "words" && i < segments.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
};

export default function PortfolioHero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const menuItems = [
    { label: "INÍCIO", targetId: "hero", highlight: true },
    { label: "SOBRE O ADVOGADO", targetId: "insight" },
    { label: "DEFESA CRIMINAL", targetId: "insight" },
    { label: "TRIBUNAL DO JÚRI", targetId: "insight" },
    { label: "PSICOLOGIA FORENSE", targetId: "insight" },
    { label: "CONTATO", targetId: "insight" },
  ];

  const handleNavClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToNext = () => {
    const el = document.getElementById("insight");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="hero" className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Floating Paths Background */}
      <FloatingPathsBackground position={-1} className="min-h-screen">
        {/* Header */}
        <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6 bg-transparent">
          <nav className="flex items-center justify-between max-w-screen-2xl mx-auto">
            {/* Menu Button */}
            <div className="relative">
              <button
                ref={buttonRef}
                type="button"
                className="p-2 transition-colors duration-300 z-50 text-neutral-400 hover:text-white cursor-pointer"
                aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-8 h-8 transition-colors duration-300" strokeWidth={2} />
                ) : (
                  <Menu className="w-8 h-8 transition-colors duration-300" strokeWidth={2} />
                )}
              </button>

              {isMenuOpen && (
                <div
                  ref={menuRef}
                  className="absolute top-full left-0 w-[220px] md:w-[260px] border border-neutral-800 bg-neutral-950/95 backdrop-blur-xl shadow-2xl mt-2 ml-2 p-4 rounded-xl z-[100]"
                >
                  {menuItems.map((item) => (
                    <a
                      key={item.label}
                      href={`#${item.targetId}`}
                      onClick={(e) => handleNavClick(e, item.targetId)}
                      className="block text-base md:text-lg font-bold tracking-tight py-2 px-3 rounded-lg cursor-pointer transition-colors duration-300"
                      style={{
                        color: item.highlight ? "#D4AF37" : "#FFFFFF",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#D4AF37";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = item.highlight ? "#D4AF37" : "#FFFFFF";
                      }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Header Title Image (Header-title.png) */}
            <div className="flex items-center justify-center">
              <img
                src={headerTitle}
                alt="Dr. Jesse Marques"
                className="h-7 sm:h-9 md:h-11 w-auto object-contain select-none"
              />
            </div>

            {/* Right Spacer for Header Balance */}
            <div className="w-10 h-10" />
          </nav>
        </header>

        {/* Hero Main Content */}
        <main className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-12">
          {/* Centered Main Name */}
          <div className="relative text-center w-full max-w-7xl mx-auto my-auto pt-16">
            <div>
              <BlurText
                text="JESSE"
                delay={90}
                animateBy="letters"
                direction="top"
                className="font-extrabold text-[80px] sm:text-[130px] md:text-[170px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap select-none"
                style={{ color: "#D4AF37", fontFamily: "'Fira Code', monospace" }}
              />
            </div>
            <div>
              <BlurText
                text="MARQUES"
                delay={90}
                animateBy="letters"
                direction="top"
                className="font-extrabold text-[80px] sm:text-[130px] md:text-[170px] lg:text-[210px] leading-[0.75] tracking-tighter uppercase justify-center whitespace-nowrap select-none"
                style={{ color: "#D4AF37", fontFamily: "'Fira Code', monospace" }}
              />
            </div>

            {/* Profile Picture Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-[80px] h-[125px] sm:w-[110px] sm:h-[175px] md:w-[130px] md:h-[210px] lg:w-[150px] lg:h-[240px] rounded-full overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.3)] border-2 border-amber-500/40 transition-transform duration-300 hover:scale-105 cursor-pointer bg-slate-900">
                <img
                  src={foto2}
                  alt="Dr. Jesse Marques - Advogado Criminalista"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Tagline */}
          <div className="w-full px-6 mb-12 text-center z-20">
            <BlurText
              text="Advocacia Criminal sem fronteiras. Atuação técnica e estratégica em Brasília/DF e todo o Brasil."
              delay={120}
              animateBy="words"
              direction="top"
              className="text-base sm:text-lg md:text-xl font-medium text-center transition-colors duration-300 text-neutral-400 hover:text-white justify-center max-w-2xl mx-auto"
              style={{ fontFamily: "'Antic', sans-serif" }}
            />
          </div>

          {/* Scroll Indicator */}
          <button
            type="button"
            onClick={scrollToNext}
            className="mb-8 p-2 rounded-full hover:bg-white/5 transition-all duration-300 cursor-pointer animate-bounce z-20"
            aria-label="Rolar para baixo"
          >
            <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-neutral-400 hover:text-amber-400 transition-colors" />
          </button>
        </main>
      </FloatingPathsBackground>
    </div>
  );
}
