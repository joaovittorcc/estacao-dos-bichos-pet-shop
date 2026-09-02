---
name: Estação dos Bichos
colors:
  surface: '#f9f9ff'
  surface-dim: '#d0daf0'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d9e3f9'
  on-surface: '#121c2c'
  on-surface-variant: '#3f4949'
  inverse-surface: '#273141'
  inverse-on-surface: '#ebf1ff'
  outline: '#6f7979'
  outline-variant: '#bec9c8'
  surface-tint: '#13696a'
  primary: '#006162'
  on-primary: '#ffffff'
  primary-container: '#2c7a7b'
  on-primary-container: '#c1ffff'
  inverse-primary: '#89d3d4'
  secondary: '#9d4400'
  on-secondary: '#ffffff'
  secondary-container: '#fe8439'
  on-secondary-container: '#662900'
  tertiary: '#54585a'
  on-tertiary: '#ffffff'
  tertiary-container: '#6c7072'
  on-tertiary-container: '#f1f4f6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a5eff0'
  primary-fixed-dim: '#89d3d4'
  on-primary-fixed: '#002020'
  on-primary-fixed-variant: '#004f50'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb68f'
  on-secondary-fixed: '#331100'
  on-secondary-fixed-variant: '#773200'
  tertiary-fixed: '#e0e3e5'
  tertiary-fixed-dim: '#c3c7c9'
  on-tertiary-fixed: '#181c1e'
  on-tertiary-fixed-variant: '#434749'
  background: '#f9f9ff'
  on-background: '#121c2c'
  surface-variant: '#d9e3f9'
typography:
  display-lg:
    fontFamily: Quicksand
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Open Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Open Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Open Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style
The brand personality centers on the intersection of professional veterinary excellence and the warmth of a neighborhood institution with 12 years of history. The target audience includes pet owners who view their animals as family members and seek a balance of clinical reliability and empathetic care.

The design style is **Modern Friendly**, blending clean corporate reliability with soft, approachable elements. It utilizes high-quality photography as a primary storytelling medium, framed within structured but softened layouts. The emotional response should be one of immediate safety, warmth, and established expertise.

## Colors
The palette is rooted in a deep, trustworthy Teal (`#2C7A7B`) which serves as the primary anchor for navigation, headers, and primary actions. This is balanced by a vibrant Burnt Orange (`#DD6B20`) used sparingly for highlights, promotional call-outs, and playful interactive elements to signal energy.

Neutral tones prioritize a "Soft White" approach using `F7FAFC` for page backgrounds to reduce harsh contrast, while `2D3748` provides high legibility for body text. Success, error, and warning states should utilize muted versions of green and red to maintain the professional, calm atmosphere.

## Typography
The typographic scale uses **Quicksand** for all headings to inject personality and a "hug-like" softness through its rounded terminals. For long-form reading, service descriptions, and clinical information, **Open Sans** provides a neutral, highly legible contrast that reinforces the professional nature of the shop.

Maintain generous line heights (1.6x) for body text to ensure accessibility for all age groups. Headlines should utilize tighter tracking at larger sizes to maintain a cohesive visual unit.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a maximum container width of 1200px for desktop viewing. A 12-column system is used for the service catalog, allowing products and services to sit in 3 or 4-column cards.

- **Mobile:** 4-column grid with 16px side margins. Content stacks vertically.
- **Tablet:** 8-column grid with 24px margins.
- **Desktop:** 12-column grid with 40px margins and 24px gutters.

Vertical rhythm is strictly maintained in multiples of 8px to ensure a clean, systematic appearance even within the "playful" brand context.

## Elevation & Depth
Depth is achieved through **Tonal Layering** and soft, ambient shadows. Backgrounds are primarily flat or use very subtle grey-blue tints to separate sections. 

Shadows should be "organic"—low opacity (10-15%) with a large blur radius and a slight vertical offset (Y+4 or Y+8), tinted with the primary teal color to avoid "dirty" grey looks. This makes cards appear to lift gently off the surface rather than floating aggressively. Use low-contrast outlines (1px solid `#E2E8F0`) for interactive elements that are not yet active.

## Shapes
In alignment with the rounded typography, the shape language is consistently **Rounded**. Standard UI elements like buttons and input fields use a 0.5rem (8px) radius. Larger containers, such as service cards and promotional banners, use 1rem (16px) or 1.5rem (24px) to emphasize the friendly, safe nature of the brand. Complete pills (circular ends) are reserved exclusively for tags and status indicators.

## Components
- **Buttons:** Primary buttons use the Teal background with white text. Secondary buttons use a Teal outline. Hover states should involve a slight darkening of the color rather than a color shift.
- **Cards:** Service cards feature a top-heavy layout with a high-quality image (aspect ratio 4:3), followed by a Quicksand-based title and a simple price label in the secondary Orange.
- **Input Fields:** Use a light grey background (`#EDF2F7`) with a 2px Teal border on focus. Icons should be placed internally to the left.
- **Chips/Tags:** Used for pet categories (Dog, Cat, Bird). These should be pill-shaped with light pastel backgrounds derived from the primary and secondary colors.
- **Lists:** Service lists should include a small, soft-colored icon (e.g., a paw print or comb) as a bullet point replacement to reinforce the pet shop theme.
- **Appointment Bar:** A persistent floating action button or bottom bar for "Book Grooming" using the secondary Orange to ensure high conversion and visibility.