import React from "react";
import LoadingSpinner from "../loader/LoadingSpinner";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";

function ProjectDescription() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [githubLink, setGithub] = useState("");
  const [siteLink, setSite] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImageurl] = useState("");
  const [date, setDate] = useState("");
  const [initialLikes, setinitialLikes] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [showSendButton, setShowSendButton] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/projects/${id}`)
      .then((result) => {
        console.log(result);
        setTitle(result.data.title);
        setName(result.data.name);
        setGithub(result.data.githubLink);
        setSite(result.data.siteLink);
        setDescription(result.data.description);
        setImageurl(result.data.image);
        setDate(result.data.createdAt);
        setinitialLikes(result.data.likes);
        setLoading(false);
      })

      .catch((err) => console.log(err));
    setinitialLikes();
  }, []);

  const submitRegHandler = async () => {
    const response = await fetch(
      `http://localhost:8000/projects/projectslikes${id}`,
      {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    const result = await response.json();
    console.log("your likes are", result);
  };
  
  const updatedLikes = () => {
    return setinitialLikes(initialLikes + 1);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Show the send button if there is some input
    setShowSendButton(value.trim() !== "");
  };

  const handleSendClick = () => {
    // Handle the send action, e.g., submit the input
    console.log("Sending:", inputValue);
  };

  return (
    <>
      <div className="container-fluid" id="projectSectionBox">
        <h4>Project Description</h4>
      </div>
      <div className="container" id="projectWrapBox">
        {!loading && (
          <div class="row">
            <div class="col-lg-6 col-md-4" id="projectDescriptionImg">
              <img src={image} class="d-block w-100" alt="..." />
            </div>
            <div class="col-lg-6 col-md-4" id="projectDescriptionText">
              <div id="projectDescriptionTextBox">
                <h4>{title}</h4>
                <h5 id="projectNameWrap">{name}</h5>
                <small>{description}</small>
              </div>
              <div id="projectDescriptionSites">
                <small>
                  <a href={siteLink}>Visit Site</a>
                </small>
                <small>
                  <a href={githubLink}>Source Code</a>
                </small>
              </div>
              <div id="projectDescriptionLink">
                <div id="projectDescriptionLinkIconsLike">
                  <i
                    class="bx bx-like"
                    onClick={() => {
                      submitRegHandler();
                      updatedLikes(initialLikes);
                    }}
                  ></i>
                  <b>
                    {" "}
                    <small>{initialLikes}</small>
                  </b>
                </div>

                <div id="projectDescriptionInputBox">
                  <input
                    type="text"
                    placeholder="add a comment..."
                    value={inputValue}
                    onChange={handleInputChange}
                  />
                  {showSendButton && (
                    <i class="bx bxs-send" onClick={handleSendClick}></i>
                  )}
                </div>

                <div id="projectDescriptionLinkIconsLike">
                  <i class="bx bx-share-alt"></i>
                  <b>
                    <small id="shareBtn">share</small>
                  </b>
                </div>
              </div>
            </div>
          </div>
        )}
        {loading && <LoadingSpinner />}
      </div>
      {/* <div>
        <small>back to projects</small>
      </div> */}
      <Footer />
    </>
  );
}

export default ProjectDescription;
