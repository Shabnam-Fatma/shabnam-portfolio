import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-white px-3 py-1.5 font-mono text-[12px] font-medium text-ink-soft",
        className
      )}
      {...props}
    />
  );
}
export { Badge };
