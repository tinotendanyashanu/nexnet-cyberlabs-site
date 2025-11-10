/* eslint-disable */
import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage(req: NextRequest) {
  const { pathname, searchParams } = new URL(req.url);
  const title = searchParams.get("title") || pathTitle(pathname) || "NexNet CyberLabs";
  // NOTE: We intentionally use inline styles because Next.js OG Image rendering environment does not process external CSS.
  // eslint-disable-next-line react/no-unknown-property
  return new ImageResponse(
    <div
      style={Object.assign({
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0B132B 0%, #1C2541 50%, #0B132B 100%)',
        color: '#E6F7F5',
        fontSize: 64,
        fontWeight: 700,
        position: 'relative'
      })}
    >
      <div style={{ position: 'absolute', top: 40, left: 60, fontSize: 28, opacity: 0.8 }}>NexNet CyberLabs</div>
      <div style={{ maxWidth: 1000, textAlign: 'center', lineHeight: 1.2 }}>{title}</div>
      <div style={{ position: 'absolute', bottom: 40, right: 60, fontSize: 24, opacity: 0.7 }}>nexnet.example</div>
    </div>,
    { width: size.width, height: size.height }
  );
}

function pathTitle(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return "Cybersecurity you can trust";
  return parts.map(p => p.replace(/-/g, " ")).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" • ");
}
