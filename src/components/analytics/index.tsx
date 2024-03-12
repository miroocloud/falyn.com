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
const cf_proxy = "/anally/cf_insights/b.js";
export function CloudflareAnalytics({
  token,
  useProxy = true,
}: {
  token: string;
  useProxy?: boolean;
}) {
  return (
    <Script
      async
      strategy="afterInteractive"
      src={useProxy ? cf_proxy : cf_url}
      data-cf-beacon={`{"token": ${token}}`}
    />
  );
}
