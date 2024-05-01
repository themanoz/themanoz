interface SkillProps {
  text: string;
}

export default function Skill({ text } : SkillProps) {
  return (
    <>
      <div className="flex items-center gap-2 text-slate-400 p-2 text-sm border border-slate-400 rounded-full">
        <span>{text}</span>
      </div>
    </>
  );
}
