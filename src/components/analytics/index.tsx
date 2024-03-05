"use client";
import Script from "next/script";

// Umami Analytics
export function UmamiAnalytics({ url, website_id }: { url: string; website_id: string }) {
  return (
    <Script
      async
      defer
      strategy="afterInteractive"
      src={url}
      data-website-id={website_id}
      data-do-not-track="true"
    />
  );
}

// Cloudflare Analytics
const cf_url = "https://static.cloudflareinsights.com/beacon.min.js";
export function CloudflareAnalytics({ url = cf_url, token }: { url: string; token: string }) {
  return (
    <Script async strategy="afterInteractive" src={url} data-cf-beacon={`{"token": ${token}}`} />
  );
}
