
import { FaLinkedin, FaGithub, FaEnvelope, FaNewspaper } from 'react-icons/fa';

export const content = {
  hero: {
    title: "Abren V Gigimon",
    subtitle: "Aspiring Computer Science Engineer & Analyst",
    description: "Advancing the frontiers of Data Science by applying ML architectures and discovering their application to the dynamics of human movement and sports.",
    cta: "Contact Me",
    resume: "https://drive.google.com/file/d/1xsP42hFGo9hU8-uPVrBEwNk00YkYB4VW/view?usp=drive_link"
  },
  about: {
    title: "About Me",
    text: "Currently pursuing an MSc in Sports Technology at KTH Royal Institute of Technology, Stockholm, after completing a Bachelor's in Computer Science. I am skilled in Python, C, web technologies, and data analytics, with hands-on experience in academic projects and the development of an AI interview platform. A passionate technology enthusiast who brings teamwork, discipline, and problem-solving skills to contribute to impactful and innovative technological solutions.",
    details: [
      { label: "Location", value: "Stockholm, Sweden" },
      { label: "Email", value: "abrenvgigimon@gmail.com" },
      { label: "Phone", value: "(+46) 767567344" }
    ],
    social: [
      { icon: FaLinkedin, link: "https://www.linkedin.com/in/abren-v-gigimon/", label: "LinkedIn" },
      { icon: FaGithub, link: "https://github.com/abrenvg", label: "GitHub" },
      { icon: FaEnvelope, link: "mailto:abrenvgigimon@gmail.com", label: "Email" },
      { icon: FaNewspaper, link: "https://substack.com/@moneyyball/posts", label: "Substack", note: "I also share insights on sports tech and data through blogs, check it out" }
    ]
  },
  skills: {
    title: "Skills & Expertise",
    categories: [
      {
        name: "Technical Skills",
        items: ["Python", "C", "JavaScript", "React", "HTML/CSS", "Tailwind CSS", "Three.js", "Git"]
      },
      {
        name: "Data Analytics & AI",
        items: ["Machine Learning", "Pandas","SQL", "Scikit-learn","Numpy", "Matplotlib", "Streamlit", "OpenCV", "Video Analytics", "Jupyter Notebook"]
      },
      {
        name: "Sports Tech",
        items: ["IMU Data Analysis", "Motion Analysis", "Sports Data Analytics"]
      }
    ]
  },
  projects: {
    title: "Projects",
    items: [
      {
        title: "ProJump",
        description: "IMU-based jump height calculation in collaboration with Swedish Beach Volleyball. Tracks beach volleyball jump height on sand with a chest-worn IMU, giving live counts and height per jump using vertical acceleration fusion.",
        tags: ["IMU", "Python", "Data Structure", "Algorithm Design","Sensor Fusion"]
      },
      {
        title: "IMU-based Motion Analysis",
        description: "Data Visualization and Analysis using IMU sensor. Extracted and visualized acceleration and gyroscope data from the Polar Verity Sense. Applied Kalman and EWMA filters to compute orientation parameters.",
        tags: ["Data Analytics", "Signal Processing", "Polar Verity Sense","Filtering Techniques"]
      },
      {
        title: "Soccer App",
        description: "Sports Data Analytics Project in Streamlit. Built a soccer application displaying shot maps of selected players during Euros 2024.",
        tags: ["Streamlit", "Python", "Data Visualization"]
      },
      {
        title: "AI Interviewer",
        description: "Real-time AI interview system with use of LLM to generate questions for an interactive avatar. Included facial expression detection and fluency detection.",
        tags: ["AI", "React", "NLP","Computer Vision", "LLM"]
      }
    ]
  },
  contact: {
    title: "Contact Me",
    description: "Feel free to reach out for collaborations or opportunities in Sports Tech and Software Engineering.",
  }
};
