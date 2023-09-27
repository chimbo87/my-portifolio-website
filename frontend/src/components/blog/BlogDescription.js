import React from "react";
import LoadingSpinner from "../loader/LoadingSpinner";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";
import { format } from "date-fns";
import { toast } from "react-toastify";

function BlogDescription() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImageurl] = useState("");
  const [date, setDate] = useState("");
  const [loves, setLoves] = useState("");
  const [comments, setComments] = useState("");
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [numberOfComments, setnumberOfComments] = useState();
  const [showShareMenu, setShowShareMenu] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/blogs/${id}`)
      .then((result) => {
        console.log(result);
        setTitle(result.data.title);
        setHeading(result.data.heading);
        setDescription(result.data.description);
        setImageurl(result.data.image);
        setDate(format(new Date(result.data.createdAt), "yyyy-MM-dd "));
        setLoves(result.data.likes);
        setLoading(false);
      })

      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/blogs/comments/${id}`)
      .then((result) => {
        const numberComments = result.data.length;
        const lastIndex = result.data.length - 1;
        const userMessage = result.data[lastIndex].text[0].text;

        setMessages(userMessage);
        setnumberOfComments(numberComments);
      })

      .catch((err) => console.log(err));
  }, []);

  const submitRegHandler = async () => {
    const response = await fetch(`http://localhost:8000/blogs/likes${id}`, {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await response.json();
    console.log("your likes are", result);
  };
  const handleSendClick = () => {
    toast.success("Thank you for message !", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    });
  };
  const submitRegComment = async (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      return comments;
    } else {
      const response = await fetch(
        `http://localhost:8000/blogs/comments${id}`,
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
    }
  };

  const updatedLikes = () => {
    return setLoves(loves + 1);
  };

  const toggleShareMenu = () => {
    setShowShareMenu(!showShareMenu);
  };

  // Function to handle sharing
  const shareOnPlatform = (platform) => {
    const text = encodeURIComponent(title + "\n" + description);
    const url = encodeURIComponent(window.location.href);

    if (platform === "whatsapp") {
      window.open(
        `https://api.whatsapp.com/send?text=${title}%0A${"http://localhost:3000/blogdescription/65140673b729c649ce1573af#"}`
      );
    } else if (platform === "facebook") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${"http://localhost:3000/blogdescription/65140673b729c649ce1573af#"}`
      );
    } else if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${title}&url=${"http://localhost:3000/blogdescription/65140673b729c649ce1573af#"}`
      );
    }
  };
  return (
    <>
      <div className="container-fluid" id="projectSectionBox"></div>
      <div className="container">
        {!loading && (
          <div class="row" id="blogDesBox">
            <div class="col-lg-8 col-md-4">
              <div>
                <h5 id="blogDescpritionHead">{title}</h5>
              </div>
              <img
                src={`http://localhost:8000/uploads/${image}`}
                id="blogDesBoxImg"
              />

              <div id="blogSectionText">
                <div id="blogAuther">
                  <small>Archford N</small>
                  <small>{date}</small>
                </div>
                <div>
                  <h5 id="headTexts">{heading}</h5>
                </div>
                <div>
                  <p>{description}</p>
                </div>
                {/* <div id="blogDesLikes">
                  <div id="blogDesLikeswrap">
                    <div id="blogDesLikesBox">
                      <button
                        onClick={() => {
                          submitRegHandler();
                          updatedLikes();
                        }}
                      >
                        <i class="bx bx-heart"></i>
                        <small>{loves} likes</small>
                      </button>
                    </div>
                    <div id="blogDesCommentBox">
                      <button
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={submitRegComment}
                      >
                        <i class="bx bxs-comment-detail"></i>
                        <small>comment</small>
                      </button>
                    </div>
                    <div id="blogDesCommentBox">
                      <button>
                        <i class="bx bx-share-alt"></i>
                        <small>share 12</small>
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div class="col-lg-4 col-md-4" id="blogInforText">
              <div id="blogInforTextLinks">
                <h5>Follow me:</h5>
                <i class="bx bxl-facebook"></i>
                <i class="bx bxl-github"></i>
                <i class="bx bxl-linkedin"></i>
                <i class="bx bxl-instagram"></i>
              </div>
              <div id="blogInforTextLike">
                <div id="blogInforTextLikeIcons">
                  <i
                    class="bx bx-heart"
                    onClick={() => {
                      submitRegHandler();
                      updatedLikes();
                    }}
                  ></i>{" "}
                  <small>Like</small>
                </div>
                <div id="blogCommentButton">
                  <input
                    type="text"
                    placeholder="comment..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />{" "}
                  <button onClick={submitRegComment}>
                    {" "}
                    <i class="bx bxs-send"></i>
                  </button>
                </div>
                <div id="blogInforTextLikeIcons" onClick={toggleShareMenu}>
                  <i class="bx bx-share-alt"></i> <small>share</small>
                </div>
              </div>

              {showShareMenu && (
                <div className="share-menu" id="shareMenu">
                  <button onClick={() => shareOnPlatform("whatsapp")}>
                  <i class='bx bxl-whatsapp'></i>
                  </button>
                  <button onClick={() => shareOnPlatform("facebook")}>
                  <i class='bx bxl-facebook'></i>
                  </button>
                  <button onClick={() => shareOnPlatform("twitter")}>
                  <i class='bx bxl-twitter'></i>
                  </button>
               
                </div>
              )}

              <div id="blogItermsNumbers">
                <div id="">
                  <small>
                    {" "}
                    <b>{loves} </b>Likes
                  </small>
                </div>
                <div>
                  <small>
                    {" "}
                    <b>{numberOfComments}</b> comments
                  </small>
                </div>
                <div id="">
                  <small>
                    <b>23</b> share
                  </small>
                </div>
              </div>
            </div>
          </div>
        )}
        {loading && <LoadingSpinner />}
      </div>

      {/* <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                <small>{title}</small>
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" id="sendBtnModal">
              <img
                src={`http://localhost:8000/uploads/${image}`}
                id="blogDesBoxImg"
              />
              <div id="sendBtnModalLikes">
                <small>
                  <i class="bx bxs-heart" id="theLikes"></i> You and{" "}
                  <span id="theLikes">{loves - 1}</span>
                  others
                </small>
                <small>
                  <span id="theLikes">{numberOfComments}</span> Comments
                </small>
              </div>
              <div id="modalLinksLikes">
                <small
                  onClick={() => {
                    submitRegHandler();
                    updatedLikes();
                  }}
                >
                  {" "}
                  <i class="bx bx-heart"></i>Like
                </small>

                <small>
                  <i class="bx bxs-comment-detail"></i>comment
                </small>

                <small>
                  <i class="bx bx-share-alt"></i>share
                </small>
              </div>
              <div id="theUserMessage">
                <i class="bx bxs-user-circle"></i>
                <small>{messages}</small>
              </div>
            </div>
            <div class="modal-footer">
              <form id="sendBtnModalForm">
                <input
                  type="text"
                  placeholder="add comment"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></input>
                <button onClick={submitRegComment}>
                  {" "}
                  <i class="bx bxs-send"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </>
  );
}

export default BlogDescription;
