'use client'

import { useState, useEffect, useCallback } from 'react'
import styles from './Projects.module.css'

const projects = [
    {
        title: 'Kubernetes Platform',
        description: [
            'Architected enterprise-grade Kubernetes platform with GitOps principles.',
            'Ensured high availability and self-healing multi-region clusters.',
            'Implemented seamless zero-downtime microservice deployments.'
        ],
        technologies: ['Kubernetes', 'ArgoCD', 'Prometheus', 'Terraform'],
        link: 'https://github.com/arramandhanu',
    },
    {
        title: 'CI/CD Pipeline Framework',
        description: [
            'Built reusable CI/CD templates for GitLab CI and GitHub Actions.',
            'Integrated automated security and vulnerability scanning into pipelines.',
            'Accelerated deployment strategies while ensuring strict compliance.'
        ],
        technologies: ['GitLab CI', 'GitHub Actions', 'Docker'],
        link: 'https://github.com/arramandhanu',
    },
    {
        title: 'Serverless Data Pipeline',
        description: [
            'Designed event-driven data processing architecture using AWS native services.',
            'Engineered high-throughput ingestion with optimized cost-efficiency.',
            'Leveraged DynamoDB and SQS for resilient real-time analytics.'
        ],
        technologies: ['AWS Lambda', 'DynamoDB', 'Python', 'SQS'],
        link: 'https://github.com/arramandhanu',
    },
    {
        title: 'Infrastructure Automation',
        description: [
            'Developed multi-cloud infrastructure automation using modular Terraform.',
            'Enforced strict state management and environment parity.',
            'Orchestrated rapid disaster recovery procedures using Ansible.'
        ],
        technologies: ['Terraform', 'Ansible', 'AWS', 'GCP'],
        link: 'https://github.com/arramandhanu',
    },
    {
        title: 'Monitoring Dashboard System',
        description: [
            'Deployed centralized observability stack for comprehensive metrics logging.',
            'Integrated distributed tracing to pinpoint performance bottlenecks.',
            'Configured proactive alerting to notify teams before critical outages.'
        ],
        technologies: ['Grafana', 'ELK Stack', 'DataDog'],
        link: 'https://github.com/arramandhanu',
    },
    {
        title: 'Internal Developer Portal',
        description: [
            'Launched self-service portal empowering developers to scaffold new services.',
            'Unified internal interface for managing existing cloud resources securely.',
            'Reduced developer onboarding time and minimized operational bottlenecks.'
        ],
        technologies: ['Backstage', 'React', 'Node.js', 'PostgreSQL'],
        link: 'https://github.com/arramandhanu',
    },
]

export function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false)

    const nextProject = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, [])

    const prevProject = useCallback(() => {
        setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
    }, [])

    // Robust Auto-slide effect
    useEffect(() => {
        if (isHovered) return

        const autoPlayTimer = setInterval(nextProject, 4000)
        return () => clearInterval(autoPlayTimer)
    }, [isHovered, nextProject, currentIndex])

    // We'll show 1 project at a time in the slider.
    const project = projects[currentIndex]

    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>PORTFOLIO</span>
                    <h2 className={styles.title}>Projects</h2>
                </div>

                <div
                    className={styles.sliderContainer}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <button onClick={prevProject} className={styles.sliderBtn} aria-label="Previous project">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </button>

                    <div className={styles.sliderWindow}>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.card}
                            key={currentIndex} // Forces CSS animation remount logic
                        >
                            <div className={styles.cardHeader}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <div className={styles.cardArrow}>↗</div>
                            </div>
                            <ul className={styles.cardDescriptionList}>
                                {Array.isArray(project.description) ? project.description.map((point, i) => (
                                    <li key={i}>{point}</li>
                                )) : <li>{project.description}</li>}
                            </ul>
                            <div className={styles.technologies}>
                                {project.technologies.map((tech) => (
                                    <span key={tech} className={styles.tech}>{tech}</span>
                                ))}
                            </div>
                        </a>
                    </div>

                    <button onClick={nextProject} className={styles.sliderBtn} aria-label="Next project">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>

                <div className={styles.sliderIndicators}>
                    {projects.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`${styles.indicator} ${idx === currentIndex ? styles.activeIndicator : ''}`}
                            aria-label={`Go to project ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
