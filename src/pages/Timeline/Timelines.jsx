import React, { useContext, useState } from "react";
import { FriendContext } from "../../context/FriendContext";
import { IoIosArrowDown } from "react-icons/io";
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";

const typeOfActions = {
  call: { label: "Call", img: callImg },
  text: { label: "Text", img: textImg },
  video: { label: "Video", img: videoImg },
};

const Timelines = () => {
  const { actions } = useContext(FriendContext);
  console.log(actions, "friendContext");

  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all" ? actions : actions.filter((act) => act.type === filter);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-9/12 mx-auto py-20">
        <h2 className="font-bold text-5xl text-[#1F2937] mb-6">Timeline</h2>
        <div className="dropdown dropdown-start mb-6">
          <div
            tabIndex={0}
            role="button"
            className="shadow-sm flex justify-between items-center w-86.75 rounded-lg p-4"
          >
            <span className="text-[#64748B] text-lg capitalize">
              {filter === "all" ? "Filter timeline" : filter}
            </span>
            <IoIosArrowDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-[#64748B] text-md"
          >
            {["all", "call", "text", "video"].map((option) => (
              <li key={option}>
                <a onClick={() => setFilter(option)} className="capitalize">
                  {option === "all" ? "All" : option}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {filtered.length === 0 ? (
          <p className="bg-white rounded-lg hover:border hover:border-dashed hover:border-[#93C5FD] shadow-sm p-4 text-[#64748B] text-2xl font-bold">
            You did not performed any actions yet.
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {filtered.map((item) => {
              const config = typeOfActions[item.type];
              return (
                <div
                  key={item.id}
                  className="bg-[#FFFFFF] rounded-lg hover:border hover:border-dashed hover:border-[#93C5FD] shadow-sm p-4 flex items-center gap-4"
                >
                  <img
                    src={config.img}
                    alt={config.label}
                    className="w-10 h-10"
                  />
                  <div>
                    <p>
                      <span className="text-[#244D3F] text-xl">{config.label}</span>{" "}
                      <span className="text-[#64748B] text-lg">
                        with {item.friendName}
                      </span>
                    </p>
                    <p className="text-[#64748B] text-base">
                      {formatDate(item.date)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Timelines;
