// Menu and close icons for the header and the menu sheet. The menu icon is two
// lines with the design system's teal diamond at the end of the shorter one.
export function MenuIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none">
      <path d="M4 8.5h16M4 15.5h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <rect x="17.25" y="13.75" width="3.5" height="3.5" transform="rotate(45 19 15.5)" className="fill-primary" />
    </svg>
  );
}

export function CloseIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="size-5" fill="none">
      <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}
