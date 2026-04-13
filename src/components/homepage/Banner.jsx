import React from "react";
import { GoPlus } from "react-icons/go";

const Banner = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-9/12 mx-auto">

        <div className="flex flex-col justify-center items-center text-center pt-20 pb-10">
          <h1 className="font-bold text-5xl">Friends to keep close in your life</h1>
          <p className="text-base text-[#64748B] pt-4 pb-8">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the <br /> relationships that matter most.
          </p>
          <button className="btn bg-[#244D3F] text-[#FFFFFF] text-base font-semibold">
            <GoPlus strokeWidth={1} className="text-xl" /> Add Friend
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center pb-10">
            <div className="flex flex-col gap-2 w-65 justify-center items-center text-center p-8 rounded-lg bg-[#FFFFFF]">
                <h4 className="text-[#244D3F] font-semibold text-[32px]">10</h4>
                <p className="text-[#64748B] text-lg">Total Friends</p>
            </div>
            <div className="flex flex-col gap-2 w-65 justify-center items-center text-center p-8 rounded-lg bg-[#FFFFFF]">
                <h4 className="text-[#244D3F] font-semibold text-[32px]">3</h4>
                <p className="text-[#64748B] text-lg">On Track</p>
            </div>
            <div className="flex flex-col gap-2 w-65 justify-center items-center text-center p-8 rounded-lg bg-[#FFFFFF]">
                <h4 className="text-[#244D3F] font-semibold text-[32px]">6</h4>
                <p className="text-[#64748B] text-lg">Need Attention</p>
            </div>
            <div className="flex flex-col gap-2 w-65 justify-center items-center text-center p-8 rounded-lg bg-[#FFFFFF]">
                <h4 className="text-[#244D3F] font-semibold text-[32px]">12</h4>
                <p className="text-[#64748B] text-lg">Interactions This Month</p>
            </div>
        </div>

        <div className="border-t border-[#E9E9E9] pb-10"></div>

      </div>
    </div>
  );
};

export default Banner;
