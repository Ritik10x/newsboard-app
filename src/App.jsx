import { BrowserRouter, Routes, Route } from "react-router-dom"
import Feed from "./pages/Feed"
import ArticleDetail from "./pages/ArticleDetail"
import Bookmarks from "./pages/Bookmarks"
import Navbar from "./components/Navbar"

import History from "./pages/History"
function App() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-black text-white">
      
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/history" element={<History />} />
        </Routes>

      </BrowserRouter>

    </div>
  )
}
export default App