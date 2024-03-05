// Docs: https://developers.cloudflare.com/images/url-format
interface Transform {
  src: string;
  width: number;
  quality?: number;
  format?: "auto" | "webp" | "avif" | "jpeg" | "json";
}

export default function cloudflareLoader({ src, width, quality = 75, format = "auto" }: Transform) {
  const params = [`width=${width}`, `quality=${quality}`, `format=${format}`];
  return `https://fayln.com/cdn-cgi/image/${params.join(",")}/${src}`;
}
