# Dockerized Vite + React Web Application

## Overview

This project demonstrates the containerization and CI automation of a modern web application using Docker and GitHub Actions. The primary objective of this repository is to showcase practical DevOps skills including Docker image creation and automated image publishing to Docker Hub — independent of the local development environment.

The base web application is a Vite + React frontend, used here as a sample workload to focus on containerization and deployment workflows.

---

## Key Features

* Dockerized modern Vite + React application
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

The application uses a build-stage Dockerfile:

 **Build Stage**

   * Uses Node.js Alpine image
   * Installs dependencies
   * Builds optimized static assets

This approach significantly reduces the final image size and improves runtime performance.

---

## CI Pipeline (GitHub Actions)

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
<dockerhub-[username]>/my-web-app:latest
```

To pull and run the image locally (Docker required):

```bash
docker pull <dockerhub-[username]>/my-web-app:latest
docker run -p 80:80 <dockerhub-[username]>/my-web-app:latest
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

---

## Kubernetes Deployment

[#kubernetes-deployment](#kubernetes-deployment)

Beyond containerization, this project includes Kubernetes manifests to deploy the Dockerized app on a cluster — validated locally using Kind (Kubernetes in Docker) before any cloud deployment.

### Why Kubernetes, After Docker

Docker solves packaging and single-host running. It doesn't solve: what happens when the container crashes, how you scale to multiple replicas, or how other services discover this one without hardcoded IPs. That's the gap Kubernetes closes — orchestration on top of the containers Docker builds.

### Resources

| Resource | Purpose |
|---|---|
| `Deployment` | Manages replica count, rolling updates, and restarts the Pod automatically if the container crashes |
| `Service` (ClusterIP) | Gives the Deployment's Pods a stable internal DNS name and IP — Pods are ephemeral and get replaced with new IPs on every restart, the Service is what stays constant |

**Why ClusterIP specifically:** ClusterIP only exposes the app *inside* the cluster — no external access by design. This mirrors the Docker networking principle from earlier in this repo: decide what's internal-only vs. what should be exposed before you open anything up. For actual external access, this would need a `NodePort`, `LoadBalancer`, or an `Ingress` layered on top — a deliberate next decision, not a default.

### Local Testing with Kind

The `kind_cluster/` directory contains the Kind cluster configuration used to test these manifests locally — a real Kubernetes API and control plane running in Docker containers, without needing a cloud cluster (EKS/GKE) just to validate that manifests apply cleanly and Pods reach Ready state.

```bash
# Create the local cluster
kind create cluster --config kind_cluster/kind-config.yaml

# Apply the manifests
kubectl apply -f k8s-specs/

# Verify
kubectl get deployments
kubectl get services
kubectl get pods

# Access the ClusterIP service locally (since it has no external IP)
kubectl port-forward service/<service-name> 8080:80
```

### What This Demonstrates

- Translating a Dockerized app into declarative Kubernetes manifests
- Understanding Service types and choosing ClusterIP deliberately, not by default
- Using Kind for fast local iteration before touching a real cloud cluster
- Applying the same "what's internal vs. exposed" thinking from Docker networking to Kubernetes Services


---
## Notes

The base UI of this application was generated using an AI-assisted tool. The focus of this project is on Dockerization, CI automation, and push the docker image to docker hub for further practices.


## Author

**<Your Name>**
Arun kumar

---



