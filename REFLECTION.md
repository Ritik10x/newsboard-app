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
