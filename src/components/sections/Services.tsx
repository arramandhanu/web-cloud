import styles from './Services.module.css'

const services = [
    {
        icon: 'https://cdn.simpleicons.org/terraform/844FBA',
        title: 'Infrastructure as Code',
        description: 'Automate infrastructure with Terraform, Ansible, and Pulumi.',
        features: ['Terraform', 'Ansible', 'State management', 'Multi-cloud'],
    },
    {
        icon: 'https://cdn.simpleicons.org/githubactions/2088FF',
        title: 'CI/CD Pipelines',
        description: 'Robust continuous integration and deployment pipelines.',
        features: ['GitLab CI', 'GitHub Actions', 'ArgoCD', 'Blue-green'],
    },
    {
        icon: 'https://cdn.simpleicons.org/icloud/3693F3',
        title: 'Cloud Architecture',
        description: 'Scalable solutions across AWS, GCP, Azure, and more.',
        features: ['AWS/GCP/Azure', 'Cost optimization', 'Security', 'HA'],
    },
    {
        icon: 'https://cdn.simpleicons.org/kubernetes/326CE5',
        title: 'Kubernetes',
        description: 'Container orchestration for scalability and reliability.',
        features: ['Cluster setup', 'Helm charts', 'Service mesh', 'Scaling'],
    },
    {
        icon: 'https://cdn.simpleicons.org/prometheus/E6522C',
        title: 'Monitoring',
        description: 'Comprehensive observability with Prometheus and Grafana.',
        features: ['Prometheus', 'Grafana', 'ELK Stack', 'Alerting'],
    },
    {
        icon: 'https://cdn.simpleicons.org/vault/FFEC6E',
        title: 'Security',
        description: 'Security best practices and secrets management.',
        features: ['Vault', 'RBAC', 'Compliance', 'Audit'],
    },
]

export function Services() {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>WHAT I DO</span>
                    <h2 className={styles.title}>Services</h2>
                </div>

                <div className={styles.grid}>
                    {services.map((service) => (
                        <div key={service.title} className={styles.card}>
                            <img
                                src={service.icon}
                                alt={service.title}
                                width={36}
                                height={36}
                                className={styles.icon}
                            />
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                            <div className={styles.features}>
                                {service.features.map((feature) => (
                                    <span key={feature} className={styles.feature}>{feature}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
