import { BrowserRouter, Routes, Route } from "react-router";

//pages
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import PostsPage from "./pages/PostsPage";

//layouts
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotte che hanno lo stesso layout */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
