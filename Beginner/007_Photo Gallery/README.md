# React Photo Gallery with CDN Images

A responsive photo gallery built with React and Vite that displays images from CDN sources with a clean, modern interface.

## Features

- 🖼️ Responsive grid layout
- 🔍 Modal view for full-size images
- 🎨 Modern, attractive UI with hover effects
- 📱 Mobile-friendly design
- ⚡ Fast loading with CDN images
- 🎯 Easy to customize and extend

## Project Structure

```
photo-gallery/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Gallery.jsx
│   │   └── ImageModal.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── App.css
├── package.json
└── vite.config.js
```

## Installation

1. Clone or download the project files
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the local server address (typically http://localhost:5173)

## Customization

### Adding Your Own Images

Edit the `images` array in `src/components/Gallery.jsx`:

```javascript
const images = [
  {
    id: 1,
    url: 'https://your-cdn-url.com/image1.jpg',
    alt: 'Image description',
    title: 'Image Title',
    description: 'Image description text'
  },
  // Add more images as needed
];
```

### Styling

Modify the CSS in `src/App.css` to customize the appearance:
- Change colors in the gradient
- Adjust grid layout
- Modify modal styling

## Technologies Used

- React 18
- Vite
- CSS3 with Flexbox/Grid
- CDN images (from Picsum Photos in the example)

## Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.