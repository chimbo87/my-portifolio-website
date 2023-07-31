import React from "react";
import "./AddProject.css";
import imageIcon from "../assets/imgicon.png";
function AddProject() {
  return (
    <div className="container" id="projectSection">
      <div class="row">
        <div class="col-lg-8 md-4">
          <form>
            <div class="mb-3" id="ProjectInput">
              <label for="exampleFormControlInput1" class="form-label">
                {/* Full Name */}
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Title"
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
              />
            </div>

            <div class="row">
              <div class="col-lg-6 md-4">
                {" "}
                <div class="mb-3"  id="ProjectInput">
                  <label for="exampleFormControlInput1" class="form-label">
                    {/* Email address */}
                  </label>
                  <input
                    type="link"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Github link"
                  />
                </div>
              </div>
              <div class="col-lg-6 md-4">
                {" "}
                <div class="mb-3"  id="ProjectInput">
                  <label for="exampleFormControlInput1" class="form-label">
                    {/* Email address */}
                  </label>
                  <input
                    type="link"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Web link"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3" id="ProjectInput">
            <label for="exampleFormControlInput1" class="form-label">
              {/* Full Name */}
            </label>
            <input
              type="file"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Upload image"
            />
          </div>
            <div class="mb-3"  id="ProjectInput">
              <label for="exampleFormControlTextarea1" class="form-label">
                {/* Type your message */}
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Description"
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
