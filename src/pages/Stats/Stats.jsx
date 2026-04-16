import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendContext } from "../../context/FriendContext";

const Stats = () => {
  const { interactions } = useContext(FriendContext);

  const data = [
    {
      name: "Call",
      value: interactions.filter((inter) => inter.type === "call").length,
      fill: "#244D3F",
    },
    {
      name: "Text",
      value: interactions.filter((inter) => inter.type === "text").length,
      fill: "#7E35E1",
    },
    {
      name: "Video",
      value: interactions.filter((inter) => inter.type === "video").length,
      fill: "#37A163",
    },
  ].filter((entry) => entry.value > 0);

  const hasData = data.length > 0;

  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto py-10 md:py-14 lg:py-20">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#1F2937] mb-6">
          Friendship Analytics
        </h2>
        <div className="bg-[#FFFFFF] p-5 md:p-6 lg:p-8 rounded-lg shadow-sm">
          <span className="text-[#244D3F] text-base md:text-lg lg:text-xl font-medium">
            By Interaction Type
          </span>

          {!hasData ? (
            <p className="text-center text-[#64748B] font-bold text-base md:text-lg lg:text-2xl my-8 md:my-10">
              No interactions yet. Start calling, texting or video calling your
              friends!
            </p>
          ) : (
            <PieChart
              style={{
                width: "100%",
                maxWidth: "500px",
                maxHeight: "80vh",
                margin: "auto",
                paddingTop: "50px",
                paddingBottom: "30px",
                aspectRatio: 1,
              }}
              responsive
            >
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                cornerRadius="50%"
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={true}
              />
              <Legend />
              <Tooltip />
            </PieChart>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stats;