# Recipe Roots 🍳

A modern, responsive food recipe website that helps users discover and explore delicious recipes from around the world. Built with vanilla JavaScript and powered by TheMealDB API.

## ✨ Features

- **Recipe Search**: Search for recipes by ingredient
- **Recipe Details**: View detailed cooking instructions, ingredients needed, and nutritional information
- **Category Browsing**: Explore recipes by different food categories
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Clean Interface**: Modern, intuitive user interface for seamless browsing experience

## 🛠️ Built With

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with Flexbox/Grid
- **JavaScript (ES6+)** - Dynamic functionality and API integration
- **TheMealDB API** - Recipe data source

## 📋 Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API calls)
- Code editor (VS Code) for development

## ⚡ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/recipe-roots.git
   cd recipe-roots
   ```

2. **Open in your browser**
   - Simply open `index.html` in your preferred web browser
   - Or use a local server for development:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with live-server)
   npx live-server
   ```

3. **Start exploring recipes!**
   - No API key required - TheMealDB free tier is used
   - All functionality should work immediately

## 📁 Project Structure

```
recipe-roots/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── assets/
│   └── images/         # Static images and icons
└── README.md           # Project documentation
```

## 🎯 Usage

1. **Search Recipes**: Use the search bar to find recipes by name or ingredient
2. **Browse Categories**: Click on category buttons to explore different types of cuisine
3. **View Recipe Details**: Click on any recipe card to see full cooking instructions
4. **Responsive Navigation**: Works seamlessly across all device sizes

## 🔧 API Integration

This project uses [TheMealDB API](https://www.themealdb.com/api.php) which provides:

- Free tier with recipe data
- Search by meal name, ingredient, or category
- Detailed recipe information including ingredients and instructions
- High-quality food images

### API Endpoints Used:
- `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
- `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${instructions}`

## 🎨 Customization

Feel free to customize the website by:

- **Colors**: Modify CSS variables in `style.css`
- **Layout**: Adjust grid/flexbox properties for different layouts
- **Features**: Add new functionality in `script.js`
- **Content**: Integrate additional recipe APIs or add custom recipes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- [TheMealDB](https://www.themealdb.com/) for providing the free recipe API
- Food photographers and recipe contributors on TheMealDB
- Open source community for inspiration and resources

## 📞 Contact

Ahamed Shareef Deen - [ahamedshariffdeen@gmail.com](mailto:ahamedshariffdeen@gmail.com)

Project Link: [https://github.com/Shareef-deen21/Food-Recipe_Website](https://github.com/Shareef-deen21/Food-Recipe_Website)


Made with ❤️ and JavaScript