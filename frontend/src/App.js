import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import About from "./components/about/About";
import AddProject from "./components/addProject/AddProject";
import AddBlog from "./components/addBlog/AddBlog";
import Feedbacks from "./components/feedbacks/Feedbacks";
import Admin from "./components/admin/Admin";
import Blog from "./components/blog/Blog";
import FrontPage from "./components/frontPage/FrontPage";
import Projects from "./components/projects/Projects";
import Rootlayout from "./components/roots/Rootlayout";
import ViewBlogs from "./components/viewblogs/ViewBlogs";
import ViewProjects from "./components/viewprojects/ViewProjects";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<FrontPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/blogs" element={<Blog />}></Route>

        <Route path="/admni" element={<Admin />}>
          <Route index element={<AddProject />} />
          <Route path="addproject" element={<AddProject />} />
          <Route path="viewproject" element={<ViewProjects />} />
          <Route path="addblog" element={<AddBlog />} />
          <Route path="viewblog" element={<ViewBlogs />} />
          <Route path="feedbacks" element={<Feedbacks />} />
          
        </Route>
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
