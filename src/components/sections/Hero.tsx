'use client'

import { useState, useEffect } from 'react'
import styles from './Hero.module.css'

const specialties = [
    'Kubernetes',
    'Terraform',
    'CI/CD Pipelines',
    'Cloud Architecture',
    'GitOps',
]

export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const current = specialties[currentIndex]
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < current.length) {
                    setDisplayText(current.slice(0, displayText.length + 1))
                } else {
                    setTimeout(() => setIsDeleting(true), 2000)
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(current.slice(0, displayText.length - 1))
                } else {
                    setIsDeleting(false)
                    setCurrentIndex((prev) => (prev + 1) % specialties.length)
                }
            }
        }, isDeleting ? 50 : 100)

        return () => clearTimeout(timeout)
    }, [displayText, isDeleting, currentIndex])

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.dot}></span>
                        <span>Available for projects</span>
                    </div>

                    <h1 className={styles.title}>
                        Hi, I&apos;m <span className={styles.name}>Arya</span><br />
                        <span className={styles.name}>Ramandhanu</span>
                    </h1>

                    <div className={styles.specialtyWrapper}>
                        <span className={styles.specialtyLabel}>$ expertise --show</span>
                        <div className={styles.specialty}>
                            <span className={styles.typing}>{displayText}</span>
                            <span className={styles.cursor}></span>
                        </div>
                    </div>

                    <p className={styles.description}>
                        DevOps Engineer & Cloud Architect with 15+ years of infrastructure experience.
                        Building robust, scalable systems across AWS, GCP, and Azure.
                    </p>

                    <div className={styles.actions}>
                        <a href="#contact" className={styles.btnPrimary}>
                            Let&apos;s Talk
                        </a>
                        <a href="#projects" className={styles.btnSecondary}>
                            View Work
                        </a>
                    </div>

                    <div className={styles.stats}>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>15+</span>
                            <span className={styles.statLabel}>Years Infra</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>8+</span>
                            <span className={styles.statLabel}>Years DevOps</span>
                        </div>
                        <div className={styles.stat}>
                            <span className={styles.statNumber}>10+</span>
                            <span className={styles.statLabel}>Projects</span>
                        </div>
                    </div>
                </div>

                <div className={styles.visual}>
                    <div className={styles.terminalWindow}>
                        <div className={styles.terminalHeader}>
                            <span className={styles.terminalDot} style={{ background: '#ff5f56' }}></span>
                            <span className={styles.terminalDot} style={{ background: '#ffbd2e' }}></span>
                            <span className={styles.terminalDot} style={{ background: '#27c93f' }}></span>
                            <span className={styles.terminalTitle}>terminal</span>
                        </div>
                        <div className={styles.terminalBody}>
                            <div className={styles.terminalLine}><span className={styles.prompt}>$</span> kubectl get pods -A</div>
                            <div className={styles.terminalLine}><span className={styles.prompt}>$</span> terraform plan</div>
                            <div className={styles.terminalLine}><span className={styles.prompt}>$</span> docker build -t app .</div>
                            <div className={styles.terminalLine}><span className={styles.prompt}>$</span> ansible-playbook deploy.yml</div>
                            <div className={styles.terminalLine}><span className={styles.prompt}>$</span> argocd sync app</div>
                            <div className={styles.terminalLine}><span className={styles.prompt}>$</span> helm upgrade --install</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bgGlow}></div>
        </section>
    )
}
