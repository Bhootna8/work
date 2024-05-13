"use client";
import React from "react";
import { Button } from "@/Components/ui/moving-border";
 
export function MovingBorderDemo() {
  return (
    <div>
      <Button
        borderRadius="1rem"
        className="bg-white dark:bg-slate-900 py-1 h-12 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Secure Cloud Platform
      </Button>
    </div>
  );
}