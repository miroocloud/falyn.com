// eslint-disable-next-line no-restricted-imports
import Link from "next/link";
import type { ComponentProps, ReactElement } from "react";
import { forwardRef } from "react";

type AnchorProps = Omit<ComponentProps<"a">, "ref"> & {
  newWindow?: boolean;
  noFollow?: boolean;
  rel?: string;
};

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(function (
  { href = "/", children, newWindow, noFollow, ...props },
  forwardedRef
): ReactElement {
  if (newWindow)
    return (
      <Link
        ref={forwardedRef}
        href={href}
        rel={noFollow && "noopener noreferrer"}
        target="_blank"
        {...props}
      >
        {children}
      </Link>
    );

  return (
    <Link ref={forwardedRef} href={href} {...props}>
      {children}
    </Link>
  );
});

Anchor.displayName = "Anchor";
export default Anchor;
