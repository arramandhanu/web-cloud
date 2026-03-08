#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

echo "🚀 Starting build and push process..."

# Extract the image name from docker-compose.yml using grep and awk
# Assuming the format is exactly: image: aryaramandhanu/ramandhanu-cloud:latest
IMAGE_NAME=$(grep -E '^\s*image:' docker-compose.yml | awk '{print $2}' | tr -d '"'\''')

if [ -z "$IMAGE_NAME" ]; then
    echo "❌ Error: Could not extract image name from docker-compose.yml"
    exit 1
fi

echo "📦 Found image tag: $IMAGE_NAME"

echo "🔨 Building Docker image..."
docker build -t "$IMAGE_NAME" .

echo "☁️ Pushing Docker image to registry..."
docker push "$IMAGE_NAME"

echo "✅ Successfully built and pushed $IMAGE_NAME!"
