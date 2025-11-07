# Tenant Management Dashboard

## Overview

This project is a **Dashboard** for the Tenant Management System. It is currently **a standalone interface** that provides a centralized hub for navigating tenant-related actions.

In the future, this dashboard will be **merged with the client-side login system and backend**, allowing full integration of authentication, tenant management, and complaint handling.

---

## Features


* **Responsive Grid Navigation Buttons**

  * Add New Tenant ➕
  * View Tenants 👥
  * Delete Tenants ❌
  * View Complaints 📋
* **Notification Badges**

  * Display dynamic counts on buttons for pending actions or updates.
  * Bounce-in animation appears when hovering over a button.
* **Hover Animations**

  * Buttons lift and change color when hovered for interactive feedback.
* **Mobile-Friendly Design**

  * Desktop: 2×2 grid with emojis above the text
  * Mobile: stacked rows with emojis on the left

---

## Tech Stack

* **Frontend:** React, SASS
* **Routing:** React Router DOM
* **Styling:** Light blue theme, responsive layout

---

## Future Integration

* Merge with **client login system** for authentication.
* Connect to **backend API** to fetch real-time tenant and complaint data.
* Enable dynamic updates for notifications and grid actions.

---

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the dashboard:

   ```bash
   npm start
   ```
4. Open in the browser at `http://localhost:3000`.

---

**Summary:**
This dashboard serves as the **navigation and control center** for the Tenant Management System, providing a clean, interactive, and responsive interface. It is designed to eventually integrate with the client login and backend systems for a complete full-stack solution.
