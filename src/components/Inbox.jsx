import React from "react";
import { MdCropSquare } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
function Inbox() {
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-gray-700 py-2">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <MdKeyboardArrowDown size={"20px"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
