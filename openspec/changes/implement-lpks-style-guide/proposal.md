## Why
Implement the LPKS TANA ILMU style guide to establish a consistent, professional visual identity across the Next.js application with proper typography, color scheme, and button components.

## What Changes
- Configure typography system using Roboto Bold for headings (H1-H6, 56px-16px) and Poppins Regular for body text (16px-18px, 150% line height)
- Implement LPKS color palette: black (#0D0D0D), copper brown (#8B5A2B), and light gray (#E5E1DC)
- Create filled and outline button variants with hover effects using the defined colors
- Setup shadcn/ui and Radix UI integration for component development
- Apply styles consistently across digital and print media

## Impact
- Affected specs: New `design-system` capability
- Affected code: Global CSS, component library, typography configuration, button components
- Dependencies: Adding @radix-ui/react-icons, class-variance-authority, clsx, tailwind-merge, lucide-react