# Mobile Menu Reorder + Mandatory Disclosure Dropdown

Scope: `src/components/header/FullScreenMenu.tsx` only. Mobile/tablet (`<md`) sidebar. Desktop unchanged.

## 1. Reorder sections on mobile

Current mobile order inside the sidebar:
1. Quick Access (top strip links + flat Mandatory Disclosure items)
2. Home + Main Navigation accordion
3. Quick Links grid

New order:
1. **Main Navigation** (Home + all menu sections accordion) — currently #2
2. **Quick Links** (icon grid) — currently #3
3. **Quick Access** (NIRF / NAAC/IQAC / Student Support / Contact + Mandatory Disclosure dropdown) — currently #1

Implementation: move the `md:hidden` "Quick Access" block out of `<nav>` and place it after the "Quick Links" block at the bottom of the sidebar. Move the "Quick Links" block to sit between the nav and the new Quick Access block. Add a small `md:hidden` "Main Navigation" section header above the Home link for clarity (optional, matches the other two labelled sections).

## 2. Make "Mandatory Disclosure" collapsible inside Quick Access

Currently the 8 items from `mandatoryDisclosureMenuData` render as a flat list of indented links immediately below the four top-strip links.

Change to: a single "Mandatory Disclosure" row with a chevron button (same styling as the main accordion section rows — `w-9 h-9` navy button, rotating chevron). Tapping toggles a collapsed sub-list of the 8 items. Reuse the existing `expandedSections` state with a dedicated key like `'mobile-mandatory'` (already-implemented `toggleSection` works as-is).

Submenu items use the same indented style currently in place (`px-7 py-2 text-xs`) wrapped in an `animate-fade-in` container, matching the main accordion's expand pattern. Default = collapsed.

## 3. Constraints preserved

- Desktop (`md+`) layout untouched.
- No design/color changes — reuse existing classes and `#1a3a6e` chevron button styling.
- Touch targets stay at ≥36px (button) and ≥40px (rows with `py-2.5`/`py-3.5`).
- Whole sidebar continues to scroll as one unit (current behavior).

## Files touched

- `src/components/header/FullScreenMenu.tsx`
