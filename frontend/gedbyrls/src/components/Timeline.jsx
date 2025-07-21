import React from "react";
import { motion } from "framer-motion";
import "./style/timeline.css";
import TimelineIMG from "../assets/timeline_image.png";

export default function Timeline({ steps }) {
  return (
    <section className="timeline-section">
      <h2 className="section-title">Comment se déroule la signature avec Zeendoc ?</h2>
      <div className="timeline-wrapper">
        <div className="timeline">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="timeline-step"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="timeline-bullet">{index + 1}</div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="timeline-image-wrapper">
          <img src={TimelineIMG} alt="Timeline illustration" className="timeline-image" />
        </div>
      </div>
    </section>
  );
}