import { useEffect, useState } from "react"
import ArticleCard from "../components/ArticleCard"

const Feed = () => {

  const [lastUpdated, setLastUpdated] = useState(null)
  const [articles, setArticles] = useState([])
  const [page, setPage] = useState(1)
  const [error, setError] = useState(null)
  const [category, setCategory] = useState("all")
  const [search, setSearch] = useState("")
  const [filteredArticles, setFilteredArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTopStories()

    const interval = setInterval(() => {
      fetchTopStories()
    }, 60000)

    return () => clearInterval(interval)

  }, [page])

  const fetchTopStories = async () => {
    try {

      setLoading(true)

      const response = await fetch(
        "https://hacker-news.firebaseio.com/v0/topstories.json"
      )

      const ids = await response.json()

      const firstTen = ids.slice(0, page * 10)

      const articlePromises = firstTen.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
          .then((res) => res.json())
      )

      const articles = await Promise.all(articlePromises)

      setArticles(articles)
      setLastUpdated(new Date())
      setError(null)
      setLoading(false)

    } catch (error) {
      console.log(error)
      setError("Failed to load news. Please try again.")
      setLoading(false)
    }
  }

  // Category filter
  const categoryFiltered = articles.filter(article => {
    if (category === "ask") return article.title?.startsWith("Ask HN")
    if (category === "show") return article.title?.startsWith("Show HN")
    if (category === "job") return article.title?.startsWith("Job")
    if (category === "other") {
      return !article.title?.startsWith("Ask HN") &&
             !article.title?.startsWith("Show HN") &&
             !article.title?.startsWith("Job")
    }
    return true
  })

  // Debounce search
  useEffect(() => {

    const timer = setTimeout(() => {

      const searchFiltered = categoryFiltered.filter(article =>
        article.title?.toLowerCase().includes(search.toLowerCase())
      )

      setFilteredArticles(searchFiltered)

    }, 500)

    return () => clearTimeout(timer)

  }, [search, categoryFiltered])

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">

      <h1 className="text-4xl font-bold mb-4 text-center bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        Top News
      </h1>

      {lastUpdated && (
        <p className="text-sm text-gray-400 mb-6 text-center">
          Last updated: {lastUpdated.toLocaleTimeString()}
        </p>
      )}

      {error && (
        <div className="bg-red-500/20 border border-red-500 
        text-red-400 p-4 rounded-lg mb-6 text-center">
          {error}
        </div>
      )}

      {/* Search */}
      <input
        type="text"
        placeholder="Search articles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 p-3 rounded-lg bg-white/5 border border-white/10"
      />

      {/* Category Filters */}
      <div className="flex gap-3 mb-6 flex-wrap justify-center">
        <button onClick={() => setCategory("all")} className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20">All</button>
        <button onClick={() => setCategory("ask")} className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20">Ask HN</button>
        <button onClick={() => setCategory("show")} className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20">Show HN</button>
        <button onClick={() => setCategory("job")} className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20">Jobs</button>
        <button onClick={() => setCategory("other")} className="px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20">Others</button>
      </div>

      {loading ? (
        <p className="text-center text-gray-400 mt-10">
          Loading news...
        </p>
      ) : filteredArticles.length === 0 ? (
        <p className="text-center text-gray-400 mt-10">
          No articles found
        </p>
      ) : (
        filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))
      )}

      <button
        onClick={() => setPage(prev => prev + 1)}
        className="mt-6 w-full py-3 rounded-lg 
        bg-white/10 hover:bg-white/20 transition"
      >
        Load More
      </button>

    </div>
  )
}

export default Feed