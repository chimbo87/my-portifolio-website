import React from "react";
import LoadingSpinner from "../loader/LoadingSpinner";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../footer/Footer";

function BlogDescription() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImageurl] = useState("");
  const [date, setDate] = useState("");
  const [loves, setLoves] = useState("");
 

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
        setDate(result.data.createdAt);
        setLoves(result.data.likes);
        setLoading(false);
      })

      .catch((err) => console.log(err));
  }, []);

  const submitRegHandler = async () => {
    const response = await fetch(
      `http://localhost:8000/blogs/likes${id}`,
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
    return setLoves(loves + 1);
  };
  return (
    <>
      <div className="container-fluid" id="projectSectionBox"></div>
      <div className="container">
        {!loading && (
          <div id="blogDesBox">
            <img src={image} id="blogDesBoxImg"></img>

            <div>
              <h4>{title}</h4>
            </div>
            <div>
              <small>Archford N</small>
              <small>{date}</small>
            </div>
            <div>
              <h5>{heading}</h5>
            </div>
            <div>
              <p>{description}</p>
            </div>
            <div id="blogDesLikes">
              <div id="blogDesLikesBox">
                <i class="bx bx-heart"  onClick={() => {
                      submitRegHandler();
                      updatedLikes();
                    }}></i>
                <small>{loves} likes</small>
              </div>
              <div id="blogDesCommentBox">
                <input type="text" placeholder="Add a comment..." />{" "}
                <i class="bx bxs-send" />
              </div>
              <div id="blogDesShareBox">
                <i class="bx bx-share-alt"></i>
                <small>share 12</small>
              </div>
            </div>
          </div>
        )}
        {loading && <LoadingSpinner />}
      </div>
      <Footer />
    </>
  );
}

export default BlogDescription;
