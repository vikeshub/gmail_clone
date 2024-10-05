import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../redux/appSlice";

function SendMail() {
  const { open } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    to: "",
    subject: "",
    message: "",
  });

  const changedHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div
      className={`${
        open ? "block" : "hidden"
      } bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}
    >
      <div className="flex px-3 py-2 bg-[#F2F6Fc] justify-between rounded-t-md">
        <h1>New Message</h1>
        <div
          onClick={() => dispatch(setOpen(false))}
          className="p-2 rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <RxCross2 size={"20px"} />
        </div>
      </div>
      <form onSubmit={submitHandler} className="flex flex-col p-3 gap-2">
        <input
          onChange={changedHandler}
          value={formData.to}
          name="to"
          type="text"
          placeholder="To"
          className="outline-none py-1"
        />
        <input
          onChange={changedHandler}
          value={formData.subject}
          name="subject"
          type="text"
          placeholder="Subject"
          className="outline-none py-1"
        />
        <textarea
          onChange={changedHandler}
          value={formData.message}
          name="message"
          cols="30"
          rows="10"
          className="outline-none py-1"
        ></textarea>
        <button
          type="submit"
          className="bg-[#0b57d0] rounded-full w-fit px-4 text-white font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default SendMail;
