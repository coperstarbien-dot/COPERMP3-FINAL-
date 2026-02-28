/*
 * AdBanner — ClipTools Pro
 * Placeholder para espacios de Google Ads
 * Sizes: leaderboard (728x90), rectangle (300x250), banner (468x60)
 */

interface AdBannerProps {
  size?: "leaderboard" | "rectangle" | "banner" | "responsive";
  className?: string;
  label?: string;
}

export default function AdBanner({ size = "responsive", className = "", label = "Publicidad" }: AdBannerProps) {
  const sizeClasses = {
    leaderboard: "w-full max-w-[728px] h-[90px]",
    rectangle: "w-[300px] h-[250px]",
    banner: "w-full max-w-[468px] h-[60px]",
    responsive: "w-full min-h-[90px]",
  };

  return (
    <div className={`ad-placeholder flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <div className="text-center">
        <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">{label}</p>
        <p className="text-xs text-slate-300 mt-0.5">Google Ads</p>
      </div>
    </div>
  );
}
