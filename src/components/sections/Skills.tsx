import Image from 'next/image'
import styles from './Skills.module.css'

const skillCategories = [
    {
        name: 'Cloud Platforms',
        skills: [
            { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
            { name: 'GCP', icon: 'https://cdn.simpleicons.org/googlecloud/4285F4' },
            { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
            { name: 'Alibaba', icon: 'https://cdn.simpleicons.org/alibabacloud/FF6A00' },
            { name: 'OCI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
        ],
    },
    {
        name: 'Containers',
        skills: [
            { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
            { name: 'Kubernetes', icon: 'https://cdn.simpleicons.org/kubernetes/326CE5' },
            { name: 'Helm', icon: 'https://cdn.simpleicons.org/helm/0F1689' },
            { name: 'Podman', icon: 'https://cdn.simpleicons.org/podman/892CA0' },
        ],
    },
    {
        name: 'CI/CD & GitOps',
        skills: [
            { name: 'GitLab CI', icon: 'https://cdn.simpleicons.org/gitlab/FC6D26' },
            { name: 'GitHub Actions', icon: 'https://cdn.simpleicons.org/githubactions/2088FF' },
            { name: 'ArgoCD', icon: 'https://cdn.simpleicons.org/argo/EF7B4D' },
            { name: 'Jenkins', icon: 'https://cdn.simpleicons.org/jenkins/D24939' },
        ],
    },
    {
        name: 'IaC',
        skills: [
            { name: 'Terraform', icon: 'https://cdn.simpleicons.org/terraform/844FBA' },
            { name: 'Ansible', icon: 'https://cdn.simpleicons.org/ansible/EE0000' },
            { name: 'Pulumi', icon: 'https://cdn.simpleicons.org/pulumi/8A3391' },
        ],
    },
    {
        name: 'Monitoring',
        skills: [
            { name: 'Prometheus', icon: 'https://cdn.simpleicons.org/prometheus/E6522C' },
            { name: 'Grafana', icon: 'https://cdn.simpleicons.org/grafana/F46800' },
            { name: 'Datadog', icon: 'https://cdn.simpleicons.org/datadog/632CA6' },
        ],
    },
    {
        name: 'Programming',
        skills: [
            { name: 'Python', icon: 'https://cdn.simpleicons.org/python/3776AB' },
            { name: 'Go', icon: 'https://cdn.simpleicons.org/go/00ADD8' },
            { name: 'Bash', icon: 'https://cdn.simpleicons.org/gnubash/4EAA25' },
        ],
    },
    {
        name: 'Security',
        skills: [
            { name: 'Vault', icon: 'https://cdn.simpleicons.org/vault/FFEC6E' },
            { name: 'Cloudflare', icon: 'https://cdn.simpleicons.org/cloudflare/F38020' },
        ],
    },
    {
        name: 'OS',
        skills: [
            { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux/FCC624' },
            { name: 'Ubuntu', icon: 'https://cdn.simpleicons.org/ubuntu/E95420' },
            { name: 'Rocky', icon: 'https://cdn.simpleicons.org/rockylinux/10B981' },
        ],
    },
]

export function Skills() {
    return (
        <section id="skills" className={styles.skills}>
            <div className={styles.container}>
                <div className={styles.layout}>
                    <div className={styles.main}>
                        <span className={styles.label}>EXPERTISE</span>
                        <h2 className={styles.title}>Technical Skills</h2>

                        <div className={styles.categories}>
                            {skillCategories.map((category) => (
                                <div key={category.name} className={styles.category}>
                                    <h3 className={styles.categoryName}>{category.name}</h3>
                                    <div className={styles.skillGrid}>
                                        {category.skills.map((skill) => (
                                            <div key={skill.name} className={styles.skill}>
                                                <img
                                                    src={skill.icon}
                                                    alt={skill.name}
                                                    width={14}
                                                    height={14}
                                                    className={styles.skillIcon}
                                                />
                                                <span className={styles.skillName}>{skill.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.sidebar}>
                        <div className={styles.certCard}>
                            <h3 className={styles.certTitle}>Certification</h3>
                            <a
                                href="https://www.credly.com/badges/134420c2-c7a1-4ee1-aa1d-763f47066441"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.certBadge}
                            >
                                <Image
                                    src="/finops-badge.png"
                                    alt="FinOps Certified Engineer"
                                    width={140}
                                    height={140}
                                    className={styles.certImage}
                                />
                                <span className={styles.certName}>FinOps Certified</span>
                                <span className={styles.certOrg}>FinOps Foundation</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
