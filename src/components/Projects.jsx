
import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import './Projects.css';

const Projects = () => {
    const { title, items } = content.projects;

    return (
        <section id="projects" className="section bg-secondary">
            <div className="container">
                <h2 className="section-title">{title}</h2>
                <div className="projects-grid">
                    {items.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="project-card"
                        >
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
