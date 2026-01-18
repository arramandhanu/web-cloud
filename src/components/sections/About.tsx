import styles from './About.module.css'

export function About() {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.left}>
                        <div className={styles.codeWindow}>
                            <div className={styles.codeHeader}>
                                <span className={styles.dot} style={{ background: '#ff5f56' }} />
                                <span className={styles.dot} style={{ background: '#ffbd2e' }} />
                                <span className={styles.dot} style={{ background: '#27c93f' }} />
                                <span className={styles.fileName}>about.yaml</span>
                            </div>
                            <pre className={styles.code}>
                                {`name: "Arya Ramandhanu"
role: "Senior DevOps Engineer"
location: "Indonesia"
experience:
  infrastructure: "15+ years"
  devops: "8+ years"
  cloud: "AWS, GCP, Azure,
          Alibaba Cloud, OCI"
specializations:                                 
  - "Kubernetes"
  - "Cloud Native"
  - "Terraform"
  - "CI/CD Pipelines"
  - "GitOps"
  - "Security"
certification:
  - "FinOps Certified"`}
                            </pre>
                        </div>
                    </div>

                    <div className={styles.right}>
                        <span className={styles.label}>ABOUT ME</span>
                        <h2 className={styles.title}>DevOps Engineer & Cloud Architect</h2>
                        <p className={styles.description}>
                            With over 15 years of infrastructure experience and 8+ years specializing in
                            DevOps and cloud engineering, I help organizations build scalable, reliable,
                            and automated infrastructure solutions.
                        </p>

                        <div className={styles.highlights}>
                            <div className={styles.highlight}>
                                <span className={styles.highlightIcon}>🎯</span>
                                <div>
                                    <strong>Infrastructure Automation</strong>
                                    <span>Terraform, Ansible, Pulumi – Automation for everything cloud</span>
                                </div>
                            </div>
                            <div className={styles.highlight}>
                                <span className={styles.highlightIcon}>☸️</span>
                                <div>
                                    <strong>Container Orchestration</strong>
                                    <span>Kubernetes, Docker, Helm – Deploy anywhere at scale</span>
                                </div>
                            </div>
                            <div className={styles.highlight}>
                                <span className={styles.highlightIcon}>🔄</span>
                                <div>
                                    <strong>CI/CD & GitOps</strong>
                                    <span>ArgoCD, GitLab CI, GitHub Actions – Ship with confidence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
