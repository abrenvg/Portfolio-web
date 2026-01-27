
import React from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import './Contact.css';

const Contact = () => {
    const { title, description } = content.contact;
    const { email } = content.about.details.find(d => d.label === "Email") || { value: "abrenvgigimon@gmail.com" };

    return (
        <section id="contact" className="section contact-section">
            <div className="container contact-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">{title}</h2>
                    <p className="contact-description">{description}</p>
                </motion.div>

                <motion.form
                    className="contact-form"
                    onSubmit={(e) => e.preventDefault()}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="form-group">
                        <input type="text" placeholder="Your Name" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <input type="email" placeholder="Your Email" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" rows="5" className="form-input" required></textarea>
                    </div>
                    <button type="submit" className="contact-button submit-btn">
                        Send Message
                    </button>
                </motion.form>

                <footer className="footer">
                    <p>© {new Date().getFullYear()} Abren V Gigimon. Built with React & Vite.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
