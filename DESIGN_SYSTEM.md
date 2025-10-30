# Skooli Design System Documentation

> **Version:** 1.0
> **Last Updated:** 2025
> **Stack:** React 19 + Vite + Tailwind CSS 4 + Radix UI

## Table of Contents

1. [Introduction](#introduction)
2. [Design Tokens](#design-tokens)
3. [Typography](#typography)
4. [Colors](#colors)
5. [Spacing](#spacing)
6. [Components](#components)
7. [Animation & Transitions](#animation--transitions)
8. [Best Practices](#best-practices)

---

## Introduction

The Skooli design system is built on a foundation of emerald green (#009877), reflecting growth and education. This document serves as the single source of truth for implementing consistent UI patterns across the Skooli platform.

### Key Principles

1. **Consistency First**: Use design system components and tokens exclusively
2. **Emerald Brand Identity**: Primary color (#009877) should dominate the visual hierarchy
3. **Accessibility**: WCAG 2.1 AA minimum compliance
4. **Fluid Responsive**: Use clamp() for smooth scaling across all devices
5. **Performance**: Optimize for fast load times and smooth interactions

---

## Design Tokens

All design tokens are defined in `src/styles/tokens.css`. **Never hardcode values** — always use CSS custom properties.

### Token Categories

```css
/* Typography tokens */
--font-size-display
--font-size-h1, h2, h3, h4
--font-size-body-lg, md, sm, xs
--line-height-tight, snug, relaxed, body

/* Color tokens */
--brand-emerald, --brand-gold, --brand-cream
--emerald-ink, --emerald-canopy, --emerald-bough
--emerald-mist, --emerald-haze

/* Spacing tokens */
--space-3xs through --space-5xl
--space-section-inline, --space-section-y

/* Animation tokens */
--duration-instant, fast, base, medium, slow, slower, slowest
--ease-in-out, --ease-out, --ease-in, --ease-bounce
```

---

## Typography

### System Overview

Skooli uses **Inter** with a fluid, responsive type scale using `clamp()`. Typography automatically scales smoothly across all viewport sizes without breakpoint jumps.

### Utility Classes

**Location:** `src/styles/tokens.css`

#### Headings

```jsx
// Display (largest)
<h1 className="typography-display">Operational assurance</h1>
// Range: 33.6px - 60px

// Heading 1
<h1 className="typography-heading-1">Page title</h1>
// Range: 28.8px - 48px

// Heading 2
<h2 className="typography-heading-2">Section title</h2>
// Range: 25.6px - 40px

// Heading 3
<h3 className="typography-heading-3">Subsection title</h3>
// Range: 22.4px - 32px

// Heading 4
<h4 className="typography-heading-4">Card title</h4>
// Range: 20px - 25.6px
```

#### Body Text

```jsx
// Large body (intro paragraphs, key content)
<p className="typography-body-lg">Large body text</p>
// Range: 16.8px - 20px

// Medium body (default paragraph text)
<p className="typography-body-md">Default body text</p>
// Range: 15.2px - 17.6px

// Small body (captions, helper text)
<p className="typography-body-sm">Small body text</p>
// Range: 13.6px - 15.2px

// Extra small body (labels, metadata)
<p className="typography-body-xs">Extra small text</p>
// Range: 12px - 13.6px
```

### When to Use Which Class

| Class | Use Case | Example |
|-------|----------|---------|
| `.typography-display` | Hero sections, landing pages | Main hero headline |
| `.typography-heading-1` | Page titles, primary headings | "About Us" page title |
| `.typography-heading-2` | Section headings | "Our Services" section |
| `.typography-heading-3` | Subsection headings, card titles | Feature card titles |
| `.typography-heading-4` | Small headings, list titles | FAQ question titles |
| `.typography-body-lg` | Intro paragraphs, important copy | Hero subtitle, section intros |
| `.typography-body-md` | Standard paragraphs | Blog post body, descriptions |
| `.typography-body-sm` | Captions, helper text | Image captions, form hints |
| `.typography-body-xs` | Labels, timestamps, metadata | "Posted 2 hours ago" |

### Best Practices

✅ **DO:**
- Use semantic HTML tags (h1-h6, p) with typography classes
- Maintain heading hierarchy (h1 → h2 → h3, no skipping)
- Use `.typography-body-lg` for hero subtitles and section introductions
- Ensure body text minimum 16px on smallest screens (already handled by clamp)

❌ **DON'T:**
- Hardcode font sizes (`text-4xl`, `text-base`) — use typography classes
- Skip heading levels (h1 → h3)
- Use display class for anything except heroes/major statements
- Override line heights without careful consideration

---

## Colors

### Brand Palette

**Location:** `src/styles/tokens.css`, `src/index.css`

#### Primary Colors

```css
--brand-emerald: #009877    /* Primary brand color */
--brand-gold: #ffd700       /* Accent color */
--brand-cream: #fce6ae      /* Background accent */
--brand-white: #ffffff      /* Base background */
```

#### Emerald Depth Scale

```css
--emerald-ink: #032823      /* Darkest (headings, emphasis) */
--emerald-canopy: #05382c   /* Dark (secondary text) */
--emerald-bough: #4c625b    /* Medium (muted text) */
--emerald-mist: #8b9f99     /* Light (borders, dividers) */
--emerald-haze: #8da49a     /* Lightest (subtle borders) */
--brand-emerald-light: #7fd1b9 /* Light emerald variant */
```

### Semantic Colors

Defined in `src/index.css` `:root` section:

```css
--primary: var(--brand-emerald)
--secondary: var(--brand-cream)
--accent: var(--brand-gold)
--destructive: #c2410c      /* Error states */
--muted: color-mix(in srgb, var(--brand-cream) 70%, var(--brand-white))
```

### Color Usage Guide

| Color | Use Case | Example |
|-------|----------|---------|
| `--brand-emerald` | Primary actions, links, emphasis | CTA buttons, active states, links |
| `--brand-gold` | Accents, highlights, premium features | Badges, special offers, highlights |
| `--brand-cream` | Section backgrounds, subtle surfaces | Alternate section backgrounds |
| `--emerald-ink` | Dark text on light backgrounds | Headings on white |
| `--emerald-canopy` | Secondary text, body copy | Paragraph text |
| `--emerald-bough` | Muted text, less important info | Helper text, captions |
| `--destructive` | Error states, warnings, critical actions | Error messages, delete buttons |

### Utility Classes

```jsx
// Text colors
<span className="text-brand-emerald">Emerald text</span>
<span className="text-brand-gold">Gold text</span>

// Background colors
<div className="bg-brand-emerald">Emerald background</div>
<div className="bg-brand-cream">Cream background</div>

// Border colors
<div className="border-brand-emerald">Emerald border</div>
```

### Color Contrast Guidelines

All text must meet **WCAG AA contrast ratios**:
- Normal text: 4.5:1 minimum
- Large text (18pt+ or 14pt+ bold): 3:1 minimum

**Verified combinations:**
- ✅ Emerald text on white background
- ✅ White text on emerald background
- ✅ Emerald-ink text on cream background

### Best Practices

✅ **DO:**
- Use `--brand-emerald` for all primary actions and brand elements
- Use semantic color names (`--primary`, `--destructive`) for component variants
- Test color combinations for accessibility
- Use `color-mix()` for subtle variations

❌ **DON'T:**
- Hardcode hex values outside of tokens.css
- Use color as the only indicator of information
- Create new colors without adding them to tokens

---

## Spacing

### Spacing Scale

**Location:** `src/styles/tokens.css`

```css
--space-3xs: 0.25rem   /* 4px */
--space-2xs: 0.5rem    /* 8px */
--space-xs: 0.75rem    /* 12px */
--space-sm: 1rem       /* 16px */
--space-md: 1.5rem     /* 24px */
--space-lg: 2rem       /* 32px */
--space-xl: 2.5rem     /* 40px */
--space-2xl: 3rem      /* 48px */
--space-3xl: 4rem      /* 64px */
--space-4xl: 5rem      /* 80px */
--space-5xl: 6rem      /* 96px */
```

### Section Layout Variables

```css
--space-section-inline: clamp(1rem, 6vw, 2.5rem)
--space-section-y: clamp(2.5rem, 8vw, 6rem)
--space-section-tight-y: calc(var(--space-section-y) * 0.6)
--section-max-width: clamp(22rem, 90vw, 80rem)
```

### Layout Classes

```jsx
// Section wrapper (vertical spacing)
<section className="section-shell">
  {/* Content */}
</section>

// Section container (max-width, horizontal padding)
<div className="section-container">
  {/* Content */}
</div>

// Tight section spacing
<section className="section-shell" data-spacing="tight">
  {/* Content */}
</section>
```

### Spacing Usage Guide

| Token | Use Case | Example |
|-------|----------|---------|
| `--space-3xs, 2xs` | Tight spacing, fine details | Icon gaps, badge padding |
| `--space-xs, sm` | Component internal spacing | Button padding, input padding |
| `--space-md, lg` | Card padding, element gaps | Card content padding, flex gaps |
| `--space-xl, 2xl` | Section padding, major gaps | Section internal spacing |
| `--space-3xl, 4xl, 5xl` | Section separation | Space between major sections |

### Best Practices

✅ **DO:**
- Use spacing scale consistently (no random values)
- Use section layout classes for page structure
- Use `gap-*` utilities with spacing tokens for flexbox/grid
- Use `padding-inline: var(--space-section-inline)` for responsive horizontal padding

❌ **DON'T:**
- Hardcode pixel values (`px-4`, `py-8`) — use spacing tokens via custom classes
- Use arbitrary values (`p-[17px]`) unless absolutely necessary
- Skip spacing scale steps arbitrarily

---

## Components

### Button Component

**Location:** `src/components/ui/button.jsx`

#### Variants

```jsx
import { Button } from '@/components/ui/button.jsx'

// Primary (brand emerald, white text)
<Button variant="primary">Primary Action</Button>

// Secondary (light emerald background)
<Button variant="secondary">Secondary Action</Button>

// Outline (white bg, emerald border)
<Button variant="outline">Outline Button</Button>

// Ghost (transparent, minimal)
<Button variant="ghost">Ghost Button</Button>

// Link (underlined on hover)
<Button variant="link">Link Button</Button>

// Subtle (cream bg, emerald text)
<Button variant="subtle">Subtle Button</Button>
```

#### Sizes

```jsx
// Small (40px min-height)
<Button size="sm">Small</Button>

// Default (44px min-height)
<Button size="default">Default</Button>

// Large (52px min-height)
<Button size="lg">Large</Button>

// Icon (44x44px square)
<Button size="icon" variant="outline">
  <Icon />
</Button>
```

#### Shapes

```jsx
// Rounded (rounded-xl)
<Button shape="rounded">Rounded</Button>

// Pill (fully rounded)
<Button shape="pill">Pill Shape</Button>

// Square (rounded-md)
<Button shape="square">Square</Button>
```

#### States

```jsx
// Loading state
<Button isLoading>Processing...</Button>

// Disabled state
<Button disabled>Disabled</Button>

// As child (for Link component)
<Button asChild>
  <Link to="/about">Go to About</Link>
</Button>
```

#### Best Practices

✅ **DO:**
- Use `variant="primary"` for primary CTAs
- Use `size="lg"` for hero CTAs
- Use `asChild` when wrapping Link components
- Use `isLoading` prop for async actions

❌ **DON'T:**
- Add inline className overrides for core styling
- Create custom button classes (use Button component)
- Use non-button elements for clickable actions

---

### Card Component

**Location:** `src/components/ui/card.jsx`

#### Variants

```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card.jsx'

// Default (white bg, emerald border)
<Card variant="default">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    Card content here
  </CardContent>
</Card>

// Surface (off-white bg)
<Card variant="surface">...</Card>

// Muted (cream bg)
<Card variant="muted">...</Card>

// Glass (transparent with backdrop-blur)
<Card variant="glass">...</Card>

// Inverted (dark bg, white text)
<Card variant="inverted">...</Card>
```

#### Padding Options

```jsx
<Card padding="none">...</Card>   /* No padding */
<Card padding="sm">...</Card>     /* Small: 16px */
<Card padding="md">...</Card>     /* Medium: 24px (default) */
<Card padding="lg">...</Card>     /* Large: 32px */
```

#### Interactive Mode

```jsx
// Adds hover lift and shadow
<Card interactive>
  <CardContent>
    Hoverable card
  </CardContent>
</Card>
```

#### Best Practices

✅ **DO:**
- Use Card composition (CardHeader, CardContent, CardFooter)
- Use `interactive` for clickable/hoverable cards
- Use `variant="muted"` for secondary content
- Use `variant="inverted"` on dark backgrounds

❌ **DON'T:**
- Mix Card variants on the same page without purpose
- Nest interactive Cards inside other interactive elements

---

### Input & Form Components

**Location:** `src/components/ui/input.jsx`, `src/components/forms/FormField.jsx`

#### Input Variants

```jsx
import { Input } from '@/components/ui/input.jsx'

// Default (white bg, emerald border)
<Input variant="default" placeholder="Enter text" />

// Subtle (cream bg, transparent border)
<Input variant="subtle" placeholder="Subtle input" />

// Inverted (for dark backgrounds)
<Input variant="inverted" placeholder="Inverted input" />
```

#### Input Sizes

```jsx
<Input size="sm" />       /* 40px height */
<Input size="default" />  /* 44px height */
<Input size="lg" />       /* 48px height */
```

#### FormField Component

```jsx
import { FormField } from '@/components/forms/FormField.jsx'
import { Input } from '@/components/ui/input.jsx'

<FormField
  label="Email Address"
  description="We'll never share your email"
  error={errors.email}
  required
>
  <Input type="email" />
</FormField>
```

#### Best Practices

✅ **DO:**
- Always wrap inputs in FormField for proper labeling
- Show error messages immediately after validation
- Use proper input types (email, tel, number, etc.)
- Set aria-invalid on error states

❌ **DON'T:**
- Use placeholder text as labels
- Skip FormField wrapper
- Forget required field indicators

---

### NavLink Component

**Location:** `src/components/ui/navlink.jsx`

#### Usage

```jsx
import { NavLink } from '@/components/ui/navlink.jsx'

// Desktop navigation
<NavLink variant="desktop" to="/about">
  About Us
</NavLink>

// Mobile navigation
<NavLink variant="mobile" to="/contact">
  Contact
</NavLink>
```

Active states and styling are handled automatically via React Router's `isActive` state.

---

## Animation & Transitions

### Duration Tokens

**Location:** `src/styles/tokens.css`

```css
--duration-instant: 100ms    /* Instant feedback */
--duration-fast: 150ms       /* Button hovers */
--duration-base: 200ms       /* Default transitions */
--duration-medium: 300ms     /* Menu animations */
--duration-slow: 500ms       /* Page transitions */
--duration-slower: 700ms     /* Complex animations */
--duration-slowest: 1000ms   /* Counter animations */
```

### Easing Functions

```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)      /* Default */
--ease-out: cubic-bezier(0, 0, 0.2, 1)           /* Exit animations */
--ease-in: cubic-bezier(0.4, 0, 1, 1)            /* Enter animations */
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)  /* Playful */
```

### Animation Usage Guide

| Duration | Use Case | Example |
|----------|----------|---------|
| `--duration-instant` | Immediate feedback | Button press states |
| `--duration-fast` | Quick interactions | Button hover, link hover |
| `--duration-base` | Standard transitions | Color changes, opacity |
| `--duration-medium` | Complex UI changes | Menu open/close, accordion |
| `--duration-slow` | Page-level changes | Route transitions, modals |
| `--duration-slowest` | Special effects | Counter animations, celebrations |

### Best Practices

✅ **DO:**
- Use animation tokens consistently
- Respect `prefers-reduced-motion` media query
- Keep animations subtle and purposeful
- Test animations on slower devices

❌ **DON'T:**
- Use overly long animations (> 500ms for most interactions)
- Animate all the things (use judiciously)
- Forget to test with reduced motion preferences

---

## Best Practices

### General Guidelines

1. **Always use design tokens** — No hardcoded values
2. **Prefer composition** — Use component building blocks (Card, CardHeader, CardContent)
3. **Semantic HTML** — Use proper tags (nav, main, section, article, etc.)
4. **Accessibility first** — Test with keyboard and screen readers
5. **Mobile-first** — Design and code for mobile, enhance for desktop

### Component Creation Checklist

When creating new components:

- [ ] Use design tokens exclusively
- [ ] Support all relevant variants (size, variant, state)
- [ ] Include focus-visible states
- [ ] Test keyboard navigation
- [ ] Add proper ARIA attributes
- [ ] Document in this file
- [ ] Test on mobile and desktop
- [ ] Check color contrast ratios

### Code Review Checklist

- [ ] No hardcoded colors (all use CSS variables)
- [ ] No hardcoded spacing (all use spacing tokens)
- [ ] Typography uses utility classes
- [ ] Components follow existing patterns
- [ ] Accessibility attributes present
- [ ] Responsive behavior tested
- [ ] No console errors

### Common Anti-Patterns to Avoid

❌ **Inline Style Overrides**
```jsx
// DON'T
<Button className="bg-blue-500 px-10 py-4 text-xl">
  Custom Button
</Button>

// DO
<Button variant="primary" size="lg">
  Standard Button
</Button>
```

❌ **Hardcoded Values**
```jsx
// DON'T
<div style={{ padding: '24px', marginTop: '48px' }}>

// DO
<div className="p-[var(--space-md)] mt-[var(--space-2xl)]">
```

❌ **Random Typography**
```jsx
// DON'T
<h2 className="text-3xl md:text-4xl lg:text-5xl">

// DO
<h2 className="typography-heading-2">
```

---

## Resources

- **Tokens:** `src/styles/tokens.css`
- **Theme:** `src/index.css`
- **Components:** `src/components/ui/`
- **Forms:** `src/components/forms/`
- **Tailwind Config:** `tailwind.config.js`

## Questions?

For questions or suggestions about the design system, please reach out to the development team or create an issue in the project repository.

---

**Remember:** Consistency is key to a great user experience. When in doubt, refer to this document and existing implementations in the codebase.
