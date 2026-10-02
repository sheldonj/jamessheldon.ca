import Link from "next/link";
import { site } from "../lib/site";

// Shared header: the name lockup (links home), role line and mono contact block.
export function SiteHeader() {
  return (
    <header className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
      <div>
        <Link
          href="/"
          className="inline-block rounded-md text-[44px] leading-none font-light tracking-[-.025em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:text-[56px]"
        >
          James <b className="font-semibold">Sheldon</b>
        </Link>
        <p className="mt-3 max-w-[46ch] text-muted-foreground">{site.role}</p>
      </div>
      <address className="font-mono text-[13px] leading-6 text-muted-foreground not-italic sm:text-right">
        {site.location}
        <br />
        <a href={`mailto:${site.email}`} className="inline-block hover:text-primary">
          {site.email}
        </a>
        <br />
        <a href={`https://${site.linkedin}`} className="inline-block hover:text-primary">
          {site.linkedin}
        </a>
        <br />
        <a href={`https://${site.github}`} className="inline-block hover:text-primary">
          {site.github}
        </a>
      </address>
    </header>
  );
}
