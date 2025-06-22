# Anonymous-Telegram-confession-bot
A simple and secure Telegram bot that lets users submit anonymous confessions. Messages are sent to a channel or group without revealing the sender's identity. Ideal for schools, communities, or fun anonymous message boards.
# 📨 Anonymous Telegram Forwarding Bot

A serverless Telegram bot that forwards messages to a channel **anonymously**, with support for private comments. Built with **Node.js, Supabase, and Netlify Functions**.

![Demo](https://img.shields.io/badge/Demo-Live-green) 
[![Deploy with Netlify](https://img.shields.io/badge/Deploy-Netlify-blue)](https://app.netlify.com/start/deploy?repository=https://github.com/your-repo-link)

## 🔥 Features
- **100% Anonymous** – Sender info is never exposed.
- **Private Comments** – Users can reply anonymously via the bot (no channel spam).
- **Serverless** – Hosted on Netlify with Supabase PostgreSQL storage.
- **Easy Setup** – No servers needed.

---

## ⚙️ Prerequisites
1. **Telegram Bot Token** (from [@BotFather](https://telegram.me/BotFather))
2. **Telegram Channel** (to forward messages to)
3. **Supabase Account** (free tier)
4. **Netlify Account** (free tier)

---

## 🚀 Quick Deployment

### 1. One-Click Deploy (Recommended)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-repo-link)  
*Netlify will guide you through setting environment variables.*

---

### 2. Manual Setup
#### Step 1: Clone & Setup
```bash
git clone https://github.com/your-repo-link.git
cd anonymous-telegram-bot
npm install
