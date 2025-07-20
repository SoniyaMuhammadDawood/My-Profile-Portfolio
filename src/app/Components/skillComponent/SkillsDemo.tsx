import { IconType } from "react-icons";
import { PixelCanvas } from "./Skills";

function PixelCanvasDemo({
  icon,
  colors,
  iconColor = "text-muted-foreground",
  borderColor = "#0ea5e9",
  label, // <-- new prop
}: {
  icon: IconType;
  colors: string[];
  iconColor?: string;
  borderColor?: string;
  label: string; // <-- add label type
}) {
  const IconComponent = icon;

  return (
    <div className="w-[200px] mx-auto">
      <button
        className="group relative w-full overflow-hidden rounded-[32px] aspect-square transition-colors duration-200"
        style={{
          "--active-color": colors[colors.length - 1],
          "--border-color": borderColor,
        } as React.CSSProperties}
      >
        <PixelCanvas
          gap={10}
          speed={10}
          colors={colors}
          variant="icon"
        />
        <div
          className="absolute inset-0 rounded-[32px] border"
          style={{ borderColor: "var(--border-color)" }}
        />
        <div className="relative z-10 h-full w-full flex flex-col items-center justify-center">
          <IconComponent
            className={`w-20 h-20 transition-all duration-200 ease-out group-hover:scale-110 group-hover:text-[var(--active-color)] ${iconColor}`}
          />
          <p className="mt-2 text-base text-center text-muted-foreground font-semibold">
            {label}
          </p>
        </div>
      </button>
    </div>
  );
}

export { PixelCanvasDemo };
