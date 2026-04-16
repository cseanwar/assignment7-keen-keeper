import { use } from "react";
import FriendsCard from "../ui/FriendsCard";
import Banner from "./Banner";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

const Friends = () => {
  const friends = use(friendsPromise);
  // console.log(friends, "friends");
  return (
    <div className="bg-[#F8FAFC]">
      <Banner friends={friends}/>
      <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto pt-8 md:pt-10 pb-16 md:pb-20">
        <h2 className="font-semibold text-xl md:text-2xl pb-4">Your Friends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 justify-items-center">
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
