"use client";

import { ChannelType, MemberRole } from "@prisma/client";
import { Plus, Settings } from "lucide-react";

import { ServerWithMembersWithProfiles } from "@/types";
import ActionTooltip from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

interface ServerSectionProps {
  label: string;
  role?: MemberRole;
  sectionType: "channels" | "members";
  server?: ServerWithMembersWithProfiles;
  channelType?: ChannelType;
}

const ServerSection = ({
  label,
  role,
  sectionType,
  server,
  channelType,
}: ServerSectionProps) => {
  const { onOpen } = useModal();

  return (
    <div className="flex items-center justify-between py-2">
      <p className="text-xs uppercase font-semibold text-gray-400">{label}</p>
      {role !== MemberRole.GUEST && sectionType === "channels" && (
        <ActionTooltip label="Create Channel" side="top">
          <button
            onClick={() => onOpen("createChannel", { channelType })}
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition"
          >
            <Plus className="h-4 w-4" />
          </button>
        </ActionTooltip>
      )}
      {role === MemberRole.ADMIN && sectionType === "members" && (
        <ActionTooltip label="Manage Members" side="top">
          <button
            onClick={() => onOpen("members", { server })}
            className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition"
          >
            <Settings className="h-4 w-4" />
          </button>
        </ActionTooltip>
      )}
    </div>
  );
};

export default ServerSection;
