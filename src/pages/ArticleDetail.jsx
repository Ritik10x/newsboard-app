import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState, useContext, useRef } from "react"
import { NewsContext } from "../context/NewsContext"

const ArticleDetail = () => {

  const { addBookmark, addToHistory } = useContext(NewsContext)
  const navigate = useNavigate()

  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [bookmarked, setBookmarked] = useState(false)

  const startTime = useRef(Date.now())

  useEffect(() => {
    fetchArticle()
  }, [])

  const fetchArticle = async () => {
    try {
      const response = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      )

      const data = await response.json()
      setArticle(data)

    } catch (error) {
      console.log(error)
    }
  }

  const handleBack = () => {
    const endTime = Date.now()
    const timeSpent = Math.floor((endTime - startTime.current) / 1000)

    if (article) {
      addToHistory(article, timeSpent)
    }

    navigate(-1)
  }

  if (!article) {
    return <div className="text-center mt-10">Loading...</div>
  }

  return (
    <div className="max-w-3xl mx-auto p-6">

      <button
        onClick={handleBack}
        className="mb-4 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-4">
        {article.title}
      </h1>

      <p className="text-gray-400 mb-4">
        By {article.by}
      </p>

      <button
        disabled={bookmarked}
        onClick={() => {
          addBookmark(article)
          setBookmarked(true)
        }}
        className={`px-4 py-2 rounded-lg mt-4 mr-3 transition 
        ${
          bookmarked
            ? "bg-green-500 cursor-not-allowed"
            : "bg-linear-to-r from-blue-500 to-purple-500 hover:opacity-90"
        }`}
      >
        {bookmarked ? "✓ Bookmarked" : "Bookmark"}
      </button>

      <a
        href={article.url}
        target="_blank"
        className="text-blue-400 underline"
      >
        Read Full Article
      </a>

    </div>
  )
}

export default ArticleDetail