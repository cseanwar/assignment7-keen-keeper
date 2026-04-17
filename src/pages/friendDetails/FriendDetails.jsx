import { FaRegTrashAlt } from "react-icons/fa";
import { FiArchive } from "react-icons/fi";
import { PiBellSimpleZBold } from "react-icons/pi";
import { useLoaderData, useParams } from "react-router";
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";
import { useContext } from "react";
import { FriendContext } from "../../context/FriendContext";

const FriendDetails = () => {
  const { id } = useParams();
  //   console.log(id, "id");

  const friends = useLoaderData();
  //   console.log(friends, "friends");

  const expectedFriend = friends.find((friend) => friend.id === Number(id));
  // console.log(expectedFriend, "expectedFriend");

  const nextDue = new Date(expectedFriend.next_due_date).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  );

  const {handleCall, handleText, handleVideo} = useContext(FriendContext);
  // console.log(handleCall, "friendContext");

  return (
    <div className="bg-[#F8FAFC] py-10 lg:py-20">
      <div className="w-11/12 lg:w-9/12 mx-auto flex flex-col lg:flex-row gap-6">
        
        <div className="flex flex-col w-full lg:w-87.5 shrink-0">
          {/* Profile card */}
          <div className="bg-[#FFFFFF] rounded-lg shadow-md p-6 flex flex-col items-center gap-2 text-center mb-4">
            <img
              src={expectedFriend.picture}
              alt={expectedFriend.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <p className="font-semibold text-xl text-[#1F2937]">
              {expectedFriend.name}
            </p>
            {expectedFriend.status && (
              <div
                className={`badge rounded-full p-2 text-xs
                  ${expectedFriend.status === "overdue" ? "bg-[#EF4444] text-[#FFFFFF]" : ""}
                  ${expectedFriend.status === "on-track" ? "bg-[#244D3F] text-[#FFFFFF]" : ""}
                  ${expectedFriend.status === "almost due" ? "bg-[#EFAD44] text-[#FFFFFF]" : ""}
                `}
              >
                {expectedFriend.status === "overdue" && "Overdue"}
                {expectedFriend.status === "on-track" && "on-Track"}
                {expectedFriend.status === "almost due" && "Almost Due"}
              </div>
            )}
            <div className="flex gap-2">
              {expectedFriend.tags.map((tag, ind) => (
                <div
                  key={ind}
                  className="badge bg-[#CBFADB] rounded-full uppercase text-xs mb-1"
                >
                  {tag}
                </div>
              ))}
            </div>
            <p className="text-base text-[#64748B] italic mb-1">
              "{expectedFriend.bio}"
            </p>
            <p className="text-sm text-[#64748B]">Preferred: email</p>
          </div>

          <div className="flex justify-center items-center gap-2 py-3 rounded-sm border border-[#E9E9E9] bg-[#FFFFFF] cursor-pointer">
            <PiBellSimpleZBold />
            Snooze 2 weeks
          </div>
          <div className="flex justify-center items-center gap-2 py-3 rounded-sm border border-[#E9E9E9] bg-[#FFFFFF] cursor-pointer my-2">
            <FiArchive />
            Archive
          </div>
          <div className="flex justify-center items-center gap-2 py-3 rounded-sm border border-[#E9E9E9] bg-[#FFFFFF] text-[#EF4444] cursor-pointer">
            <FaRegTrashAlt />
            Delete
          </div>
        </div>
        
        <div className="flex flex-col gap-6 flex-1">
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="bg-[#FFFFFF] rounded-lg shadow-md p-6 lg:p-8 flex flex-col gap-2 text-center">
              <p className="text-2xl lg:text-3xl font-semibold text-[#244D3F]">
                {expectedFriend.days_since_contact}
              </p>
              <p className="text-sm lg:text-lg text-[#64748B]">Days since contact</p>
            </div>
            <div className="bg-[#FFFFFF] rounded-lg shadow-md p-6 lg:p-8 flex flex-col gap-2 text-center">
              <p className="text-2xl lg:text-3xl font-semibold text-[#244D3F]">
                {expectedFriend.goal}
              </p>
              <p className="text-sm lg:text-lg text-[#64748B]">Goal (days)</p>
            </div>
            <div className="bg-[#FFFFFF] rounded-lg shadow-md p-6 lg:px-5 lg:py-8 flex flex-col gap-2 text-center col-span-2 lg:col-span-1">
              <p className="text-xl lg:text-3xl font-semibold text-[#244D3F]">{nextDue}</p>
              <p className="text-sm lg:text-lg text-[#64748B]">Next due</p>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded-lg shadow-md p-5 lg:p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg lg:text-xl text-[#244D3F]">Relationship goal</p>
              <button className="btn bg-[#F8FAFC] text-sm text-[#1F2937]">
                Edit
              </button>
            </div>
            <p className="text-base lg:text-lg text-[#64748B]">
              Connect every{" "}
              <span className="font-bold text-[#1F2937]">
                {expectedFriend.goal} days
              </span>
            </p>
          </div>

          <div className="bg-[#FFFFFF] rounded-lg shadow-md p-5 lg:p-6">
            <p className="text-lg lg:text-xl text-[#244D3F] mb-5">Quick check-in</p>
            <div className="grid grid-cols-3 gap-3 lg:gap-4">
              <button
                onClick={() => handleCall(expectedFriend)}
                className="bg-[#F8FAFC] rounded-lg flex flex-col gap-2 justify-center items-center py-4 cursor-pointer"
              >
                <img className="w-6 h-6 lg:w-8 lg:h-8" src={callImg} alt="Call icon" />
                <p className="text-base lg:text-lg">Call</p>
              </button>
              <button
                onClick={() => handleText(expectedFriend)}
                className="bg-[#F8FAFC] rounded-lg flex flex-col gap-2 justify-center items-center py-4 cursor-pointer"
              >
                <img className="w-6 h-6 lg:w-8 lg:h-8" src={textImg} alt="Text icon" />
                <p className="text-base lg:text-lg">Text</p>
              </button>
              <button
                onClick={() => handleVideo(expectedFriend)}
                className="bg-[#F8FAFC] rounded-lg flex flex-col gap-2 justify-center items-center py-4 cursor-pointer"
              >
                <img className="w-6 h-6 lg:w-8 lg:h-8" src={videoImg} alt="Video icon" />
                <p className="text-base lg:text-lg">Video</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
