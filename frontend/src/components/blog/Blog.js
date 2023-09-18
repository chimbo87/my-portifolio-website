import "./Blog.css";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import LoadingSpinner from "../loader/LoadingSpinner";
import { useNavigate } from "react-router-dom";
const Blog = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const originalInputStyle = {
    width: "150px",
    height: "30px",
  };
  const [inputStyle, setInputStyle] = useState(originalInputStyle);
  const handleInputClick = () => {
    setInputStyle({
      width: "200px",
      height: "35px",
    });
  };
  const handleInputBlur = () => {
    setInputStyle(originalInputStyle); // Reset to original size
  };

  const [blogs, setBlogs] = useState([]);
  const [filterRecords, setFilterRecords] = useState([]);

  const getBlogs = async () => {
    setLoading(true);
    const response = await fetch("http://localhost:8000/blogs").then(
      (response) => response.json()
    );
    {
      setBlogs(response);
      setFilterRecords(response);
      setLoading(false);
    }

   
  };

  useEffect(() => {
    getBlogs();
  }, []);
  // const serverURL ="http://localhost:8000/blogs/uploads"; 
  return (
    <>
      <div className="container-fluid" id="blogSectionBox">
        <h4>Blogs</h4>
      </div>
      {!loading && (
        <div className="container" id="blogContainer">
          {blogs.map((blog) => {
            //  const imageUrl = `/${blog.image}`;
            return (
              <>
                <div class="row" id="blogWrap">
                  <div class="col-lg-6 md-4" id="blogImg">
                    <img src= {blog.image}/>
                  </div>

                  <div class="col-lg-6 md-4" id="blogsText">
                    <h5>{blog.title}</h5>
                    <div id="blogger">
                      {" "}
                      <small>Archford N</small>
                      <small>
                        {format(new Date(blog.createdAt), "yyyy-MM-dd ")}
                      </small>
                    </div>

                    <p>{blog.heading}</p>

                    <small>
                      ...
                      <a
                        href="#"
                        onClick={() => {
                          navigate(`/blogdescription/${blog._id}`);
                        }}
                      >
                        read more
                      </a>
                    </small>
                   
                    <div id="blogViews">
                      <div id="blogLinks">
                      </div>

                      
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div id="projectPagination">
            <nav aria-label="...">
              <ul class="pagination">
                <li class="page-item disabled">
                  <a class="page-link">Previous</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    1
                  </a>
                </li>
                <li class="page-item active" aria-current="page">
                  <a class="page-link" href="#">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    3
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
      {loading && <LoadingSpinner />}

      <div>
        <Footer />
      </div>
    </>
  );
};
export default Blog;
