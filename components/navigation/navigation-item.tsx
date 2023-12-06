"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import ActionTooltip from "../action-tooltip";
import { Button } from "../ui/button";

interface NavigationItemProps {
  id: string;
  imageUrl: string;
  name: string;
}

const NavigationItem = ({ id, imageUrl, name }: NavigationItemProps) => {
  const params = useParams();
  const router = useRouter();

  const handleClick = () => {
    router.push(`/servers/${id}`);
  };

  return (
    <ActionTooltip side="right" align="center" label={name}>
      <div className="group relative flex items-center">
        <Button
          variant="outline"
          size="icon"
          className=" rounded-full ml-4 overflow-hidden"
          onClick={handleClick}
        >
          <div
            className={cn(
              "absolute left-0 bg-primary rounded-r-full transition-all w-[4px]",
              params?.serverId !== id && "group-hover:h-[20px]",
              params?.serverId === id ? "h-[36px]" : "h-[8px]"
            )}
          />
          <div
            className={cn(
              "relative group flex my-2  h-full w-full rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden",
              params?.serverId === id &&
                "bg-primary/5 text-primary rounded-[16px]"
            )}
          >
            <Image fill src={imageUrl} alt="Server Image" />
          </div>
        </Button>
      </div>
    </ActionTooltip>
  );
};

export default NavigationItem;
