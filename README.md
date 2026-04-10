# 🗞️ NewsBoard – Hacker News Reader

A modern **Hacker News Reader** built with **React, Vite, and Tailwind CSS** that allows users to browse, search, bookmark, and track reading history of top Hacker News articles.

🔗 **Live Demo:**
https://newsboard-app.netlify.app/

---

# 🚀 Features

## 📰 Feed Page

* View Top Hacker News stories
* Category filtering:

  * Ask HN
  * Show HN
  * Jobs
  * Others
* Search articles (with debounce)
* Auto refresh every 60 seconds
* Last updated timestamp
* Load more pagination
* Loading state
* Error handling

---

## 📄 Article Detail Page

* View article details
* Bookmark articles
* Visual bookmark feedback
* Track reading time
* External article link

---

## 🔖 Bookmarks

* Save articles
* Multi-select bookmarks
* Delete selected bookmarks
* Undo delete
* Sort bookmarks
* Persistent bookmarks (localStorage)

---

## 🕒 Reading History

* Track reading time per article
* Display human readable time
* Clear history
* Persistent history (localStorage)

---

## 🎨 UI Features

* Modern dark UI
* Responsive design
* Smooth hover animations
* Clean professional layout
* Navbar navigation

---

# 🛠️ Tech Stack

* React (Vite)
* Tailwind CSS
* React Router DOM
* Hacker News API
* Netlify (Deployment)

---

# 📦 Installation

Clone the repository

git clone https://github.com/YOUR_USERNAME/newsboard-app.git

Navigate into project

cd newsboard-app

Install dependencies

npm install

Run development server

npm run dev

---

# 🔌 API Used

Hacker News API

https://hacker-news.firebaseio.com/v0/topstories.json

---

# 📁 Project Structure

src/
├── components/
│    ├── Navbar.jsx
│    ├── ArticleCard.jsx
│
├── pages/
│    ├── Feed.jsx
│    ├── ArticleDetail.jsx
│    ├── Bookmarks.jsx
│    ├── History.jsx
│
├── context/
│    ├── NewsContext.jsx
│
├── App.jsx
├── main.jsx

---

# 🌐 Deployment

Deployed using Netlify

Build command

npm run build

Publish directory

dist

---

# 👨‍💻 Author

Ritik Singh

---

# 🎉 Live Project

https://newsboard-app.netlify.app/
