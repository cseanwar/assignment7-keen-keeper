import React, { useContext } from "react";
import { GoPlus } from "react-icons/go";
import { FriendContext } from "../../context/FriendContext";

const Banner = ({ friends = [] }) => {
  const {interactions} = useContext(FriendContext);

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const stats = [
    {
      label: "Total Friends",
      value: friends.length,
    },
    {
      label: "On Track",
      value: friends.filter((f) => f.status === "on-track").length,
    },
    {
      label: "Need Attention",
      value: friends.filter((f) => f.status === "overdue" || f.status === "almost due").length,
    },
    {
      label: "Interactions This Month",
      value: interactions.filter((i) => {
        const d = new Date(i.date);
        return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
      }).length,
    },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
        <div className="flex flex-col justify-center items-center text-center pt-10 md:pt-16 lg:pt-20 pb-8 md:pb-10">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
            Friends to keep close in your life
          </h1>
          <p className="text-sm md:text-base text-[#64748B] pt-3 pb-6 md:pt-4 md:pb-8 max-w-md md:max-w-lg">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the <br /> relationships that matter most.
          </p>
          <button className="btn bg-[#244D3F] text-[#FFFFFF] text-sm md:text-base font-semibold">
            <GoPlus strokeWidth={1} className="text-xl md:text-xl" /> Add Friend
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 md:pb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 md:gap-2 justify-center items-center text-center p-5 md:p-6 lg:p-8 rounded-lg bg-[#FFFFFF] shadow-sm">
              <h4 className="text-[#244D3F] font-semibold text-3xl lg:text-[32px]">{stat.value}</h4>
              <p className="text-[#64748B] text-sm md:text-base lg:text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-[#E9E9E9]"></div>
      </div>
    </div>
  );
};

export default Banner;
