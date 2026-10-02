import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Design system SocialCard: rail and one diamond on the left, mono eyebrow,
// display headline, name lockup and URL in the footer. 1200x630, light ground.
export const alt = "James Sheldon, full-stack engineer and founding CTO";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const font = (file: string) => readFile(join(process.cwd(), "app/_og", file));

export default async function Image() {
  const [light, semibold, mono, monoSemibold] = await Promise.all([
    font("AtkinsonNext-Light.ttf"),
    font("AtkinsonNext-SemiBold.ttf"),
    font("AtkinsonMono-Regular.ttf"),
    font("AtkinsonMono-SemiBold.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#ffffff",
          color: "#141722",
          fontFamily: "Atkinson",
        }}
      >
        {/* Rail: line at 1/24 of the width with one diamond aligned to the eyebrow */}
        <div
          style={{
            position: "absolute",
            left: 50,
            top: 0,
            bottom: 0,
            width: 3,
            background: "#cfe6e3",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 43,
            top: 105,
            width: 17,
            height: 17,
            background: "#0f6e66",
            transform: "rotate(45deg)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flex: 1,
            padding: "96px 64px 64px 112px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div
              style={{
                fontFamily: "Atkinson Mono",
                fontSize: 24,
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: "#0f6e66",
              }}
            >
              Now
            </div>
            <div
              style={{
                fontSize: 80,
                fontWeight: 600,
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                maxWidth: 900,
              }}
            >
              Full-stack engineer and founding CTO
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 44,
                letterSpacing: "-0.025em",
              }}
            >
              <span style={{ fontWeight: 300 }}>James&nbsp;</span>
              <span style={{ fontWeight: 600 }}>Sheldon</span>
            </div>
            <div
              style={{
                fontFamily: "Atkinson Mono",
                fontSize: 26,
                fontWeight: 400,
                color: "#596073",
              }}
            >
              jamessheldon.ca
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Atkinson", data: light, weight: 300, style: "normal" },
        { name: "Atkinson", data: semibold, weight: 600, style: "normal" },
        { name: "Atkinson Mono", data: mono, weight: 400, style: "normal" },
        { name: "Atkinson Mono", data: monoSemibold, weight: 600, style: "normal" },
      ],
    },
  );
}
