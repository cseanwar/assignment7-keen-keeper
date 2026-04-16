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
  const { interactions } = useContext(FriendContext);
  console.log(interactions, "friendContext");

  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? interactions
      : interactions.filter((act) => act.type === filter);

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-10 md:py-14 lg:py-20">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#1F2937] mb-6">
          Timeline
        </h2>
        <div className="dropdown dropdown-start mb-6 sm:w-72">
          <div
            tabIndex={0}
            role="button"
            className="shadow-sm flex justify-between items-center w-full lg:w-86 rounded-lg p-3 md:p-4 cursor-pointer"
          >
            <span className="text-[#64748B] text-base md:text-lg capitalize">
              {filter === "all" ? "Filter timeline" : filter}
            </span>
            <IoIosArrowDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow-sm text-[#64748B]"
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
          <p className="bg-[#FFFFFF] rounded-lg shadow-sm p-4 text-[#64748B] text-lg lg:text-2xl font-bold text-center py-20">
            You did not performed any interactions yet.
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {filtered.map((item) => {
              const config = typeOfActions[item.type];
              return (
                <div
                  key={item.id}
                  className="bg-[#FFFFFF] rounded-lg hover:border hover:border-dashed hover:border-[#93C5FD] shadow-sm p-3 lg:p-4 flex items-center gap-3 lg:gap-4"
                >
                  <img
                    src={config.img}
                    alt={config.label}
                    className="w-8 h-8 lg:w-10 lg:h-10 shrink-0"
                  />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-1 sm:gap-0">
                    <div>
                      <p>
                        <span className="text-[#244D3F] text-base lg:text-xl font-semibold">
                          {config.label}
                        </span>{" "}
                        <span className="text-[#64748B] text-sm lg:text-lg">
                          with {item.friendName}
                        </span>
                      </p>
                      <p className="text-[#64748B] text-sm lg:text-base">
                        {formatDate(item.date)}
                      </p>
                    </div>
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
