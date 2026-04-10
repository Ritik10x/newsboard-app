import { createContext, useState, useEffect } from "react"

export const NewsContext = createContext()

const NewsProvider = ({ children }) => {

  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem("bookmarks")
    return saved ? JSON.parse(saved) : []
  })

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("history")
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
  }, [bookmarks])

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history))
  }, [history])

  const addBookmark = (article) => {
    setBookmarks(prev => [...prev, article])
  }

  const removeBookmark = (id) => {
    setBookmarks(prev => prev.filter(item => item.id !== id))
  }

  const addToHistory = (article, timeSpent) => {

    const newEntry = {
      ...article,
      timeSpent,
      date: new Date()
    }

    setHistory(prev => [newEntry, ...prev])
  }

  // ✅ Add this function
  const clearHistory = () => {
    setHistory([])
  }

  return (
    <NewsContext.Provider 
      value={{ 
        bookmarks, 
        addBookmark, 
        removeBookmark,
        history,
        addToHistory,
        clearHistory   // ✅ Add here
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider