# Tech Innovators - Company Website

A modern, responsive company website built with React.js and Node.js showcasing our IT services, team, and company information.

## 🚀 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Multiple Pages**:
  - Home - Hero section with company overview
  - About - Mission, vision, and company values
  - Services - Comprehensive service offerings
  - Team - Team member profiles and information
  - Contact - Contact form and company information

## 🛠️ Technologies Used

### Frontend
- React.js 18
- React Router DOM for navigation
- React Icons for iconography
- CSS3 with modern features

### Development Tools
- Create React App
- Node.js
- npm/yarn

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tech-innovators-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

   The application will open at [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

This creates an optimized build in the `build/` folder ready for deployment.

## 📁 Project Structure

```
tech-innovators-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Navbar.css
│   │   ├── Footer.js
│   │   └── Footer.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── About.js
│   │   ├── About.css
│   │   ├── Services.js
│   │   ├── Services.css
│   │   ├── Team.js
│   │   ├── Team.css
│   │   ├── Contact.js
│   │   └── Contact.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Customization

### Update Company Information

1. **Company Name & Logo**: Edit `src/components/Navbar.js` and `src/components/Footer.js`
2. **Team Members**: Update the `teamMembers` array in `src/pages/Team.js`
3. **Services**: Modify the `services` array in `src/pages/Services.js`
4. **Contact Info**: Edit contact details in `src/pages/Contact.js` and `src/components/Footer.js`

### Change Colors

Update the CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  /* ... other colors */
}
```

### Add Your Photos

Replace placeholder images in `src/pages/Team.js` with actual team member photos.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Deploy:
   ```bash
   netlify deploy --prod
   ```

## 📝 Assignment Requirements Checklist

- ✅ Built with Node.js and React.js
- ✅ Company information (name, services, particulars)
- ✅ Company background (mission, vision, team)
- ✅ Team member photos and positions
- ✅ Text, images, and video content support
- ✅ Responsive design (works on desktop and mobile)
- ✅ Modern GUI design principles applied

## 👥 Team Members

This website was created by the Tech Innovators team. Update the team information in the Team page to reflect your actual team members.

## 📄 License

This project is created for educational purposes as part of CAT201 Assignment 2.

## 🤝 Contributing

Team members can contribute by:
1. Creating a feature branch
2. Making changes
3. Submitting a pull request

## 📧 Contact

For questions or support, contact us at info@techinnovators.com

---

**Note**: Remember to update team member photos, company information, and customize the content to match your specific company vision before submission!
