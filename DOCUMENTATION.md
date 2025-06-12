# Sanchit Agarwal Portfolio - Code Documentation

## 📁 File Structure

\`\`\`
sanchit-portfolio/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx           # Main portfolio page
│   └── globals.css        # Global styles and animations
└── DOCUMENTATION.md       # This documentation file
\`\`\`

## 🎯 Component Structure & Line References

### app/layout.tsx
**Purpose**: Root layout with metadata and font configuration
- **Lines 1-4**: Imports and font setup
- **Lines 6-10**: Metadata configuration
- **Lines 12-22**: Root layout component with HTML structure

### app/page.tsx
**Purpose**: Main portfolio component with all sections

#### Imports & Setup (Lines 1-25)
- **Lines 1-3**: React imports
- **Lines 4-6**: UI component imports
- **Lines 7-25**: Icon imports from Lucide React

#### Custom Hook (Lines 27-45)
- **Lines 27-45**: `useScrollAnimation()` - Intersection Observer for scroll animations

#### Main Component Setup (Lines 47-85)
- **Lines 47-50**: State management (menu, form data)
- **Lines 52-58**: Skills data object
- **Lines 60-75**: Projects data array
- **Lines 77-82**: Form submission handler
- **Lines 84-87**: Scroll navigation function

#### Navigation Section (Lines 89-150)
- **Lines 89-95**: Fixed navigation bar structure
- **Lines 96-98**: Logo ("SAN")
- **Lines 100-115**: Desktop navigation menu
- **Lines 117-121**: Mobile menu button
- **Lines 123-148**: Mobile navigation menu

#### Hero Section (Lines 152-195)
- **Lines 152-155**: Hero section container
- **Lines 156-165**: Main heading and subtitle
- **Lines 167-180**: CTA buttons
- **Lines 182-188**: Scroll indicator

#### About Section (Lines 197-260)
- **Lines 197-200**: About section container
- **Lines 201-205**: Section heading
- **Lines 206-220**: About text content
- **Lines 222-240**: Personal details with icons
- **Lines 242-258**: Skills icons grid

#### Photo Section (Lines 262-285)
- **Lines 262-265**: Photo section container
- **Lines 266-270**: Section heading
- **Lines 272-280**: Profile photo with styling
- **Lines 282-284**: Quote text

#### Skills Section (Lines 287-320)
- **Lines 287-290**: Skills section container
- **Lines 291-295**: Section heading
- **Lines 297-318**: Skills cards grid with mapping

#### Certificates Section (Lines 322-410)
- **Lines 322-325**: Certificates section container
- **Lines 326-330**: Section heading
- **Lines 332-355**: Certificates data array
- **Lines 356-408**: Certificates cards grid

#### Projects Section (Lines 412-450)
- **Lines 412-415**: Projects section container
- **Lines 416-420**: Section heading
- **Lines 422-448**: Projects cards grid

#### Contact Section (Lines 452-540)
- **Lines 452-455**: Contact section container
- **Lines 456-462**: Section heading and description
- **Lines 464-466**: Two-column grid layout
- **Lines 467-495**: Contact form
- **Lines 497-538**: Contact information and stats

#### Footer (Lines 542-548)
- **Lines 542-548**: Simple footer with copyright

### app/globals.css
**Purpose**: Global styles, animations, and responsive design

#### CSS Variables (Lines 1-50)
- **Lines 1-3**: Tailwind imports
- **Lines 5-30**: Light theme CSS variables
- **Lines 32-50**: Dark theme CSS variables

#### Base Styles (Lines 52-60)
- **Lines 52-60**: Base element styling

#### Custom Scrollbar (Lines 62-75)
- **Lines 62-75**: Yellow-themed scrollbar styling

#### Scroll Animations (Lines 77-150)
- **Lines 82-90**: Base scroll animation classes
- **Lines 92-110**: Directional fade animations
- **Lines 112-118**: Zoom animation
- **Lines 120-135**: Staggered delay classes
- **Lines 137-150**: Additional effects

#### Mobile Optimizations (Lines 152-165)
- **Lines 152-165**: Responsive animation adjustments

## 🎨 Animation System

### Scroll Animation Classes
- **`.scroll-animate`**: Base class for all animated elements
- **`.fade-up`**: Slides element up from bottom
- **`.fade-left`**: Slides element from left
- **`.fade-right`**: Slides element from right
- **`.zoom-in`**: Scales element from 80% to 100%

### Delay Classes
- **`.delay-100`** to **`.delay-600`**: Staggered animation delays (100ms increments)

### Usage Pattern
\`\`\`tsx
<div className="scroll-animate fade-up delay-200">
  Content that animates on scroll
</div>
\`\`\`

## 📱 Responsive Breakpoints

### Tailwind CSS Breakpoints Used
- **`sm:`** - 640px and up (small tablets)
- **`md:`** - 768px and up (tablets)
- **`lg:`** - 1024px and up (laptops)
- **`xl:`** - 1280px and up (desktops)

### Key Responsive Elements
1. **Navigation**: Hamburger menu on mobile
2. **Grid Layouts**: Responsive column counts
3. **Typography**: Smaller text on mobile
4. **Animations**: Reduced motion on mobile

## 🎯 Section IDs for Navigation

| Section | ID | Purpose |
|---------|----|---------| 
| Hero | `#home` | Landing section |
| About | `#about` | Personal information |
| Photo | `#photo` | Profile photo |
| Skills | `#skills` | Technical skills |
| Certificates | `#certificates` | Certifications |
| Projects | `#projects` | Portfolio projects |
| Contact | `#contact` | Contact form |

## 🎨 Color Scheme

### Primary Colors
- **Background**: `#000000` (Black)
- **Text**: `#FFFFFF` (White)
- **Accent**: `#FACC15` (Yellow-400)
- **Secondary Text**: `#9CA3AF` (Gray-400)

### Usage Guidelines
- **Yellow accent**: Used for highlights, CTAs, and interactive elements
- **Gray variations**: Used for secondary text and borders
- **Black background**: Maintains the dark theme throughout

## 🔧 Customization Guide

### Adding New Sections
1. Create section with unique ID
2. Add navigation link in both desktop and mobile menus
3. Apply scroll animations with appropriate classes
4. Follow existing spacing patterns (`py-20 px-4`)

### Modifying Animations
1. Edit animation classes in `globals.css`
2. Adjust timing with `transition-duration`
3. Modify easing with `cubic-bezier` values
4. Add new delay classes as needed

### Updating Content
1. **Skills**: Modify the `skills` object (lines 52-58)
2. **Projects**: Update the `projects` array (lines 60-75)
3. **Certificates**: Edit the certificates data (lines 332-355)
4. **Personal Info**: Update text content in respective sections

## 📊 Performance Considerations

### Optimization Features
1. **Intersection Observer**: Efficient scroll detection
2. **CSS Transforms**: Hardware-accelerated animations
3. **Responsive Images**: Placeholder system for images
4. **Minimal JavaScript**: Lightweight scroll animations

### Best Practices Implemented
- Debounced scroll events
- Reduced motion on mobile
- Efficient CSS selectors
- Minimal DOM manipulation

## 🚀 Deployment Notes

### Required Environment
- Next.js 14+
- React 18+
- Tailwind CSS 3+
- TypeScript support

### Build Considerations
- All animations are CSS-based for performance
- No external animation libraries required
- Responsive design tested on all major devices
- Cross-browser compatibility ensured
