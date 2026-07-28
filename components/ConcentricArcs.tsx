import React from "react";

interface ConcentricArcsProps {
  className?: string;
  opacity?: number;
  center?: "top-right" | "center" | "bottom-left" | "top-left";
  color?: string;
}

export default function ConcentricArcs({
  className = "",
  opacity = 0.12,
  center = "top-right",
  color = "#F7F2EC",
}: ConcentricArcsProps) {
  const getTransform = () => {
    switch (center) {
      case "top-right":
        return "translate(80%, -20%)";
      case "bottom-left":
        return "translate(-20%, 80%)";
      case "top-left":
        return "translate(-20%, -20%)";
      case "center":
        return "translate(30%, 30%)";
      default:
        return "translate(80%, -20%)";
    }
  };

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-[700px] h-[700px] md:w-[900px] md:h-[900px] absolute transform transition-transform duration-1000"
        style={{
          transform: getTransform(),
          opacity: opacity,
        }}
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="400" cy="400" r="80" stroke={color} strokeWidth="1.5" strokeDasharray="6 4" />
        <circle cx="400" cy="400" r="140" stroke={color} strokeWidth="1.5" />
        <circle cx="400" cy="400" r="210" stroke={color} strokeWidth="1" strokeDasharray="8 6" />
        <circle cx="400" cy="400" r="290" stroke={color} strokeWidth="1.5" />
        <circle cx="400" cy="400" r="380" stroke={color} strokeWidth="1" strokeDasharray="10 8" />
        <circle cx="400" cy="400" r="480" stroke={color} strokeWidth="1.5" />
        <circle cx="400" cy="400" r="590" stroke={color} strokeWidth="1" strokeDasharray="12 10" />
        <circle cx="400" cy="400" r="710" stroke={color} strokeWidth="1.5" />
      </svg>
    </div>
  );
}
