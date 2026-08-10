# Ratings

A read-only-to-edit, click-to-rate board. Legend at top, grouped items with up to two fields each, seven-point color scale, optional per-field theory/practice split, dark mode, JSON export, and shareable read-only links via Supabase.

No build step — plain HTML/CSS/JS, loaded directly by the browser.

## Running it locally

Any static file server works, e.g.:

```
npx serve web
# or
python3 -m http.server 8000 --directory web
```

Then open the printed URL.

## Editing content

New to this? `web/tutorial.json` is a step-by-step walkthrough of the data shape, written as JSON — six steps, a field-by-field reference, the mistakes that bite, and a complete worked example you can paste straight into `rating-data.js`.

All lists, groups, items, and fields live in `rating-data.js` — edit it directly and redeploy. There's no in-UI editor by design.

- `scale`: ordered best → worst. The color ramp (`PALETTE` in `app.js`) has 7 fixed colors matching the seed data's 7-point scale; if you change the number of scale entries, update `PALETTE` to match.
- `lists`: the boards the selector under the legend switches between — seeded as `normal`, `detailed`, and `please don't`. Each needs an `id` (used in the JSON), a `label` (shown on the selector button), and its own `groups`. Add or rename as many as you like.
- `defaultList`: the `id` of the list shown on a fresh page load.
- `lists[].groups[].fields`: at most two per group (extras are ignored).
- `lists[].groups[].items[].ratings`: either a plain scale index (e.g. `3`), `null` for unanswered, or `{ theory, practice }` if you want a field to start pre-split.

Changes visitors make in the browser (clicking circles, splitting fields, switching lists) live only in that page load — reloading resets to whatever's in `rating-data.js`. "Export JSON" and "Share link" are how a set of answers gets captured.

Answers are kept per list, so switching back and forth doesn't lose anything, and every list is written out on export/share. The exported JSON records which list was selected as a top-level `activeList` (the list's `id`), and opening a share link starts on that list — viewers can still switch to the others, read-only.

## Supabase (share links)

The "Share link" button POSTs the current board state to Supabase and returns a URL like `?share=<uuid>`; opening that URL fetches the snapshot back and renders it read-only. Nothing about the live editing board depends on Supabase — if it's unreachable, the board still works, only sharing is affected.

This repo already has a project provisioned (`rating-site`, `us-east-1`) with `config.js` pointing at it. The schema is one table:

```sql
create table public.rating_snapshots (
  id uuid primary key default gen_random_uuid(),
  data jsonb not null,
  created_at timestamptz not null default now()
);

alter table public.rating_snapshots enable row level security;

create policy "anon can insert snapshots"
  on public.rating_snapshots for insert to anon with check (true);

create policy "anon can select snapshots"
  on public.rating_snapshots for select to anon using (true);
```

There's no `UPDATE` or `DELETE` policy, so a snapshot is immutable and unremovable from the client once created — matches "read-only view" once shared. The key in `config.js` is a publishable/anon key; it's meant to be public. Access control is entirely the RLS policies above, not secrecy of the key.

### Using your own Supabase project instead

1. Create a project at [supabase.com](https://supabase.com).
2. Run the SQL above in the SQL editor.
3. Copy your project URL and anon/publishable key into `config.js`.

## Deploying

It's a static site — any static host works (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3, etc.). Just publish the `web/` directory.

### GitHub Pages

A workflow at `.github/workflows/pages.yml` publishes `web/` to Pages on every push to `main`. One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions** (Pages' branch/folder source can't serve a subdirectory like `web/`, hence the workflow). The site will be live at `https://<username>.github.io/<repo-name>/`.
