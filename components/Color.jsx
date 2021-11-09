import { motion } from "framer-motion";

export default function Color({ name, value, hsl }) {
  function handleClick() {
    navigator.clipboard.writeText(name);
  }

  return (
    <div
      className="border-0 border-gray-100 shadow-md w-60 h-32 flex flex-col overflow-hidden rounded-md hover:scale-105 transition-transform"
      style={{ backgroundColor: value }}
      onClick={handleClick}
    >
      <div className="bg-gray-700 text-white text-xs p-1 flex lowercase">
        <span>{name}</span>
        {/* <span>{`HSL: ${hsl.h} ${hsl.s} ${hsl.l}`}</span> */}
      </div>
    </div>
  );
}
