import { motion } from "framer-motion";

export default function Color({ name, value, hsl }) {
  function handleClick() {
    navigator.clipboard.writeText(name);
  }

  return (
    <div
      className="border-0 border-gray-100 shadow-md w-60 h-32 flex flex-col overflow-hidden rounded-md hover:scale-105 transition-transform cursor-pointer"
      style={{ backgroundColor: value }}
      onClick={handleClick}
    >
      <div className="flex justify-between text-xs bg-gray-700 bg-opacity-40 text-white p-1">
        <span>{name}</span>
        {/* <span>{`hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`}</span> */}
        <span>{value}</span>
      </div>
    </div>
  );
}
