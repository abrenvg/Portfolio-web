
import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import './Skills.css';

const Skills = () => {
    const { title, categories } = content.skills;

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">{title}</h2>
                <div className="skills-grid">
                    {categories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="skill-category-card"
                        >
                            <h3 className="skill-category-title">{category.name}</h3>
                            <div className="skill-tags">
                                {category.items.map((skill, i) => (
                                    <span key={i} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
