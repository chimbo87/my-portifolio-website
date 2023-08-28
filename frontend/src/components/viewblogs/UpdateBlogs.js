import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function UpdateBlogs() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/blogs/${id}`)
      .then((result) => {
        console.log(result);
        setTitle(result.data.title);
        setImageurl(result.data.image);
        setDescription(result.data.description);
      })
      .catch((err) => console.log(err));
  }, []);
  
  const submitRegHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        description: description,
        image: imageurl,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    console.log(result);
    setTitle("");
    setDescription("");
    setImageurl("");
  };

  return (
    <div className="container" id="updateBlogContainer">
      <form onSubmit={submitRegHandler}>
        <h4>Update Blog</h4>
        <div class="mb-3" id="modalInputBox">
          <label for="exampleFormControlInput1" class="form-label"></label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div class="mb-3" id="modalInputBox">
          <label for="exampleFormControlInput1" class="form-label"></label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="upload image"
            value={imageurl}
            onChange={(e) => setImageurl(e.target.value)}
          />
        </div>
        <div class="mb-3" id="modalInputBox">
          <label for="exampleFormControlTextarea1" class="form-label"></label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div id="modalButton">
          <button id="updateSaveBtn">Save</button>
          <button
            id="updateCancelBtn"
            onClick={() => {
              navigate("/admni/viewblog");
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateBlogs;
