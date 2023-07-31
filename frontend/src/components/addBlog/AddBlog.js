import React from 'react';
import imageIcon from "../assets/imgicon.png";

function AddBlog() {
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
            <button type="submit">Add Blog</button>
          </div>
        </form>
      </div>
      <div class="col-lg-4 md-4">
      <div class="col-lg-4 md-4" id="imageWrap">
        <img src={imageIcon}  alt="..." />
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddBlog