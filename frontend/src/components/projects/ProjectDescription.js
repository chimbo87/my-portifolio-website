import React from "react";
import LoadingSpinner from "../loader/LoadingSpinner";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import { toast } from "react-toastify";
import { format } from "date-fns";

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
  const [showSendButton, setShowSendButton] = useState(false);
  const [message, setMessage] = useState("");

  const Loader = () => {
    return (
      <div
        class="spinner-border text-secondary spinner-border-sm"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  };

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
        setDate(format(new Date(result.data.createdAt), "yyyy-MM-dd  "));
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

  const handleCommentChange = (e) => {
    const message = e.target.value;
    setMessage(message);
    setShowSendButton(message.trim() !== "");
  };
  const handleSendClick = () => {
    toast.success("Thank you for your comment !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    });
  };

  const submitComment = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/comments", {
      method: "POST",
      body: JSON.stringify({
        message: message,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    console.log(result);
    setMessage("");
    setShowSendButton(false);
    handleSendClick();
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
                <div id="projectDescriptionSitesLinks">
                  <small>
                    <a href={siteLink}>Visit Site</a>
                  </small>
                  <small>
                    <a href={githubLink}>Source Code</a>
                  </small>
                </div>
                <div id="projectDescriptionSitesLinksDate">
                  <small>{date}</small>
                </div>
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
                  <form onSubmit={submitComment}>
                    <input
                      id="inputCommen"
                      type="text"
                      placeholder="add a comment..."
                      value={message}
                      onChange={handleCommentChange}
                    />

                    {showSendButton && (
                      <button onChange={handleCommentChange}>
                        <i class="bx bxs-send"></i>
                      </button>
                    )}
                  </form>
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
