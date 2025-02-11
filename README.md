# React Portfolio

## Description
This is my personal portfolio website built with React. The portfolio showcases the projects I have developed, along with an "About Me" section and my resume. The website is designed to provide an overview of my skills, experience, and accomplishments in web development.

## Features
- **Navigation Bar:** Allows easy access to different sections of the portfolio.
- **About Me Section:** A brief introduction about my background and skills.
- **Portfolio Section:** Displays six of my projects with links to deployed applications and GitHub repositories.
- **Contact Form:** Enables visitors to reach out to me with validation for required fields.
- **Resume Section:** Contains a downloadable version of my resume.
- **Footer:** Includes links to my professional profiles.

## Technologies Used
- React
- JavaScript (ES6+)
- HTML5 & CSS3
- Tailwind CSS
- Render (for deployment)

## Installation
To run the portfolio locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/jgmaxen/react-portfolio.git
   ```
2. Navigate to the project directory:
   ```sh
   cd react-portfolio
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Deployment
The portfolio is deployed to **Render**. You can view the live version [here](https://jonathanmaxenwebportfolio.onrender.com/).

## Future Enhancements
- Improve accessibility features.
- Add animations for a more interactive user experience.
- Implement a dark mode toggle.

## Contact
If you'd like to connect or collaborate, feel free to reach out through my contact form or via my GitHub profile.

---

**Author:** Jonathan Maxen  
**GitHub:** [jgmaxen](https://github.com/jgmaxen)



## Building for Production

Create a production build:

```bash
npm run build
```

## Deployment

### Docker Deployment

This template includes three Dockerfiles optimized for different package managers:

- `Dockerfile` - for npm
- `Dockerfile.pnpm` - for pnpm
- `Dockerfile.bun` - for bun

To build and run using Docker:

```bash
# For npm
docker build -t my-app .

# For pnpm
docker build -f Dockerfile.pnpm -t my-app .

# For bun
docker build -f Dockerfile.bun -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `npm run build`

```
├── package.json
├── package-lock.json (or pnpm-lock.yaml, or bun.lockb)
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
