import { Link, useLocation } from "react-router-dom"

const Navbar = () => {

  const location = useLocation()

  const linkClass = (path) =>
    `px-4 py-2 rounded-lg transition ${
      location.pathname === path
        ? "bg-white/20"
        : "hover:bg-white/10"
    }`

  return (
    <div className="bg-black/30 backdrop-blur-md border-b border-white/10">

      <div className="max-w-4xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-xl font-bold">
          NewsBoard 🗞️
        </h1>

        <div className="flex gap-3">

          <Link to="/" className={linkClass("/")}>
            Feed
          </Link>

          <Link to="/bookmarks" className={linkClass("/bookmarks")}>
            Bookmarks
          </Link>

          <Link to="/history" className={linkClass("/history")}>
            History
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Navbar