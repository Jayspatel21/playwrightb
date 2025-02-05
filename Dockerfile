# Use an official Node.js runtime as the base image
FROM node:18-slim

# Set the working directory
WORKDIR /app

# Install dependencies for Playwright in a single layer and clean up after installation
RUN apt-get update && apt-get install -y --no-install-recommends \
  wget \
  libx11-xcb1 \
  libnss3 \
  libatk-bridge2.0-0 \
  libgtk-3-0 \
  libgbm-dev \
  libasound2 \
  libdrm2 \
  && rm -rf /var/lib/apt/lists/*

# Install Playwright and browsers
RUN npx playwright install --with-deps

# Copy only package files to leverage Docker cache for faster builds
COPY package.json package-lock.json ./

# Install node dependencies (this layer is cached if package files don't change)
RUN npm install --production

# Copy the rest of the application files (only after installing dependencies)
COPY . .

# Run Playwright tests by default
CMD ["npx", "playwright", "test", "example.spec.js"]
