import { useContext, useState } from "react"
import { NewsContext } from "../context/NewsContext"

const Bookmarks = () => {

  const { bookmarks, removeBookmark, addBookmark } = useContext(NewsContext)

  const [selected, setSelected] = useState([])
  const [deleted, setDeleted] = useState([])
  const [showUndo, setShowUndo] = useState(false)
  const [sortType, setSortType] = useState("default")

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    )
  }

  const deleteSelected = () => {

    const toDelete = bookmarks.filter(item => selected.includes(item.id))

    setDeleted(toDelete)
    setShowUndo(true)

    selected.forEach(id => removeBookmark(id))

    setSelected([])

    setTimeout(() => {
      setShowUndo(false)
      setDeleted([])
    }, 5000)
  }

  const sortedBookmarks = [...bookmarks].sort((a, b) => {
    if (sortType === "title") {
      return a.title.localeCompare(b.title)
    }
    return 0
  })

  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">
        Bookmarks
      </h1>

      {/* Sort Dropdown */}
      <select
  onChange={(e) => setSortType(e.target.value)}
  className="mb-4 bg-white/10 text-white border border-white/20 
  p-2 rounded-lg focus:outline-none focus:ring-2 
  focus:ring-purple-500"
>
  <option value="default" className="bg-slate-900">
    Default
  </option>
  <option value="title" className="bg-slate-900">
    Sort by Title
  </option>
</select>

      {bookmarks.length > 0 && (
        <button
          onClick={deleteSelected}
          className="bg-red-500 px-4 py-2 rounded-lg mb-4"
        >
          Delete Selected
        </button>
      )}

      {showUndo && (
        <div className="mb-4">
          <button
            onClick={() => {
              deleted.forEach(item => addBookmark(item))
              setShowUndo(false)
            }}
            className="bg-yellow-500 px-4 py-2 rounded-lg"
          >
            Undo
          </button>
        </div>
      )}

      {sortedBookmarks.length === 0 ? (
        <p className="text-gray-400 text-center mt-10">
          No bookmarks yet
        </p>
      ) : (
        sortedBookmarks.map((article) => (
          <div
            key={article.id}
            className="bg-white/5 p-4 rounded-lg mb-4 hover:bg-white/10 transition flex items-center gap-3"
          >

            <input
              type="checkbox"
              checked={selected.includes(article.id)}
              onChange={() => toggleSelect(article.id)}
            />

            <div>
              {article.title}
            </div>

          </div>
        ))
      )}

    </div>
  )
}

export default Bookmarks