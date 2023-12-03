import * as React from "react";
import { cn } from "@utils";

const RequiredIndicator = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span ref={ref} className={cn("text-red-500", className)} {...props}>
    *
  </span>
));

RequiredIndicator.displayName = "RequiredIndicator";
export { RequiredIndicator };
