import type { Metadata } from "next";
import {
  Atkinson_Hyperlegible_Mono,
  Atkinson_Hyperlegible_Next,
} from "next/font/google";
import { openGraph, twitter } from "../lib/metadata";
import { dotField, site } from "../lib/site";
import { themeScript } from "../lib/theme";
import { DotField } from "./dot-field";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import "./globals.css";

const sans = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  variable: "--font-atkinson",
});
const mono = Atkinson_Hyperlegible_Mono({
  subsets: ["latin"],
  variable: "--font-atkinson-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph,
  twitter,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-svh flex-col">
        {dotField === "page" && <DotField mode="page" />}
        <SiteHeader />
        <div className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 pb-12 sm:px-10 sm:pb-20 print:max-w-none print:p-0">
          <p className="font-mono text-[13px] leading-6 text-muted-foreground">
            {site.location} ·{" "}
            <a href={`mailto:${site.email}`} className="hover:text-primary">
              {site.email}
            </a>
            <span className="hidden print:inline">
              {" "}· {site.linkedin} · {site.github}
            </span>
          </p>
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
