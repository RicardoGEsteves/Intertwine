"use client";

import { Plus } from "lucide-react";
import { Button } from "../ui/button";

import ActionTooltip from "../action-tooltip";

const NavigationAction = () => {
  return (
    <>
      <ActionTooltip side="right" align="center" label="Create Server">
        <Button
          variant="outline"
          size="icon"
          className="flex mx-3 rounded-full overflow-hidden"
        >
          <Plus className="h-5 w-5" size={25} />
        </Button>
      </ActionTooltip>
    </>
  );
};

export default NavigationAction;
