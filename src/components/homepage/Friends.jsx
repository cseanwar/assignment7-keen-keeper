import { use } from "react";
import FriendsCard from "../ui/FriendsCard";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const Friends = () => {
  const friends = use(friendsPromise);
  // console.log(friends, "friends");
  return (
    <div className="bg-[#F8FAFC]">
      <div className="w-9/12 mx-auto pb-20">
        <h2 className="font-semibold text-2xl pb-4">Your Friends</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {friends.map((friend, ind) => {
            return (
              <FriendsCard key={ind} friend={friend}/>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Friends;
