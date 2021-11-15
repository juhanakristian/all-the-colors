import * as React from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

export function ClickNotificationArea({ onClick, children, text = "Copied" }) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = React.useState(false);

  function handleClick(event) {
    setPosition({ x: event.pageX, y: event.pageY });

    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 0);

    onClick();
  }

  return (
    <div onClick={handleClick}>
      <AnimatePresence initial={false}>
        {isVisible && <Notification {...position}>{text}</Notification>}
      </AnimatePresence>
      {children}
    </div>
  );
}

export default function Notification({ children, x, y }) {
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });

  const calcOffset = React.useCallback((node) => {
    if (node) {
      const rect = node.getBoundingClientRect();
      setOffset({ x: rect.width / 2, y: rect.height });
    }
  }, []);

  const variants = {
    hidden: {
      opacity: 1,
      top: y - 20 - offset.y,
    },
    show: {
      opacity: 0,
      top: y - 50 - offset.y,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="text-white bg-gray-800 p-2 text-xs absolute z-10 rounded-md pointer-events-none"
      style={{ left: x - offset.x }}
      initial="hidden"
      exit="show"
      variants={variants}
      ref={calcOffset}
    >
      {children}
    </motion.div>
  );
}
