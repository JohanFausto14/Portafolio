import type { CSSProperties } from "react";

interface InteractiveTitleProps {
  text: string;
  className?: string;
  spaceWidth?: string;
  charClassName?: string;
  /** Resting letter color. Hover overrides it only on devices that support hover. */
  baseColor?: string;
}

export const InteractiveTitle = ({
  text,
  className = "",
  spaceWidth = "w-[0.2em]",
  charClassName = "",
  baseColor = "#aaaaaa",
}: InteractiveTitleProps) => {
  const words = text.split(" ");

  return (
    <span
      className={`inline-block select-none ${className}`}
      style={{ "--title-base-color": baseColor } as CSSProperties}
    >
      {/* Screen readers get the whole title; the split letters are decorative. */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className={`title-char inline-block transform-gpu cursor-default${
                  charClassName ? " " + charClassName : ""
                }`}
              >
                {char}
              </span>
            ))}
            {wordIndex < words.length - 1 && (
              <span className={`inline-block ${spaceWidth}`}>&nbsp;</span>
            )}
          </span>
        ))}
      </span>
    </span>
  );
};

export default InteractiveTitle;
