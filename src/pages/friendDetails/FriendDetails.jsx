import { FaRegTrashAlt } from "react-icons/fa";
import { FiArchive } from "react-icons/fi";
import { PiBellSimpleZBold } from "react-icons/pi";
import { useLoaderData, useParams } from "react-router";
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";

const FriendDetails = () => {
  const { id } = useParams();
  //   console.log(id, "id");

  const friends = useLoaderData();
  //   console.log(friends, "friends");

  const expectedFriend = friends.find((friend) => friend.id === Number(id));
  console.log(expectedFriend, "expectedFriend");

  const nextDue = new Date(expectedFriend.next_due_date).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    },
  );

  return (
    <div className="bg-[#F8FAFC] py-20">
      <div className="w-9/12 mx-auto flex gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-4 w-87.5">
          {/* Profile card */}
          <div className="bg-[#FFFFFF] rounded-lg shadow-md p-6 flex flex-col items-center gap-2 text-center">
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
              "{expectedFriend.bio.slice(0, 60)}…"
            </p>
            <p className="text-sm text-[#64748B]">Preferred: email</p>
          </div>

          <div className="flex justify-center items-center gap-2 py-3 rounded-sm border border-[#E9E9E9] bg-[#FFFFFF] cursor-pointer">
            <PiBellSimpleZBold />
            Snooze 2 weeks
          </div>
          <div className="flex justify-center items-center gap-2 py-3 rounded-sm border border-[#E9E9E9] bg-[#FFFFFF] cursor-pointer">
            <FiArchive />
            Archive
          </div>
          <div className="flex justify-center items-center gap-2 py-3 rounded-sm border border-[#E9E9E9] bg-[#FFFFFF] text-[#EF4444] cursor-pointer">
            <FaRegTrashAlt />
            Delete
          </div>
        </div>
        {/* ← end left column */}

        {/* Right column */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-[#FFFFFF] rounded-lg shadow-md p-8 flex flex-col gap-2 text-center">
              <p className="text-3xl font-semibold text-[#244D3F]">
                {expectedFriend.days_since_contact}
              </p>
              <p className="text-lg text-[#64748B]">Days since contact</p>
            </div>
            <div className="bg-[#FFFFFF] rounded-lg shadow-md p-8 flex flex-col gap-2 text-center">
              <p className="text-3xl font-semibold text-[#244D3F]">
                {expectedFriend.goal}
              </p>
              <p className="text-lg text-[#64748B]">Goal (days)</p>
            </div>
            <div className="bg-[#FFFFFF] rounded-lg shadow-md px-4 py-8 flex flex-col gap-2 text-center">
              <p className="text-3xl font-semibold text-[#244D3F]">{nextDue}</p>
              <p className="text-lg text-[#64748B]">Next due</p>
            </div>
          </div>

          <div className="bg-[#FFFFFF] rounded-lg shadow-md p-6 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <p className="text-xl text-[#244D3F]">
                Relationship goal
              </p>
              <button className="btn bg-[#F8FAFC] text-sm text-[#1F2937]">
                Edit
              </button>
            </div>
            <p className="text-lg text-[#64748B]">
              Connect every{" "}
              <span className="font-bold text-lg text-[#1F2937]">
                {expectedFriend.goal} days
              </span>
            </p>
          </div>

          <div className="bg-[#FFFFFF] rounded-lg shadow-md p-6">
            <p className="text-xl text-[#244D3F] mb-5">
              Quick check-in
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#F8FAFC] rounded-lg flex flex-col gap-2 justify-center items-center py-4">
                <img className="w-8 h-8" src={callImg} alt="Call icon" />
                <p className="text-lg">Call</p>
              </div>
              <div className="bg-[#F8FAFC] rounded-lg flex flex-col gap-2 justify-center items-center py-4">
                <img className="w-8 h-8" src={textImg} alt="Text icon" />
                <p className="text-lg">Text</p>
              </div>
              <div className="bg-[#F8FAFC] rounded-lg flex flex-col gap-2 justify-center items-center py-4">
                <img className="w-8 h-8" src={videoImg} alt="Video icon" />
                <p className="text-lg">Video</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails;
