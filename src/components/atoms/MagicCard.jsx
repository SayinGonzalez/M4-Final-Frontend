import { useRef } from "react";
import { useThemeContext } from "../../hooks/useContexts";

/**
 * MagicCard
 * - Envuelve cualquier contenido y le aplica borde brillante + brillos que siguen al mouse.
 * - Funciona con Vite + Tailwind (dark mode soportado).
 */
const MagicCard = (props) => {

  const {
    children,
    className = "",
    gradientFrom,
    gradientTo,
    gradientFromDark,
    gradientToDark,
    radiusMain,
    radiusHalo,
    mainOpacity,
    haloOpacity,
    withBorder,
  } = props;

  const { theme } = useThemeContext();
  const isDark = (theme === 'dark') ? true : false;

  const fromLight = gradientFrom ?? "#1e3a8a";
  const toLight = gradientTo ?? "#9333ea";
  const fromDark = gradientFromDark ?? "#9E7AFF"; 
  const toDark = gradientToDark ?? "#FE8BBB";
  const rMain = radiusMain ?? 320;
  const rHalo = radiusHalo ?? 220;
  const oMain = mainOpacity ?? 0.28;
  const oHalo = haloOpacity ?? 0.10;
  const showBorder = withBorder ?? true;

  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty("--x", `${x}px`);
    cardRef.current.style.setProperty("--y", `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--x", `var(--x)`);
    cardRef.current.style.setProperty("--y", `var(--y)`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative size-full group ${showBorder && "p-1"} ${className ? className : 'rounded-xl'}`}
      style={{
        // Borde brillante que sigue al mouse (solo si withBorder)
        background: showBorder
          && `radial-gradient(circle ${rMain}px at var(--x) var(--y), ${isDark ? fromDark : fromLight}, ${isDark ? toDark : toLight} 80%, transparent 100%)`
      }}
    >
      {/* Contenedor interior */}
      <div className={`relative size-full ${showBorder ? "rounded-lg" : "rounded-xl"} overflow-hidden`}>
        {/* Brillo principal */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] opacity-0 transition-opacity duration-300 z-50 group-hover:opacity-40"
          style={{
            background: `radial-gradient(circle ${rMain}px at var(--x) var(--y), rgba(255,255,255,${oMain}), transparent 80%)`,
          }}
        />
        {/* Halo secundario */}
        <div
          className="absolute inset-0 pointer-events-none rounded-[inherit] opacity-0 transition-opacity duration-500 z-[45] group-hover:opacity-20"
          style={{
            background: `radial-gradient(circle ${rHalo}px at var(--x) var(--y), rgba(255,255,255,${oHalo}), transparent 20%)`,
          }}
        />

        {/* Tu contenido */}
        <div className="relative z-10 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}

export default MagicCard;
