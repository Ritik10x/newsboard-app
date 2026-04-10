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


# Reflection — NewsBoard App

## Top 3 Good Practices I Applied

### 1. Separation of Concerns using Context API

I used React Context to manage global state for bookmarks and reading history.

**File:** `src/context/NewsContext.jsx`

This keeps state centralized and avoids prop drilling across multiple components like Feed, Bookmarks, and History pages.

This improved:

* Maintainability
* Scalability
* Clean component structure

---

### 2. Debounced Search for Better Performance

I implemented debounced search to avoid filtering on every keystroke and improve performance.

**File:** `src/pages/Feed.jsx`

This reduces unnecessary renders and improves user experience.

Benefits:

* Better performance
* Reduced computation
* Smooth UI experience

---

### 3. LocalStorage Persistence for User Data

I stored bookmarks and reading history in localStorage to persist data across refresh.

**File:** `src/context/NewsContext.jsx`

This ensures:

* Bookmarks remain saved
* Reading history is preserved
* Better user experience

---

## One Challenge I Faced

Tracking reading time accurately for each article was challenging.
Initially, reading history was not updating properly when navigating back from the article detail page.

---

## How I Solved It

I used `useRef` to store the start time when the article page loads and calculated the time spent when navigating back.

**File:** `src/pages/ArticleDetail.jsx`

Steps taken:

* Stored start time using `useRef`
* Calculated time spent when user clicks back
* Added entry to reading history

This ensured accurate tracking of reading time for each article.

---

## Final Thoughts

This project helped me improve:

* React state management
* Context API usage
* Performance optimization
* UI/UX improvements
* Clean architecture practices

Overall, this project strengthened my understanding of building scalable React applications.
