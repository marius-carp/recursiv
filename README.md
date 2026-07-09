# Recursiv - Math Worksheet Generator

A serverless, zero-friction math worksheet generator for elementary school teachers, built with React, Vite, and Tailwind CSS.

## Features

- **Multiple Operations**: Addition, Subtraction, Multiplication, and Division
- **Customizable Range**: Set min and max values for numbers (0-100+)
- **Flexible Layout**: Full page, half page, or quarter page worksheets
- **Smart Math Logic**:
  - Subtraction: Never produces negative numbers
  - Division: Always results in whole numbers (no remainders)
- **Print Ready**: Includes automatic answer key generation
- **Professional Design**: Microsoft Fluent-inspired aesthetic with Source Serif 4 for worksheet content

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see the application.

### Building for Production

```bash
npm run build
```

## Usage

1. **Select Operations**: Choose which math operations to include (Addition, Subtraction, Multiplication, Division)
2. **Set Range**: Define the min and max values for the numbers
3. **Choose Question Count**: Use the slider to select 5-50 questions
4. **Select Layout**: Pick full page, half page, or quarter page format
5. **Customize Details**: Set worksheet title and toggle name/date lines
6. **Generate**: Click "Generate New Problems" to create questions
7. **Print**: Click "Print / Save PDF" to print or save as PDF

## Print Features

When printing:
- The sidebar automatically hides
- Student worksheet prints first
- Answer key prints on a separate page
- For half/quarter layouts, only one master answer key is printed to save paper

## Design System

Built following a professional, utility-first design system with:
- **Colors**: Inspired by Microsoft Fluent design
- **Typography**: Inter for UI, Source Serif 4 for worksheet content
- **Layout**: 320px fixed sidebar, flexible preview canvas
- **Print**: A4/Letter size with 1-inch margins

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Source Serif 4 & Inter** - Typography

## License

MIT
