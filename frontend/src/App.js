import About from "./components/about/About";
import Blog from "./components/blog/Blog";
import FrontPage from "./components/frontPage/FrontPage";
import Projects from "./components/projects/Projects";
import Rootlayout from "./components/roots/Rootlayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<FrontPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
