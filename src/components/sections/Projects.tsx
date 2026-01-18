import styles from './Projects.module.css'

const projects = [
    {
        title: 'Kubernetes Platform',
        description: 'Enterprise-grade Kubernetes platform with GitOps, monitoring, and auto-scaling.',
        technologies: ['Kubernetes', 'ArgoCD', 'Prometheus', 'Terraform'],
        link: 'https://github.com/arramandhanu',
    },
    {
        title: 'CI/CD Pipeline Framework',
        description: 'Reusable CI/CD templates for GitLab CI and GitHub Actions with security scanning.',
        technologies: ['GitLab CI', 'GitHub Actions', 'Docker', 'SonarQube'],
        link: 'https://github.com/arramandhanu',
    },
    {
        title: 'Infrastructure Automation',
        description: 'Multi-cloud infrastructure automation using Terraform modules and Ansible.',
        technologies: ['Terraform', 'Ansible', 'AWS', 'GCP'],
        link: 'https://github.com/arramandhanu',
    },
]

export function Projects() {
    return (
        <section id="projects" className={styles.projects}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>PORTFOLIO</span>
                    <h2 className={styles.title}>Projects</h2>
                </div>

                <div className={styles.grid}>
                    {projects.map((project) => (
                        <a
                            key={project.title}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.card}
                        >
                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{project.title}</h3>
                                <p className={styles.cardDescription}>{project.description}</p>
                                <div className={styles.technologies}>
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className={styles.tech}>{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className={styles.cardArrow}>→</div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
