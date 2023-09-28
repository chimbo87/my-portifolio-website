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
  const [messages, setMessages] = useState([]);
  const [numberOfComments, setnumberOfComments] = useState();
  const [comments, setComments] = useState("");
  const [text, setText] = useState("");
  const [carrying, setCarrying] = useState(false);

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

  const handleSendClick = () => {
    toast.success("Comment received, thank you !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/projects/comments/${id}`)
      .then((result) => {
        const numberComments = result.data.length;
        const lastIndex = result.data.length - 1;
        const userMessage = result.data[lastIndex].text[0].text;

        setMessages(userMessage);
        setnumberOfComments(numberComments);

        console.log("Hello archie, here are your..", result.data);

        // console.log("Hello archie, here are your..",result.data.text[0])
      })

      .catch((err) => console.log(err));
  }, []);
  const submitRegComment = async (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      return comments;
    } else {
      setCarrying(true);
      const response = await fetch(
        `http://localhost:8000/projects/comments${id}`,
        {
          method: "POST",
          body: JSON.stringify({
            text: text,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const result = await response.json();
      setComments(result.length);
      setText("");
      handleSendClick();
      const lastIndex = result.length;
      const tsambe = result[lastIndex - 1].text[0];

      const theComment = tsambe.text;
      setnumberOfComments(lastIndex);
      setMessages(theComment);
      setCarrying(false);
    }
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
              <img src={`http://localhost:8000/uploads/${image}`} />
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
              <div id="projectTheComments">
                <small>
                  <b>{initialLikes}</b> Likes
                </small>
                <small>
                  <b>{numberOfComments}</b> Comments
                </small>
              </div>
              <div id="projectDescriptionLink">
                <div
                  id="projectDescriptionLinkIconsLike"
                  onClick={() => {
                    submitRegHandler();
                    updatedLikes(initialLikes);
                  }}
                >
                  <i class="bx bx-heart"></i>
                  <b>
                    <small>Like post</small>
                  </b>
                </div>

                <div id="projectDescriptionLinkIconsLike">
                  <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i class="bx bx-message-dots"></i>
                    <b>comment</b>
                  </button>
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

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered ">
          <div class="modal-content">
            <div class="modal-header" id="projectModalHeader">
              <b>
                <p>{title}</p>
              </b>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" id="modalBodyImg">
              <img src={`http://localhost:8000/uploads/${image}`} />
              <small>{name}</small>
              <div id="modalBodyImgLink">
                <small>
                  <i class="bx bx-like"></i>
                  likes{" "}
                  <span>
                    <b>{initialLikes}</b>
                  </span>
                </small>
                <small>
                  <i class="bx bx-message-dots"></i>
                  comments{" "}
                  <span>
                    <b>{numberOfComments}</b>
                  </span>
                </small>
                <small>
                  <i class="bx bxs-share bx-flip-horizontal"></i>
                  share 2
                </small>
              </div>
              <div id="modalUserMessages">
                <small>
                  <i class="bx bx-user-circle"></i>
                  {messages}
                </small>
              </div>
            </div>

            <div class="modal-footer" id="modalFooter">
              <div id="modalUserInput">
                <form>
                  <input
                    type="text"
                    placeholder="add a comment..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />

                  {!carrying && <span></span>}
                  <button onClick={submitRegComment}>
                    {carrying && <Loader />}
                    <i class="bx bxs-send"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectDescription;
