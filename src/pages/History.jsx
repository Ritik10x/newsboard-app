import { useContext } from "react"
import { NewsContext } from "../context/NewsContext"

const History = () => {

  const { history, clearHistory } = useContext(NewsContext)

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m}m ${s}s`
  }

  return (
    <div className="max-w-4xl mx-auto p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Reading History
        </h1>

        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
          >
            Clear History
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="text-gray-400">
          No history yet
        </p>
      ) : (
        history.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 p-4 rounded-lg mb-4"
          >
            <h2 className="text-lg font-semibold">
              {item.title}
            </h2>

            <p className="text-gray-400">
              Time spent: {formatTime(item.timeSpent)}
            </p>

            <p className="text-gray-500 text-sm">
              {new Date(item.date).toLocaleString()}
            </p>

          </div>
        ))
      )}

    </div>
  )
}

export default History