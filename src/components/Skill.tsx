export default function Skill({ icon, text }) {
  return (
    <>
      <div className="flex items-center gap-2 text-slate-400 p-1 text-sm ">
        {icon}
        <span>{text}</span>
      </div>
    </>
  );
}
