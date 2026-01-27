
import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import './Hero.css';

const Hero = () => {
    const { title, subtitle, description, cta } = content.hero;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="hero">
            <div className="hero-background"></div>
            <div className="container hero-container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="hero-content"
                >
                    <motion.h1 variants={itemVariants} className="hero-title">
                        Hi, I'm <br />
                        <span className="highlight">{title}</span>
                    </motion.h1>
                    <motion.h2 variants={itemVariants} className="hero-subtitle">{subtitle}</motion.h2>
                    <motion.p variants={itemVariants} className="hero-description">{description}</motion.p>
                    <motion.div variants={itemVariants} className="hero-buttons">
                        <a href="#contact" className="cta-button primary">{cta}</a>
                        <a href={content.hero.resume} target="_blank" rel="noopener noreferrer" className="cta-button secondary">View Resume</a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
