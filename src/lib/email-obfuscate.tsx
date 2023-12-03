import React, {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  useState,
  useRef,
} from "react";
import Anchor from "@achor";
import { randomBytes, createHash } from "crypto";

export default function EmailObfuscate() {
  const email = "farid@fayln.com";

  return (
    <>
      <div></div>
    </>
  );
}

function ObfuscateInner(content: string) {
  const hash = createHash("sha256").update(content).digest("hex");
  const reversed = content.split("").reverse();
  reversed.forEach((char) => {
    return (
      <>
        <span style={{ display: "none" }}>{hash}</span>
        <span>{char}</span>
      </>
    );
  });
}
