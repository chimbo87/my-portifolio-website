import React from "react";
import { useState } from "react";
import imageIcon from "../assets/imgicon.png";

function AddBlog() {
  const [title, setTitle] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [description, setDescription] = useState("");

  const submitRegHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/blogs", {
      method: "POST",
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
    <div className="container" id="projectSection">
      <div class="row">
        <div class="col-lg-8 md-4">
          <form onSubmit={submitRegHandler}>
            <div class="mb-3" id="ProjectInput">
              <label for="exampleFormControlInput1" class="form-label"></label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div class="mb-3" id="ProjectInput">
              <label for="exampleFormControlInput1" class="form-label"></label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Upload image"
                value={imageurl}
                onChange={(e) => setImageurl(e.target.value)}
              />
            </div>

            <div class="mb-3" id="ProjectInput">
              <label
                for="exampleFormControlTextarea1"
                class="form-label"
              ></label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div id="projectBtn">
              <button type="submit">Add Blog</button>
            </div>
          </form>
        </div>
        <div class="col-lg-4 md-4">
          <div class="col-lg-4 md-4" id="imageWrap">
            <img src={imageIcon} alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
