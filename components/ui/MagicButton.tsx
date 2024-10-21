import React from "react";

const MagicButton = ({
  content,
  icon,
  position,
  handleClick,
  otherClasses,
  positiomClass,
}: {
  content: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  positiomClass?: string;
}) => {
  return (
    <button onClick = {handleClick} className={` inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none w-60 mt-10 ${positiomClass}`}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
        {position === "left" && icon}
        {content}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;