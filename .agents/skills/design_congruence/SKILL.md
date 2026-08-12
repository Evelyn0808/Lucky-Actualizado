---
name: "Design Congruence (Premium Vanilla CSS)"
description: "Ensures visual consistency and premium aesthetics across both public pages and backend/admin dashboards using Vanilla CSS."
---

# Premium Design System Guidelines

This skill ensures that all interfaces built for this project (both public facing and admin/services dashboards) share a single, unified premium design language using **Vanilla CSS**.

## Core Principles
1. **No Tailwind CSS**: Use pure Vanilla CSS with a global `variables.css` file for all design tokens (colors, spacing, typography).
2. **Unified Tokens**: Both public and admin interfaces MUST import and use the exact same CSS variables. Do not hardcode hex colors or pixel sizes in component CSS.
3. **Premium Aesthetics**:
   - Use subtle glassmorphism (translucency + backdrop-filter) where appropriate (e.g., floating navs, modals).
   - Use large, legible typography (e.g., Inter, Outfit) with high contrast.
   - Use soft box-shadows (`rgba(0,0,0,0.05)`) instead of harsh borders to define cards and sections.
   - Employ smooth micro-interactions (e.g., `transition: all 0.3s ease` on buttons and cards).
4. **Dashboard & Public Congruence**: The admin dashboard should not look like a generic Bootstrap template. It should use the same rounding, color palette, and button styles as the public landing page.

## Required CSS Variables Structure
Ensure you define and use a structure similar to this in your root CSS:
```css
:root {
  /* Colors */
  --color-primary: #FF7B54;
  --color-primary-hover: #E56A47;
  --color-bg-light: #F9F9F9;
  --color-bg-white: #FFFFFF;
  --color-text-main: #333333;
  --color-text-muted: #666666;
  
  /* Borders & Shadows */
  --radius-md: 12px;
  --radius-lg: 24px;
  --shadow-soft: 0 8px 24px rgba(0, 0, 0, 0.06);
  
  /* Typography */
  --font-main: 'Outfit', sans-serif;
}
```

## Actionable Rules for Agents
- When generating a new page or component, ALWAYS verify that you are applying classes that hook into these CSS variables.
- When generating an admin panel, use the same card styling (`background: var(--color-bg-white); border-radius: var(--radius-md); box-shadow: var(--shadow-soft);`) as public cards.
- DO NOT use standard browser alert dialogs; build premium custom modals.
