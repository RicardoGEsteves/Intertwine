import { Hash } from "lucide-react";

import MobileToggle from "../mobile-toggle";
import UserAvatar from "../user-avatar";
// import { SocketIndicator } from "@/components/socket-indicator";

// import { ChatVideoButton } from "./chat-video-button";

interface ChatHeaderProps {
  serverId: string;
  name: string;
  type: "channel" | "conversation";
  imageUrl?: string;
}

//TODO: change colors
const ChatHeader = ({ serverId, name, type, imageUrl }: ChatHeaderProps) => {
  return (
    <div className="text-md font-semibold px-3 flex items-center h-12 border-gray-300/40 dark:border-secondary border-b-2">
      <MobileToggle serverId={serverId} />
      {type === "channel" && <Hash className="w-5 h-5 text-gray-400 mr-2" />}
      {type === "conversation" && (
        <UserAvatar src={imageUrl} className="h-8 w-8 md:h-8 md:w-8 mr-2" />
      )}
      <p className="font-semibold text-md text-primary">{name}</p>
      <div className="ml-auto flex items-center">
        {/* {type === "conversation" && <ChatVideoButton />} */}
        {/* <SocketIndicator /> */}
      </div>
    </div>
  );
};

export default ChatHeader;
