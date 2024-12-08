"use client";
import { useAuth } from "@/hooks/useAuth";
import { useEffect, useRef, useState } from "react";
import UserCard from "./UserCard";

const UserLinks = () => {
  const [showCard, setShowCard] = useState(false);

  const { user } = useAuth();
  const cardRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      cardRef.current &&
      !cardRef.current.contains(event.target as Node) && // Click is outside the card
      btnRef.current &&
      !btnRef.current.contains(event.target as Node) // Click is outside the button
    ) {
      setShowCard(false); // Close the UserCard
    }
  };

 

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  if (!user) return null;

  return (
    <div className="relative">
      {showCard && (
        <UserCard linkRef={linkRef} ref={cardRef} user={user} click={()=>setShowCard(false)} />
      )}
      <button
        ref={btnRef}
        onClick={(e) => {
          e.stopPropagation();
          setShowCard(!showCard);
        }}
        className="w-[40px] h-[40px] text-sm text-blue-500 font-medium hover:border-blue-200 rounded-full border-2 flex justify-center items-center"
      >
        {user.user_metadata.avatar_url ? (
          <img
            src={user.user_metadata.avatar_url}
            alt={user.user_metadata.avatar_url}
            className="w-full h-full rounded-full"
          />
        ) : (
          <>
            {user.user_metadata.name?.split(" ")[0].charAt(0).toUpperCase() +
              user.user_metadata.name?.split(" ")[1].charAt(0).toUpperCase()}
          </>
        )}
      </button>
    </div>
  );
};

export default UserLinks;
