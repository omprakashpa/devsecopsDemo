# DevSecOps Vulnerable Demo

A purposely vulnerable Node.js application created for demonstrating DevSecOps security scanning using GitHub Actions, Snyk, and Trivy.

> **Warning**
>
> This project is intentionally insecure and should be used only for security training and demonstrations.


---

# Objective

This project demonstrates how multiple security tools identify vulnerabilities during a CI/CD pipeline.

The following scans are included:

- SAST (Static Application Security Testing)
- SCA (Software Composition Analysis)
- Secret Scanning
- Container Image Scanning

---

# Technologies

- Node.js
- Express
- Docker
- GitHub Actions
- Snyk
- Trivy

---

# Project Structure

```

devsecops-vulnerable-demo/

├── .github/
│ └── workflows/
│ └── security-pipeline.yml
│
├── app/
│ ├── app.js
│ ├── routes.js
│ ├── database.js
│ ├── auth.js
│ ├── upload.js
│ ├── config.js
│ ├── package.json
│ └── .env
│
├── Dockerfile
├── .dockerignore
└── README.md

```

---

# Security Pipeline

```

GitHub Push

↓

GitHub Actions

↓

Build Docker Image

↓

Snyk Code (SAST)

↓

Snyk Open Source (SCA)

↓

Trivy Filesystem Scan

↓

Trivy Secret Scan

↓

Trivy Image Scan

↓

Snyk Container Scan

↓

Reports

```

---

# Vulnerabilities Included

## SAST

| File | Vulnerability |
|------|---------------|
| database.js | SQL Injection |
| auth.js | Hardcoded Credentials |
| auth.js | Hardcoded JWT Secret |
| upload.js | Path Traversal |
| routes.js | Reflected XSS |
| config.js | Hardcoded API Key |

---

## SCA

Vulnerable npm packages

- lodash
- minimist
- axios
- validator
- serialize-javascript
- jsonwebtoken

---

## Secret Scanning

The project intentionally contains dummy secrets.

Examples:

- AWS Access Key
- AWS Secret Key
- GitHub Token
- JWT Secret
- Database Password

---

## Container Image

The Docker image intentionally includes:

- Older Node base image
- Root user
- Missing HEALTHCHECK
- Additional packages

---

# Running the Project

Install dependencies

```bash
cd app

npm install
```

Start application

```bash
npm start
```

Application URL

```
http://localhost:3000
```

---

# Demo URLs

SQL Injection

```
/user?id=1
```

Command Injection (Concept Demo)

```
/ping?host=localhost
```

Path Traversal

```
/download?file=test.txt
```

XSS

```
/search?name=John
```

---

# GitHub Actions

Whenever code is pushed to the main branch, GitHub Actions automatically performs:

- Build
- SAST
- SCA
- Secret Scan
- Container Scan

---

# Security Tools

## Snyk

- SAST
- SCA
- Container Image Scan
- Monitoring

## Trivy

- Filesystem Scan
- Secret Scan
- Image Scan

---

