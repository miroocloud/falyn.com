// eslint-disable-next-line no-restricted-imports
import Link from "next/link";
import type { ComponentProps, ReactElement } from "react";
import { forwardRef } from "react";

type AnchorProps = Omit<ComponentProps<"a">, "ref"> & {
  newWindow?: boolean;
  rel?: "nofollow" | "author" | "me" | "sponsored" | "ugc";
};

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(function (
  { href, children, newWindow, rel, ...props },
  forwardedRef
): ReactElement {
  return (
    <Link
      ref={forwardedRef}
      href={href ? href : "/"}
      target={newWindow ? "_blank" : undefined}
      rel={rel === "nofollow" ? "noopener noreferrer" : rel || undefined}
      {...props}>
      {children}
    </Link>
  );
});

Anchor.displayName = "Anchor";
export default Anchor;
