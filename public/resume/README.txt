Place the real resume PDF in this folder as:

  Ali-Mohamed-Senior-Flutter-Developer.pdf

Then set `resume.available` to `true` in src/data/site.ts.
The Resume buttons (header, hero, contact) stay hidden until that flag is flipped,
so the site never links to a missing file. No placeholder or generated resume is
shipped on purpose.
