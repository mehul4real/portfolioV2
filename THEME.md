# Portfolio Theme System Documentation

## Overview
This portfolio uses a centralized theme system with all colors and design tokens organized for easy maintenance and modification.

## Theme Structure

### Core Files
- `src/lib/theme.ts` - Main theme configuration with TypeScript types
- `src/index.css` - CSS custom properties and utility classes
- `tailwind.config.ts` - Tailwind configuration that uses our theme

### Color Palette

#### Brand Colors
```css
--primary: 260 100% 70%    /* Purple */
--secondary: 180 100% 50%  /* Cyan */
--accent: 340 100% 65%     /* Pink */
```

#### Background Colors
```css
--background: 240 15% 6%      /* Dark background */
--card: 240 12% 10%           /* Card background */
--muted: 240 10% 20%          /* Muted background */
```

#### Text Colors
```css
--foreground: 240 10% 95%        /* Primary text */
--muted-foreground: 240 5% 65%   /* Secondary text */
```

#### UI Colors
```css
--border: 240 10% 18%           /* Border color */
--destructive: 0 84% 60%        /* Error/danger color */
```

### Gradients
All gradients are defined as CSS custom properties:
- `--gradient-primary`: Primary brand gradient (purple to cyan)
- `--gradient-accent`: Accent gradient (pink to purple)
- `--gradient-timeline`: Timeline gradient for experience section
- `--hero-orb-*`: Background decorative elements

### Utility Classes

#### Color Utilities
- `.gradient-text` - Applies primary gradient to text
- `.bg-gradient-primary` - Primary gradient background
- `.bg-gradient-accent` - Accent gradient background
- `.bg-gradient-timeline` - Timeline gradient background

#### Glass Morphism
- `.glass-card` - Glass effect with backdrop blur and border

#### Shape Utilities
- `.hero-orb-1`, `.hero-orb-2`, `.hero-orb-3` - Hero background orbs
- `.hero-shape` - Hero decorative shapes
- `.border-primary-soft`, `.border-secondary-soft`, `.border-accent-soft` - Soft borders

#### Shadow Utilities
- `.shadow-glow` - Primary glow effect
- `.shadow-hover` - Hover state shadow

#### Skill Tags
- `.skill-tag` - Styled skill badge with hover effects

### Animations
- `.animate-float` - Floating animation for decorative elements
- `.animate-slide-up` - Slide up entrance animation
- `.animate-slide-left` - Slide from left animation
- `.animate-slide-right` - Slide from right animation
- `.animate-fade-in` - Fade in animation

## Usage Guidelines

### Adding New Colors
1. Add the color to `src/lib/theme.ts` in the appropriate category
2. Add the CSS custom property to `src/index.css`
3. Update `tailwind.config.ts` if you need Tailwind utilities
4. Create utility classes if needed

### Modifying Existing Colors
1. Update the HSL value in `src/index.css` 
2. The change will propagate throughout the entire application

### Creating New Gradients
1. Add gradient definition to `src/index.css` under portfolio specific tokens
2. Create a utility class if you want to reuse it
3. Use the CSS custom property in components

### Best Practices
1. Always use HSL format for colors (easier to manipulate)
2. Use CSS custom properties instead of hardcoded values
3. Create utility classes for commonly used patterns
4. Use opacity modifiers (e.g., `/ 0.5`) for transparency
5. Group related colors together in the theme structure

## Component Updates
All components have been updated to use the theme system:

- **Hero**: Uses theme utilities for background shapes and gradients
- **Header**: Uses gradient utility for navigation underlines
- **Experience**: Uses timeline gradient and theme colors
- **Skills**: Uses skill-tag utility and gradient text
- **Contact**: Uses theme button styles and gradients

## Development Tips

### Hot Reloading Colors
When you modify colors in `src/index.css`, the changes will be reflected immediately in the development server.

### Debugging Colors
Use browser dev tools to inspect CSS custom properties:
1. Open dev tools
2. Go to Elements tab
3. Look for `:root` in the HTML
4. See all `--` prefixed custom properties

### Color Consistency
To maintain consistency:
1. Always use theme colors instead of hardcoding
2. Use the predefined opacity levels (10%, 20%, 30%, 50%, 70%)
3. Follow the established patterns for hover states

## Future Enhancements
- Light/dark theme toggle support (structure is ready)
- Theme variants for different color schemes
- Animation duration and easing customization
- Responsive design token adjustments