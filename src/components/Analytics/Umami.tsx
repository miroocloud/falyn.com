"use client";
import Script from "next/script";

interface UmamiProps {
  url: string;
  website_id: string;
}

export default function Umami({ url, website_id }: UmamiProps) {
  return (
    <Script
      async
      defer
      src={url}
      data-website-id={website_id}
      data-do-not-track="true"
    />
  );
}
