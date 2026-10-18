interface InteractiveTitleProps {
  text: string;
  className?: string;
  spaceWidth?: string;
  charClassName?: string;
}

export const InteractiveTitle = ({
  text,
  className = "",
  spaceWidth = "w-[0.2em]",
  charClassName = "",
}: InteractiveTitleProps) => {
  const words = text.split(" ");

  return (
    <span className={`inline-block select-none ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className={`inline-block transition-[color,transform] duration-200 ease-out text-[#888888] hover:text-[#ffffff] hover:scale-105 hover:[text-shadow:0_0_16px_rgba(255,255,255,0.7)] cursor-default transform-gpu${charClassName ? " " + charClassName : ""}`}
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
  );
};

export default InteractiveTitle;
