
import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import './About.css';

const About = () => {
    const { title, text, details, social } = content.about;

    return (
        <section id="about" className="section bg-secondary">
            <div className="container">
                <h2 className="section-title">{title}</h2>
                <div className="about-content">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="about-text"
                    >
                        <p>{text}</p>
                        <div className="about-details">
                            {details.map((item, index) => (
                                <div key={index} className="detail-item">
                                    <span className="detail-label">{item.label}:</span>
                                    <span className="detail-value">{item.value}</span>
                                </div>
                            ))}
                        </div>

                        <div className="social-links">
                            {social.filter(item => !item.note).map((item, index) => (
                                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <item.icon />
                                </a>
                            ))}
                        </div>

                        {social.filter(item => item.note).map((item, index) => (
                            <div key={`note-${index}`} className="social-note-item" style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <item.icon />
                                </a>
                                <span style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                                    {item.note}
                                </span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="about-image"
                    >
                        {/* Placeholder for image or avatar if applicable later */}
                        <div className="avatar-placeholder"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
