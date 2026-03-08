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
                                <div><span className={styles.yamlKey}>name:</span> <span className={styles.yamlString}>"Arya Ramandhanu"</span></div>
                                <div><span className={styles.yamlKey}>role:</span> <span className={styles.yamlString}>"Senior DevOps Engineer & Cloud Architect"</span></div>
                                <div><span className={styles.yamlKey}>location:</span> <span className={styles.yamlString}>"Indonesia"</span></div>
                                <div><span className={styles.yamlKey}>experience:</span></div>
                                <div><span className={styles.yamlIndent} /><span className={styles.yamlKey}>infrastructure:</span> <span className={styles.yamlString}>"15+ years"</span></div>
                                <div><span className={styles.yamlIndent} /><span className={styles.yamlKey}>devops:</span> <span className={styles.yamlString}>"8+ years"</span></div>
                                <div><span className={styles.yamlIndent} /><span className={styles.yamlKey}>cloud:</span> <span className={styles.yamlString}>"AWS, GCP, Azure,</span></div>
                                <div><span className={styles.yamlIndent} /><span className={styles.yamlIndent} /><span className={styles.yamlString}>Alibaba Cloud, OCI"</span></div>
                                <div><span className={styles.yamlKey}>specializations:</span></div>
                                <div><span className={styles.yamlIndent} /><span className={styles.yamlPunctuation}>-</span> <span className={styles.yamlString}>"Kubernetes"</span></div>
                                <div><span className={styles.yamlIndent} /><span className={styles.yamlPunctuation}>-</span> <span className={styles.yamlString}>"Cloud Native Architecture"</span></div>
                                <div><span className={styles.yamlIndent} /><span className={styles.yamlPunctuation}>-</span> <span className={styles.yamlString}>"Terraform / IaC"</span></div>
                                <div><span className={styles.yamlIndent} /><span className={styles.yamlPunctuation}>-</span> <span className={styles.yamlString}>"CI/CD Pipelines"</span></div>
                                <div><span className={styles.yamlIndent} /><span className={styles.yamlPunctuation}>-</span> <span className={styles.yamlString}>"GitOps"</span></div>
                                <div><span className={styles.yamlIndent} /><span className={styles.yamlPunctuation}>-</span> <span className={styles.yamlString}>"DevSecOps & Security"</span></div>
                                <div><span className={styles.yamlIndent} /><span className={styles.yamlPunctuation}>-</span> <span className={styles.yamlString}>"Observability"</span></div>
                                <div><span className={styles.yamlKey}>certifications:</span></div>
                                <div><span className={styles.yamlIndent} /><span className={styles.yamlPunctuation}>-</span> <span className={styles.yamlString}>"FinOps Certified"</span></div>
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
                                <span className={styles.highlightIcon}>🏗️</span>
                                <div>
                                    <strong>Cloud Architecture</strong>
                                    <span>Designing resilient, multi-region cloud-native ecosystems</span>
                                </div>
                            </div>
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
                            <div className={styles.highlight}>
                                <span className={styles.highlightIcon}>📊</span>
                                <div>
                                    <strong>Observability & Monitoring</strong>
                                    <span>Prometheus, Grafana, ELK – Deep visibility and proactive alerting</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
