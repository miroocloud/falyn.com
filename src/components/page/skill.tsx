"use client";

const TAGS = [
  "HTML",
  "CSS",
  "JavaScript",
  "Typescript",
  "Tailwind",
  "React",
  "Next.js",
  "Gatsby",
  "UI/UX",
  "SVG",
  "animation",
  "webdev",
];

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return (
    <div
      className="loop-slider"
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className="inner">
        {children}
        {children}
      </div>
    </div>
  );
};

export default function SkillList() {
  return (
    <>
      <div className="flex flex-col space-y-1 overflow-x-hidden">
        {[...new Array(5)].map((_, i) => {})}
      </div>
    </>
  );
}
