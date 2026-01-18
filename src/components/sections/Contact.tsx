'use client'

import { useState } from 'react'
import styles from './Contact.module.css'

// Access key from environment variable (set in .env.local)
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || ''

export function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    name: form.name,
                    email: form.email,
                    subject: form.subject,
                    message: form.message,
                    from_name: 'ramandhanu.cloud Contact Form',
                }),
            })

            const result = await response.json()

            if (result.success) {
                setStatus('sent')
                setForm({ name: '', email: '', subject: '', message: '' })
                setTimeout(() => setStatus('idle'), 3000)
            } else {
                setStatus('error')
                setTimeout(() => setStatus('idle'), 3000)
            }
        } catch {
            setStatus('error')
            setTimeout(() => setStatus('idle'), 3000)
        }
    }

    return (
        <section id="contact" className={styles.contact}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.label}>GET IN TOUCH</span>
                    <h2 className={styles.title}>Let&apos;s Work Together</h2>
                </div>

                <div className={styles.content}>
                    <div className={styles.info}>
                        <h3>Connect</h3>
                        <div className={styles.links}>
                            <a href="https://linkedin.com/in/arya-ramandhanu" target="_blank" rel="noopener noreferrer" className={styles.linkLinkedin}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                LinkedIn
                            </a>
                            <a href="https://github.com/arramandhanu" target="_blank" rel="noopener noreferrer" className={styles.linkGithub}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                GitHub
                            </a>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className={styles.row}>
                            <div className={styles.field}>
                                <label>Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className={styles.field}>
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div className={styles.field}>
                            <label>Subject</label>
                            <input
                                type="text"
                                placeholder="Project inquiry"
                                value={form.subject}
                                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                required
                            />
                        </div>
                        <div className={styles.field}>
                            <label>Message</label>
                            <textarea
                                placeholder="Tell me about your project..."
                                rows={4}
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                required
                            />
                        </div>
                        <button type="submit" className={styles.submit} disabled={status === 'sending'}>
                            {status === 'idle' && 'Send Message'}
                            {status === 'sending' && 'Sending...'}
                            {status === 'sent' && '✓ Sent!'}
                            {status === 'error' && '✗ Error, try again'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
