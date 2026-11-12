# Task Manager design reference

Source: [DESIGN-notion.md](./DESIGN-notion.md), supplied by the user.

Use the source tokens for the Task Manager UI:
- Canvas #f6f5f4, white surfaces, ink #0d0d0d, muted #615d59, hairlines #e6e6e6.
- Override primary blue with the user's #6979bd; active blue #5666a8.
- Heading 40px / 700 / 1.1 / -1px; section heading 26px / 700 / 1.23 / -.625px.
- Body 16px and dense list rows 15px; captions 14px.
- Cards: 12px radius, 24px padding, 1px hairline, no heavy shadow.
- Inputs: 4px radius. App utility buttons: 8px radius. No marketing CTA is needed.
- Use 8px-based spacing and three statistic cards, stacking below 600px.
- Preserve CRUD, validation, completion statistics and the five sample tasks.
- No large check decorations, invented workspace navigation, document covers,
  marketing hero, sticker illustrations or motivational copy for this app.

The complete analysis is retained in DESIGN-notion.md. CSS tokens live in
src/index.css and component styles in src/App.css.
