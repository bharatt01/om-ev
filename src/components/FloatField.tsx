import { useState } from "react";

interface FloatFieldProps {
  id: string;
  label: string;
  type: string;
}

export function FloatField({ id, label, type }: FloatFieldProps) {
  const [val, setVal] = useState("");
  const active = val.length > 0;
  const common = "peer w-full bg-transparent border-0 border-b-2 border-black/30 focus:border-black outline-none py-3 text-lg transition-colors";
  return (
    <div className="relative">
      {type === "textarea" ? (
        <textarea id={id} rows={3} value={val} onChange={(e) => setVal(e.target.value)} className={common} />
      ) : (
        <input id={id} type={type} value={val} onChange={(e) => setVal(e.target.value)} className={common} />
      )}
      <label
        htmlFor={id}
        className={`absolute left-0 pointer-events-none transition-all duration-300 ${
          active ? "-top-3 text-xs text-[#81C784] uppercase tracking-[0.2em] font-bold" : "top-3 text-base text-black/50"
        } peer-focus:-top-3 peer-focus:text-xs peer-focus:text-[#81C784] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:font-bold`}
      >
        {label}
      </label>
    </div>
  );
}