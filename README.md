# 🎯 QR Code Generator

A modern, feature-rich QR code generator built with Next.js, React, and TypeScript. Create professional QR codes with custom logos, titles, and branding in seconds.

## ✨ Features

### 🎨 **Customization**
- **Custom Colors**: Choose any foreground and background colors
- **Flexible Sizing**: Generate QR codes from 128px to 512px
- **Error Correction**: Four levels of error correction (L, M, Q, H)
- **Logo Integration**: Add your brand logo while maintaining scannability
- **Custom Titles**: Include descriptive text under your QR codes

### 🚀 **User Experience**
- **Real-time Preview**: See your QR code update instantly as you type
- **Quick Templates**: Pre-built templates for URLs, emails, phone numbers, and WiFi
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **High-Quality Downloads**: Export as PNG with professional quality

### 🛠️ **Technical Excellence**
- **Modern Stack**: Built with Next.js 14, React 18, and TypeScript
- **Component Architecture**: Modular, reusable components
- **Type Safety**: Full TypeScript coverage for better development experience
- **Performance Optimized**: Fast rendering and efficient image processing

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Hamzeh-Dev/qrcode-generator.git
   cd qrcode-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage Guide

### Basic QR Code Generation
1. Enter your text, URL, or data in the input field
2. Watch the QR code generate in real-time
3. Click "Download PNG" to save your QR code

### Adding a Logo
1. Click the logo upload area
2. Select an image file (PNG, JPG up to 5MB)
3. Adjust the logo size using the slider (10-30%)
4. Preview shows exactly how it will look

### Adding a Title
1. Enter your title in the "Title" field (up to 50 characters)
2. Title appears under the QR code in the preview
3. Title color matches your QR code foreground color

### Quick Templates
Use the template buttons for common QR code types:
- **Website URL**: `https://example.com`
- **Email**: `mailto:example@email.com`
- **Phone**: `tel:+1234567890`
- **WiFi**: `WIFI:T:WPA;S:NetworkName;P:Password;;`

## 🏗️ Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── qr-generator/
│       ├── customization-options.tsx
│       ├── features-section.tsx
│       ├── header.tsx
│       ├── input-section.tsx
│       ├── logo-upload.tsx
│       ├── qr-preview.tsx
│       ├── quick-templates.tsx
│       ├── text-input.tsx
│       └── title-input.tsx
├── hooks/
│   └── useQRGenerator.ts
└── types/
    └── qr-generator.ts
```

## 🧩 Component Architecture

### Core Components
- **`useQRGenerator`**: Custom hook managing all QR code state and logic
- **`InputSection`**: Combines all input controls
- **`QRPreview`**: Displays live preview and download functionality
- **`Header`**: App branding and description

### Specialized Components
- **`QuickTemplates`**: Template buttons for common QR types
- **`TextInput`**: Main text/URL input field
- **`TitleInput`**: Optional title input with character counter
- **`LogoUpload`**: Logo upload and size controls
- **`CustomizationOptions`**: Size, colors, and error correction
- **`FeaturesSection`**: Feature highlights

## 🎨 Customization

### Colors
- **Foreground**: The color of the QR code pattern
- **Background**: The background color of the QR code
- **Title**: Automatically matches foreground color

### Sizing
- **QR Code**: 128px to 512px
- **Logo**: 10% to 30% of QR code size
- **Title**: Automatically scales with QR code size

### Error Correction Levels
- **Low (7%)**: Smallest QR code, least error recovery
- **Medium (15%)**: Balanced size and error recovery
- **Quartile (25%)**: Good error recovery
- **High (30%)**: Maximum error recovery, recommended with logos

## 🔧 Technical Details

### Dependencies
- **Next.js 14**: React framework with App Router
- **React 18**: UI library with modern hooks
- **TypeScript**: Type safety and better DX
- **qrcode.react**: QR code generation
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: High-quality UI components
- **Lucide React**: Beautiful icons

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance
- **Bundle Size**: Optimized for fast loading
- **Image Processing**: Efficient canvas operations
- **Memory Management**: Proper cleanup of resources

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Add tests if applicable**
5. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Use meaningful component and variable names
- Add proper type definitions
- Test your changes thoroughly
- Update documentation as needed

## 🙏 Acknowledgments

- **qrcode.react** - Excellent QR code generation library
- **shadcn/ui** - Beautiful, accessible UI components
- **Vercel** - Amazing deployment platform
- **Tailwind CSS** - Fantastic utility-first CSS framework

---

**Made with ❤️ by Hamzeh-Dev**

⭐ **Star this repo if you found it helpful!**

```