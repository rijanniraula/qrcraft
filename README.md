# QRcraft

A modern, feature-rich QR code generator built with React, TypeScript, and Tailwind CSS. Create customizable QR codes for text, URLs, emails, phone numbers, SMS, WhatsApp, WiFi networks, and social media profiles.

![QRcraft Preview](./preview.png)

## Features

- **Multiple QR Types**: Generate QR codes for:

  - Text content
  - URLs and links
  - Email addresses
  - Phone numbers
  - SMS messages
  - WhatsApp messages
  - WiFi network credentials
  - Social media profiles

- **Customization Options**:

  - Custom colors (foreground and background)
  - Logo embedding
  - Text labels (top and bottom)
  - Border styling (color, width, radius)
  - Frame customization
  - Padding adjustments

- **Modern UI**: Clean, responsive design with a user-friendly interface
- **Export Options**: Download QR codes as images
- **Real-time Preview**: See changes instantly as you customize

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **QR Generation**: qrcode.react
- **Icons**: Lucide React
- **Notifications**: React Toastify
- **Routing**: React Router DOM

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/qrcraft.git
   cd qrcraft
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:

   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```

## Usage

1. **Select QR Type**: Choose from the available QR code types in the selector
2. **Fill Form**: Enter the required information based on the selected type
3. **Customize**: Use the customization panel to modify colors, add logos, and adjust styling
4. **Preview**: See your QR code update in real-time
5. **Download**: Export your customized QR code as an image

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── common/         # Shared components
│   ├── customizations/ # Customization panels
│   ├── forms/          # Form components for different QR types
│   └── ...
├── layouts/            # Layout components
├── lib/                # Utilities and constants
├── pages/              # Page components
├── hooks/              # Custom React hooks
└── ...
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [qrcode.react](https://github.com/zpao/qrcode.react) for QR code generation
- [Radix UI](https://www.radix-ui.com/) for accessible UI primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Lucide React](https://lucide.dev/) for beautiful icons
