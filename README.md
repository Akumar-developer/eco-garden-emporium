# Dockerized Vite + React Web Application

## Overview

This project demonstrates the containerization and CI/CD automation of a modern web application using Docker and GitHub Actions. The primary objective of this repository is to showcase practical DevOps skills including Docker image creation, multi-stage builds, and automated image publishing to Docker Hub — independent of the local development environment.

The base web application is a Vite + React frontend, used here as a sample workload to focus on containerization and deployment workflows.

---

## Key Features

* Dockerized modern Vite + React application
* Multi-stage Docker build for optimized production images
* Automated Docker image build using GitHub Actions
* Secure authentication and image publishing to Docker Hub
* No local Docker installation required (cloud-based CI)

---

## Tech Stack

* **Frontend:** Vite, React, TypeScript
* **Containerization:** Docker
* **CI/CD:** GitHub Actions
* **Image Registry:** Docker Hub
* **Base Images:** Node.js (build stage), Nginx (production stage)

---

## Project Structure

```
.
├── .github/workflows/
│   └── docker-build.yml
├── Dockerfile
├── package.json
├── package-lock.json
├──src/
├── public/
└── README.md

```

---

## Dockerization Approach

### Multi-Stage Docker Build

The application uses a multi-stage Dockerfile:

1. **Build Stage**

   * Uses Node.js Alpine image
   * Installs dependencies
   * Builds optimized static assets

2. **Production Stage**

   * Uses Nginx Alpine image
   * Serves pre-built static files
   * Results in a lightweight and production-ready container image

This approach significantly reduces the final image size and improves runtime performance.

---

## CI/CD Pipeline (GitHub Actions)

A GitHub Actions workflow is configured to run on every push to the `main` branch.

### Pipeline Steps:

1. Checkout source code
2. Authenticate to Docker Hub using GitHub Secrets
3. Build Docker image on a GitHub-hosted Ubuntu runner
4. Push the image to Docker Hub with the `latest` tag

All Docker operations are executed in the cloud; no local Docker installation is required.

---

## Docker Image

The Docker image is published to Docker Hub:

```
<dockerhub-akrdev>/my-web-app:latest
```

To pull and run the image locally (Docker required):

```bash
docker pull <dockerhub-akrdev>/my-web-app:latest
docker run -p 80:80 <dockerhub-username>/my-web-app:latest
```

---

## Local Development (Optional)

```bash
npm install
npm run dev
```

---

## Security & Best Practices

* Docker Hub credentials stored securely using GitHub Actions secrets
* No secrets committed to the repository
* Minimal production image using Nginx
* Deterministic builds via locked dependencies

---

## Notes

The base UI of this application was generated using an AI-assisted tool. The focus of this project is on Dockerization, CI/CD automation, and deployment best practices rather than frontend design.

---

## Resume Highlights

* Containerized a modern web application using Docker and multi-stage builds
* Implemented CI/CD pipeline with GitHub Actions to automate Docker image builds and publishing
* Used GitHub-hosted Linux runners for cloud-based container builds
* Published and versioned Docker images on Docker Hub

---

## Author

**<Your Name>**
Arun kumar

---

## License

This project is intended for educational and portfolio purposes.


