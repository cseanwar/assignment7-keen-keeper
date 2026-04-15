import { Link } from "react-router";

const FriendsCard = ({ friend }) => {
  return (
    <Link to={`/friendDetails/${friend.id}`} className="card bg-[#FFFFFF] w-65 rounded-lg shadow-sm p-6">
      <figure className="pb-3">
        <img
          src={friend.picture}
          alt={`${friend.picture} picture`}
          className="rounded-full w-20 h-20 object-cover"
        />
      </figure>
      <div className="flex flex-col justify-center items-center text-center gap-2 pb-2">
        <h2 className="card-title font-semibold text-xl">{friend.name}</h2>
        <p className="text-xs text-[#64748B]">{friend.days_since_contact}d ago</p>
      </div>
      <div className="flex gap-2 justify-center items-center pb-2">
        {friend.tags.map((tag, ind) => (
          <div key={ind} className="badge bg-[#CBFADB] rounded-full uppercase text-xs">
             {tag}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center">
        {friend.status && (
          <div
            className={`badge rounded-full p-2 text-xs
                                        ${friend.status === "overdue" ? "bg-[#EF4444] text-[#FFFFFF]" : ""}
                                        ${friend.status === "on-track" ? "bg-[#244D3F] text-[#FFFFFF]" : ""}
                                        ${friend.status === "almost due" ? "bg-[#EFAD44] text-[#FFFFFF]" : ""}
                                    `}
          >
            {friend.status === "overdue" && "Overdue"}
            {friend.status === "on-track" && "on-Track"}
            {friend.status === "almost due" && "Almost Due"}
          </div>
        )}
      </div>
    </Link>
  );
};

export default FriendsCard;
