// Builds the two resume downloads in public/:
//   james-sheldon-resume.docx  from lib/resume.ts (Log design, fonts embedded)
//   james-sheldon-resume.pdf   from docs/resume/fullstack.html, printed by Chrome
// Run from apps/web: `pnpm resume:build` (the PDF needs Google Chrome, or pass --chrome=<path>).
// Word styling mirrors the job-search workspace's brand/_build/build-resume-docx.js (Log design).
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  AlignmentType,
  BorderStyle,
  CharacterSet,
  Document,
  LevelFormat,
  Packer,
  Paragraph,
  TabStopType,
  TextRun,
} from "docx";
import { resume } from "../lib/resume.ts";

const here = path.dirname(fileURLToPath(import.meta.url));
const web = path.join(here, "..");
const out = path.join(web, "public");
const fontDir = path.join(here, "fonts");

const F = {
  reg: "Atkinson Hyperlegible Next",
  semi: "Atkinson Hyperlegible Next SemiBold",
  light: "Atkinson Hyperlegible Next Light",
  mono: "Atkinson Hyperlegible Mono",
  monoMed: "Atkinson Hyperlegible Mono Medium",
};
const font = (name, file) => ({
  name,
  data: fs.readFileSync(path.join(fontDir, file)),
  characterSet: CharacterSet.ANSI,
});
const fonts = [
  font(F.reg, "AtkinsonHyperlegibleNext-Regular.ttf"),
  font(F.semi, "AtkinsonHyperlegibleNext-SemiBold.ttf"),
  font(F.light, "AtkinsonHyperlegibleNext-Light.ttf"),
  font(F.mono, "AtkinsonHyperlegibleMono-Regular.ttf"),
  font(F.monoMed, "AtkinsonHyperlegibleMono-Medium.ttf"),
];

const W = 9792; // text width in DXA (6.8in)
const INK = "141722", GREY = "454B5C", MUTED = "596073", COPY = "2A2F3C";
const TEAL = "0F6E66", RAIL = "CFE6E3";
const IND = 400; // body indent so the rail sits in the margin
const railBorder = { left: { style: BorderStyle.SINGLE, size: 8, color: RAIL, space: 14 } };

const r = (text, o = {}) =>
  new TextRun({
    text,
    font: o.font ?? F.reg,
    size: o.size ?? 19,
    color: o.color ?? INK,
    allCaps: o.caps,
    characterSpacing: o.sp,
  });
const P = (opts) => new Paragraph({ border: railBorder, indent: { left: IND }, ...opts });
const sec = (t) =>
  P({
    children: [r(t, { font: F.semi, size: 16, color: TEAL, caps: true, sp: 10 })],
    spacing: { before: 320, after: 120 },
    keepNext: true,
  });

function buildDocx() {
  const c = resume.contact;
  const kids = [
    new Paragraph({
      children: [
        new TextRun({ text: `${resume.name.first} `, font: F.light, size: 66, color: INK }),
        new TextRun({ text: resume.name.last, font: F.semi, size: 66, color: INK }),
      ],
      spacing: { after: 100 },
    }),
    new Paragraph({ children: [r(resume.headline, { size: 20, color: GREY })], spacing: { after: 80 } }),
    // Two lines: one line of Atkinson Mono is wider than the text block.
    new Paragraph({
      children: [
        r([c.location, c.email, c.site].join(" · "), { font: F.mono, size: 14, color: MUTED }),
        new TextRun({ text: [c.linkedin, c.github].join(" · "), break: 1, font: F.mono, size: 14, color: MUTED }),
      ],
      spacing: { after: 120 },
    }),
    sec("Summary"),
    P({ children: [r(resume.summary, { color: COPY })], spacing: { line: 276 } }),
    sec("Skills"),
  ];
  for (const s of resume.skills) {
    kids.push(
      P({ children: [r(s.label, { font: F.semi, size: 18 })], spacing: { after: 10 }, keepNext: true }),
      P({ children: [r(s.items, { size: 18, color: COPY })], spacing: { after: 100 } }),
    );
  }
  kids.push(sec("Experience"));
  resume.experience.forEach((ro, i) => {
    kids.push(
      P({
        children: [
          r(ro.company, { font: F.semi, size: 22 }),
          new TextRun({ text: "\t" }),
          r(ro.dates, { font: F.mono, size: 16, color: MUTED }),
        ],
        tabStops: [{ type: TabStopType.RIGHT, position: W - IND }],
        spacing: { before: i ? 240 : 40, after: 20 },
        keepNext: true,
      }),
      P({ children: [r(`${ro.title} · ${ro.location}`, { color: GREY })], spacing: { after: 100 }, keepNext: true }),
      ...ro.bullets.map(
        (b) =>
          new Paragraph({
            numbering: { reference: "rail", level: 0 },
            border: railBorder,
            children: [r(b, { size: 18, color: "23283A" })],
            spacing: { after: 70, line: 264 },
            keepLines: true,
          }),
      ),
    );
  });
  kids.push(sec("Earlier experience"));
  for (const e of resume.earlier) {
    kids.push(
      P({
        children: [r(e.company, { font: F.semi, size: 18 }), r(` · ${e.title}. ${e.summary}`, { size: 18, color: COPY })],
        spacing: { after: 70 },
      }),
    );
  }
  kids.push(
    sec("Education"),
    P({ children: [r(resume.education.school, { font: F.semi, size: 18 })], spacing: { after: 10 }, keepNext: true }),
    P({ children: [r(resume.education.detail, { size: 18, color: COPY })], spacing: { after: 100 } }),
    P({ children: [r(`Recommendations: ${resume.recommendations}`, { size: 18, color: COPY })] }),
  );

  return new Document({
    creator: "James Sheldon",
    title: "James Sheldon – Resume",
    fonts,
    numbering: {
      config: [
        {
          reference: "rail",
          levels: [
            {
              level: 0,
              format: LevelFormat.BULLET,
              text: "+",
              alignment: AlignmentType.LEFT,
              style: {
                paragraph: { indent: { left: IND + 360, hanging: 240 } },
                run: { color: TEAL, font: F.monoMed },
              },
            },
          ],
        },
      ],
    },
    styles: { default: { document: { run: { font: F.reg, size: 19, color: INK } } } },
    sections: [
      {
        properties: {
          page: { size: { width: 12240, height: 15840 }, margin: { top: 900, bottom: 860, left: 1224, right: 1224 } },
        },
        children: kids,
      },
    ],
  });
}

async function buildPdf() {
  const { chromium } = await import("playwright-core");
  const flag = process.argv.find((a) => a.startsWith("--chrome="));
  const executablePath = flag
    ? flag.slice("--chrome=".length)
    : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
  const browser = await chromium.launch({ executablePath });
  const page = await browser.newPage();
  const src = path.join(web, "..", "..", "docs", "resume", "fullstack.html");
  await page.goto(pathToFileURL(src).href, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({
    path: path.join(out, "james-sheldon-resume.pdf"),
    preferCSSPageSize: true,
    printBackground: true,
    tagged: true,
  });
  await browser.close();
}

fs.writeFileSync(path.join(out, "james-sheldon-resume.docx"), await Packer.toBuffer(buildDocx()));
console.log("wrote public/james-sheldon-resume.docx");
if (!process.argv.includes("--docx-only")) {
  await buildPdf();
  console.log("wrote public/james-sheldon-resume.pdf");
}
