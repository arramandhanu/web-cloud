# 🔧 Deployment Guide

Complete setup instructions for deploying ramandhanu.cloud.

---

## 📋 Table of Contents

- [Local Development](#-local-development)
- [Docker Deployment](#-docker-deployment)
- [VPS Deployment](#-vps-deployment)
- [Nginx Proxy](#-nginx-reverse-proxy)
- [Environment Variables](#-environment-variables)

---

## 💻 Local Development

### Prerequisites

| Requirement | Version |
|-------------|---------|
| Node.js | 20+ |
| npm | 10+ |

### Setup

```bash
# Clone repository
git clone https://github.com/arramandhanu/ramandhanu.cloud.git
cd ramandhanu.cloud

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Edit .env.local
nano .env.local
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🐳 Docker Deployment

### Option 1: Build Locally

```bash
# Build image with build args
docker build -t aryaramandhanu/ramandhanu-cloud:latest \
  --build-arg NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here .

# Run container
docker run -d \
  --name ramandhanu-cloud \
  -p 3000:3000 \
  --restart unless-stopped \
  aryaramandhanu/ramandhanu-cloud:latest
```

### Option 2: Docker Compose

```bash
# Create .env.local
cat > .env.local << EOF
NEXT_PUBLIC_WEB3FORMS_KEY=your_web3forms_key_here
EOF

# Build and start
docker-compose up -d --build

# View logs
docker-compose logs -f ramandhanu-cloud

# Stop
docker-compose down
```

### Option 3: Pull from Docker Hub

```bash
# Pull latest image
docker pull aryaramandhanu/ramandhanu-cloud:latest

# Run
docker run -d \
  --name ramandhanu-cloud \
  -p 3000:3000 \
  --restart unless-stopped \
  aryaramandhanu/ramandhanu-cloud:latest
```

---

## 🐧 VPS Deployment

### Server Requirements

- Rocky Linux / CentOS / Ubuntu
- Docker installed
- 1GB RAM minimum
- 10GB disk space

### Install Docker (Rocky Linux)

```bash
# Install Docker
sudo dnf config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
sudo dnf install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo systemctl enable --now docker

# Add user to docker group
sudo usermod -aG docker $USER
newgrp docker
```

### Deploy

```bash
# Create project directory
mkdir -p ~/apps/ramandhanu-cloud
cd ~/apps/ramandhanu-cloud

# Create docker-compose.yml
cat > docker-compose.yml << 'EOF'
services:
  ramandhanu-cloud:
    image: aryaramandhanu/ramandhanu-cloud:latest
    ports:
      - "3000:3000"
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "wget", "-q", "--spider", "http://localhost:3000"]
      interval: 30s
      timeout: 10s
      retries: 3
EOF

# Pull and run
docker-compose up -d
```

---

## 🌐 Nginx Reverse Proxy

### Install Nginx

```bash
# Rocky Linux / CentOS
sudo dnf install -y nginx
sudo systemctl enable --now nginx

# Ubuntu
sudo apt install -y nginx
sudo systemctl enable --now nginx
```

### Configure Virtual Host

```bash
sudo nano /etc/nginx/conf.d/ramandhanu.cloud.conf
```

```nginx
# HTTP to HTTPS redirect
server {
    listen 80;
    server_name ramandhanu.cloud www.ramandhanu.cloud;
    return 301 https://$host$request_uri;
}

# HTTPS
server {
    listen 443 ssl http2;
    server_name ramandhanu.cloud www.ramandhanu.cloud;

    # SSL certificates (Let's Encrypt)
    ssl_certificate /etc/letsencrypt/live/ramandhanu.cloud/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ramandhanu.cloud/privkey.pem;

    # SSL settings
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256;

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
    add_header Content-Security-Policy "upgrade-insecure-requests" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Proxy to Next.js
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Get SSL Certificate

```bash
# Install Certbot
sudo dnf install -y certbot python3-certbot-nginx  # Rocky Linux
sudo apt install -y certbot python3-certbot-nginx  # Ubuntu

# Get certificate
sudo certbot --nginx -d ramandhanu.cloud -d www.ramandhanu.cloud

# Auto-renewal test
sudo certbot renew --dry-run
```

### Apply Configuration

```bash
# Test config
sudo nginx -t

# Reload
sudo systemctl reload nginx
```

---

## 🔐 Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Yes | API key from [web3forms.com](https://web3forms.com) |

### Get Web3Forms Key

1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email address
3. Check email for API key
4. Add to `.env.local` or Docker build args

---

## 📋 Useful Commands

```bash
# View running containers
docker ps

# View logs
docker logs -f ramandhanu-cloud

# Restart container
docker restart ramandhanu-cloud

# Update to latest
docker-compose pull
docker-compose up -d

# Clean up unused images
docker image prune -f
```

---

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Change port mapping: `-p 8080:3000` |
| Container not starting | Check logs: `docker logs ramandhanu-cloud` |
| Contact form not working | Verify `NEXT_PUBLIC_WEB3FORMS_KEY` is set |
| SSL errors | Ensure certificates are valid and paths correct |

---

<p align="center">
  <sub>📄 MIT License • Built with ❤️</sub>
</p>
