import React from "react";

import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ data, reference, onRemove }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.2 }}
      className="relative flex-shrink-0 w-60 h-72 bg-zinc-900/80 rounded-[45px] text-white px-8 py-10 overflow-hidden "
    >
      <p className="text-xl font-semibold mt-5 leading-tight flex items-center justify-center text-green-500 bg-zinc-600 rounded-xl p-2">
        NEW TASK
      </p>
      
     
     <div className="task-content mt-4 text-center break-words text-lg font-semibold leading-tight overflow-hidden">
        {data.text}
      </div>

      <div className="footer absolute top-0 w-full right-0 left-3">
        <div className="flex items-center py-3 px-8 justify-end mb-3">
          <span
            className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer"
            onClick={onRemove}
          >
            <IoClose />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
