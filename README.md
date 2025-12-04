# 🏥 Healthcare Wellness & Preventive Care Portal (MVP)

> **HCLTech Hackathon Submission**  
> **Track:** Healthcare & Life Sciences  
> **Stack:** MERN (MongoDB, Express, React, Node.js)

## 📖 Project Overview

This project is a secure, role-based web portal designed to bridge the gap between patients and healthcare providers. Built under a strict 5-hour MVP constraint, it focuses on preventive care tracking (Steps, Sleep, Water) and ensures HIPAA-style compliance through robust audit logging and strict access control.

## 🎯 Key Problem Solved

Healthcare providers often lack real-time visibility into a patient's daily habits, and patients lack a secure, easy way to share this data. This portal allows patients to log daily metrics and gives providers a "Compliance Dashboard" to identify at-risk patients instantly.

## 🧠 Approach: The "MVP First" Strategy

**Philosophy:** Agile Development with a strict focus on "Must-Have" requirements.  
**Core Objective:** Deliver a functional prototype that proves the concept of secure and role-based preventive care within 5 hours.

### Key Strategies

*   **Role-Based Separation:** Distinct workflows for Patients (Data Entry) and Providers (Data Monitoring).
*   **Security by Design:** Integrating HIPAA-compliant features (Consent, Audit Logging, Encryption) from the first line of code, not as an afterthought.
*   **Simplicity over Complexity:** Using a monolithic backend (for speed) and a component-based frontend (for reusability).
*   **Data-Driven Compliance:** The "Preventive Care" aspect is driven by comparing user logs against hardcoded thresholds (e.g., < 7 hours sleep = "At Risk").

## ⚙ Architecture: MERN Stack (3-Tier)

We utilize a Client-Server Architecture using the MERN stack.

### A. The Tiers

1.  **Presentation Layer (Frontend)**
    *   **Tech:** React.js + Tailwind CSS.
    *   **Role:** Handles user interaction, state management (React Hooks), and JWT storage.

2.  **Application Layer (Backend)**
    *   **Tech:** Node.js + Express.js.
    *   **Role:** API endpoints, Authentication middleware (JWT), Business Logic (Compliance checks), and Security Logging.

3.  **Data Layer (Database)**
    *   **Tech:** MongoDB (Atlas).
    *   **Role:** JSON-document storage. Flexible schema allows us to iterate properties quickly.

### B. Data Flow Diagram

`User Action (Frontend)` $\rightarrow$ `HTTP Request (Axios)` $\rightarrow$ `Express Route` $\rightarrow$ `Controller Logic` $\rightarrow$ `Mongoose Model` $\rightarrow$ `MongoDB`

## 🚀 Key Features

### 1. Security & Compliance (Priority)
*   **Role-Based Access Control (RBAC):** Strict separation between Patient and Provider views.
*   **Audit Logging:** Every critical action (Data Access, Login) is logged to a secure AuditLogs collection in the database.
*   **Data Consent:** Mandatory "Consent for Data Usage" checkbox during registration.
*   **Secure Auth:** JWT (JSON Web Token) authentication with BCrypt password hashing.

### 2. Patient Dashboard
*   **Daily Goal Tracker:** Interactive inputs for Steps, Sleep Hours, and Water Intake.
*   **Real-time Progress:** Visual feedback on daily goals.
*   **Health Tips:** Dynamic health advice displayed on login.
*   **Profile Management:** Update critical info like Allergies and Medications.

### 3. Provider Dashboard
*   **Patient Monitoring:** List view of all assigned patients.
*   **Compliance Checker:** Automated logic to flag patients who missed their daily logs or are falling behind on goals.
*   **Read-Only Access:** Providers can view but not alter patient logs (maintaining data integrity).
