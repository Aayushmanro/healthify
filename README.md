# Healthify - Preventive Care Portal 🏥

**HCLTech Hackathon - Healthcare & Life Sciences Track**

A secure, role-based portal connecting patients and providers. Built with the MERN stack (MongoDB, Express, React, Node.js).

## What is this?

We built this MVP in just 5 hours to solve a simple problem: doctors don't know what patients do at home, and patients don't have a safe way to share that info.

Healthify lets patients log their daily habits (steps, sleep, water), and gives providers a dashboard to spot who needs help.

## How we built it (The "MVP First" approach)

We had a strict time limit, so we focused on what actually matters:
*   **Security isn't optional:** We baked in HIPAA-style compliance (audit logs, consent, encryption) from the start.
*   **Keep it simple:** Monolithic backend for speed, React frontend for the UI.
*   **Data that works:** We check patient logs against set thresholds (like getting < 7 hours of sleep) to flag risks automatically.

## Tech Stack

*   **Frontend:** React + Tailwind CSS (Fast, responsive UI)
*   **Backend:** Node.js + Express (API & Business Logic)
*   **Database:** MongoDB Atlas (Flexible data storage)

## Key Features

### 🔒 Security First
*   **RBAC:** Patients and Providers see completely different things.
*   **Audit Logs:** We track every login and data access.
*   **Privacy:** Users must consent to data usage, and we use JWT + BCrypt for auth.

### 👤 For Patients
*   **Daily Tracker:** Log your steps, sleep, and water easily.
*   **Visual Goals:** See your progress in real-time.
*   **Health Tips:** Get advice when you log in.

### 👨‍⚕️ For Providers
*   **Patient List:** See all your assigned patients in one place.
*   **Compliance Dashboard:** Instantly see who's missing their goals or logs.
*   **Read-Only:** You can view patient data, but you can't change it.
