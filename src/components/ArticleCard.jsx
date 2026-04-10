import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { NewsContext } from "../context/NewsContext"

const ArticleCard = ({ article }) => {

  const { bookmarks } = useContext(NewsContext)
  const navigate = useNavigate()

  const isBookmarked = bookmarks.some(
    (item) => item.id === article.id
  )

  return (
    <div 
      onClick={() => navigate(`/article/${article.id}`)}
      className="bg-white/5 backdrop-blur-md border border-white/10 
      p-6 rounded-2xl mb-5 
      hover:bg-white/10 hover:scale-[1.01] 
      transition-all duration-300 
      cursor-pointer shadow-lg"
    >

      <div className="flex justify-between items-start">

        <h2 className="text-xl font-semibold mb-2 text-white leading-snug">
          {article.title}
        </h2>

        {isBookmarked && (
          <span className="text-yellow-400 text-lg">
            ⭐
          </span>
        )}

      </div>

      <div className="flex items-center justify-between mt-3">
        <p className="text-gray-400 text-sm">
          By {article.by}
        </p>

        <span className="text-xs text-blue-400">
          Read more →
        </span>
      </div>

    </div>
  )
}

export default ArticleCard