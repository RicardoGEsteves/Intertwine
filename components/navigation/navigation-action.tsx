"use client";

import { Plus } from "lucide-react";
import { Button } from "../ui/button";

import ActionTooltip from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

const NavigationAction = () => {
  const { onOpen } = useModal();
  return (
    <>
      <ActionTooltip side="right" align="center" label="Create Server">
        <Button
          onClick={() => onOpen("createServer")}
          variant="outline"
          size="icon"
          className="flex mx-3 rounded-full overflow-hidden hover:bg-gray-400/20 dark:hover:bg-secondary"
        >
          <Plus className="h-5 w-5" size={25} />
        </Button>
      </ActionTooltip>
    </>
  );
};

export default NavigationAction;
