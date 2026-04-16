import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([]);

  const addActions = (type, friend) => {
    setInteractions([
        {
            id: Date.now(),
            type,
            friendId: friend.id,
            friendName: friend.name,
            date: new Date(),
        },
        ...interactions,
    ]);
    toast.success(`You have ${type === "call" ? "called" : type === "text" ? "texted" : "video called"} to ${friend.name}`);
  };

  const handleCall = (friend) => addActions("call", friend)
  const handleText = (friend) => addActions("text", friend)
  const handleVideo = (friend) => addActions("video", friend)

  const data = {
    interactions,
    handleCall,
    handleText,
    handleVideo,
  };

  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
