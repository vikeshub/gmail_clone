import React from "react";
import { useNavigate } from "react-router-dom";
import { MdCropSquare } from "react-icons/md";
import { RiStarLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { setSelectedEmail } from "../redux/appSlice";

function Message({ email }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const openMail = () => {
    dispatch(setSelectedEmail(email));
    navigate(`/mail/${email.id}`);
  };
  return (
    <div
      onClick={openMail}
      className="flex items-center justify-between border-b border-gray-200 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
          <MdCropSquare className="w-5 h-5" />
        </div>
        <div className="flex-none text-gray-300">
          <RiStarLine className="w-5 h-5" />
        </div>
        <div className="flex-1 ml-4">
          <p className="text-gray-600 truncate inline-block max-w-full">
            {email?.message}
          </p>
        </div>
      </div>
      <div className="flex-none text-gray-400 text-sm">
        <p>{new Date(email?.createdAt?.seconds * 1000).toUTCString()}</p>
      </div>
    </div>
  );
}

export default Message;
