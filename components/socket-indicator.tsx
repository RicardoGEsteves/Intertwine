"use client";

import { useSocket } from "@/components/providers/socket-provider";
import { Badge } from "@/components/ui/badge";

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <>
        <Badge
          variant="outline"
          className="bg-yellow-500/90 text-primary border-none"
        >
          Fallback:
        </Badge>
        <span className="text-xs ml-1">Polling every 1s</span>
      </>
    );
  }

  return (
    <>
      <Badge
        variant="outline"
        className="bg-emerald-500 text-primary border-none"
      >
        Live:
      </Badge>
      <span className="text-xs ml-1">Real-time updates</span>
    </>
  );
};
