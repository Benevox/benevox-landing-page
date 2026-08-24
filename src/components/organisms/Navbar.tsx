import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import benevoxLogo from "@/assets/benevox-logo.png";

const navLinks = [
  { label: "Models",   href: "/models",            key: "models"   },
  { label: "Work",     href: "/portfolio",          key: "work"     },
  { label: "Careers",  href: "/careers",            key: "careers"  },
  { label: "About",    href: "/about",              key: "about"    },
];

export const Navbar = () => {
  const location = useLocation();
  const [scrolled,   setScrolled]   = useState(false);
  const [light,      setLight]      = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafRef  = useRef<number>(0);

  /* scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* theme persist */
  useEffect(() => {
    const stored = localStorage.getItem("bvx-theme");
    const isLight = stored === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
  }, []);

  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("bvx-theme", next ? "light" : "dark");
  };

  /* custom cursor */
  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let rx = 0, ry = 0, tx = 0, ty = 0;

    const onMove = (e: MouseEvent) => {
      dot.style.left = e.clientX + "px";
      dot.style.top  = e.clientY + "px";
      tx = e.clientX; ty = e.clientY;
    };
    const loop = () => {
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove);

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element).closest("a,button")) {
        ring.style.width  = "50px"; ring.style.height = "50px";
        dot.style.width   = "6px";  dot.style.height  = "6px";
      }
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element).closest("a,button")) {
        ring.style.width  = "34px"; ring.style.height = "34px";
        dot.style.width   = "10px"; dot.style.height  = "10px";
      }
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout",  onOut);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout",  onOut);
    };
  }, []);

  const active = navLinks.find(l => location.pathname.startsWith(l.href))?.key ?? "";

  const navBg     = scrolled ? undefined : "transparent";
  const navClass  = scrolled ? "glass" : "";

  return (
    <>
      {/* Custom cursor */}
      <div ref={dotRef}  className="bvx-cursor-dot"  />
      <div ref={ringRef} className="bvx-cursor-ring" />

      {/* Spacer */}
      <div style={{ height: 70 }} />

      <nav
        className={navClass}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 40,
          background: navBg,
          transition: "background .35s ease, border-color .35s ease, box-shadow .35s ease",
        }}
      >
        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: "16px 32px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24,
        }}>
          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, transition: "transform .25s ease" }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={benevoxLogo} alt="Benevox" style={{ height: 28, width: "auto", objectFit: "contain" }} />
          </Link>

          {/* Desktop links */}
          <div style={{ display: "flex", alignItems: "center", gap: 32, font: "600 14px/1 Inter" }}
               className="bvx-desktop-nav">
            {navLinks.map(link => (
              <Link
                key={link.key}
                to={link.href}
                className="bvx-link"
                style={{
                  color: active === link.key
                    ? "hsl(var(--home-fg))"
                    : "hsl(var(--home-muted))",
                  position: "relative", padding: "6px 0",
                  transition: "color .2s ease",
                  font: "600 14px/1 Inter",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              style={{
                width: 36, height: 36, borderRadius: "50%",
                border: "1px solid hsl(var(--home-border))",
                background: "transparent", color: "hsl(var(--home-fg))",
                fontSize: 15, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                transition: "all .25s ease",
              }}
            >
              {light ? "☾" : "☀"}
            </button>

            <a
              href="https://calendar.app.google/VT6CAYhjffCPbTfv5"
              target="_blank" rel="noopener noreferrer"
              className="bvx-btn-primary"
              style={{
                background: "hsl(142 50% 40%)", color: "#fff",
                font: "700 14px/1 Inter", padding: "12px 22px",
                borderRadius: 999, whiteSpace: "nowrap",
                transition: "all .2s ease",
              }}
            >
              Talk to us
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="bvx-hamburger"
              style={{
                background: "none", border: "none",
                color: "hsl(var(--home-fg))", fontSize: 22,
                cursor: "pointer", lineHeight: 1,
              }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            background: "hsl(var(--home-card))",
            borderTop: "1px solid hsl(var(--home-border))",
            padding: "24px 32px", display: "flex", flexDirection: "column", gap: 20,
          }}>
            {navLinks.map(link => (
              <Link
                key={link.key}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: active === link.key
                    ? "hsl(var(--home-fg))"
                    : "hsl(var(--home-muted))",
                  font: "600 16px/1 Inter",
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://calendar.app.google/VT6CAYhjffCPbTfv5"
              target="_blank" rel="noopener noreferrer"
              style={{
                background: "hsl(142 50% 40%)", color: "#fff",
                font: "700 15px/1 Inter", padding: "14px 28px",
                borderRadius: 999, textAlign: "center",
              }}
            >
              Talk to us
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @media (min-width: 769px) { .bvx-hamburger { display: none !important; } }
        @media (max-width: 768px) { .bvx-desktop-nav { display: none !important; } }
        a.bvx-link::after {
          content:""; position:absolute; left:0; right:100%; bottom:0;
          height:2px; background:hsl(142 50% 40%); transition:right .25s ease;
        }
        a.bvx-link:hover { color:hsl(var(--home-fg)) !important; }
        a.bvx-link:hover::after { right:0; }
      `}</style>
    </>
  );
};
