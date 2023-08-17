import React from "react";
import { useState } from "react";
import "./AddProject.css";
import imageIcon from "../assets/imgicon.png";

function AddProject() {
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [githubLink, setGithub] = useState("");
  const [siteLink, setSite] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImageurl] = useState("");

  
  const submitRegHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/projects", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        name: name,
        githubLink: githubLink,
        siteLink: siteLink,
        description: description,
        image: image,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    console.log(result);
    setTitle("");
    setName("");
    setGithub("");
    setSite("");
    setDescription("");
    setImageurl("");
  };
 
  return (
    <div className="container" id="projectSection">
      <div class="row">
        <div class="col-lg-8 md-4" id="formWrapBox">
        <h4>Add Project</h4>
          <form onSubmit={submitRegHandler}>
            <div class="mb-3" id="ProjectInput">
              <label for="exampleFormControlInput1" class="form-label">
                {/* Full Name */}
              </label>
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
              <label for="exampleFormControlInput1" class="form-label">
                {/* Full Name */}
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div class="row">
              
              <div class="col-lg-6 md-4">
                {" "}
                <div class="mb-3"  id="ProjectInput">
                  <label for="exampleFormControlInput1" class="form-label">
                   
                  </label>
                  <input
                    type="link"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Github link"
                    value={githubLink}
                    onChange={(e) => setGithub(e.target.value)}
                  />
                </div>
              </div>
              <div class="col-lg-6 md-4">
                {" "}
                <div class="mb-3"  id="ProjectInput">
                  <label for="exampleFormControlInput1" class="form-label">
                 
                  </label>
                  <input
                    type="link"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Web link"
                    value={siteLink}
                    onChange={(e) => setSite(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div class="mb-3" id="ProjectInput">
            <label for="exampleFormControlInput1" class="form-label">
             
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Upload image"
              value={image}
              onChange={(e) => setImageurl(e.target.value)}
            />
          </div>
            <div class="mb-3"  id="ProjectInput">
              <label for="exampleFormControlTextarea1" class="form-label">
               
              </label>
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
              <button type="submit">Add Project</button>
            </div>
          </form>
        </div>
        <div class="col-lg-4 md-4" id="imageWrap">
        <img src={imageIcon}  alt="..." />
        </div>
      </div>
    </div>
  );
}

export default AddProject;
