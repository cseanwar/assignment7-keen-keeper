import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendContext = createContext();

const FriendProvider = ({ children }) => {
  const [actions, setActions] = useState([]);

  const addActions = (type, friend) => {
    const alreadyExists = actions.find(
        (act) => act.friendId === friend.id && act.type === type
    );
    if (alreadyExists) {
        toast.warning(`You have already ${type === "call" ? "called" : type === "text" ? "texted" : "video called"} ${friend.name}`);
        return;
    }
    setActions([
        {
            id: Date.now(),
            type,
            friendId: friend.id,
            friendName: friend.name,
            date: new Date(),
        },
        ...actions,
    ]);
    toast.success(`You have ${type === "call" ? "called" : type === "text" ? "texted" : "video called"} to ${friend.name}`);
  };

  const handleCall = (friend) => addActions("call", friend)
  const handleText = (friend) => addActions("text", friend)
  const handleVideo = (friend) => addActions("video", friend)

  const data = {
    actions,
    handleCall,
    handleText,
    handleVideo,
  };

  return (
    <FriendContext.Provider value={data}>{children}</FriendContext.Provider>
  );
};

export default FriendProvider;
