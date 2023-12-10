"use client";

import { Member, MemberRole, Profile, Server } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import { ShieldAlert, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";
import UserAvatar from "../user-avatar";

interface ServerMemberProps {
  member: Member & { profile: Profile };
  server: Server;
}

const roleIconMap = {
  [MemberRole.GUEST]: null,
  [MemberRole.MODERATOR]: (
    <ShieldCheck className="h-4 w-4 ml-2 text-green-600" />
  ),
  [MemberRole.ADMIN]: <ShieldAlert className="h-4 w-4 text-blue-600" />,
};

const ServerMember = ({ member, server }: ServerMemberProps) => {
  const params = useParams();
  const router = useRouter();

  const icon = roleIconMap[member.role];

  const onClick = () => {
    router.push(`/servers/${params?.serverId}/conversations/${member.id}`);
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-secondary-foreground/5 dark:hover:bg-secondary transition mb-1",
        params?.memberId === member.id && "bg-gray-700/10 dark:bg-secondary/50"
      )}
    >
      <UserAvatar
        src={member.profile.imageUrl}
        className="h-8 w-8 md:h-8 md:w-8"
      />
      <p
        className={cn(
          "font-semibold text-sm text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 transition",
          params?.memberId === member.id &&
            "text-primary dark:text-gray-200 dark:group-hover:text-white"
        )}
      >
        {member.profile.name}
      </p>
      {icon}
    </button>
  );
};

export default ServerMember;
