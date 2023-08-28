import React from "react";
import LoadingSpinner from "../loader/LoadingSpinner";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
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
  const [count, setCount]= useState(0);

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
        setLoading(false);
      })

      .catch((err) => console.log(err));
  }, []);
 const Likes = ()=>{
    return(
        setCount( +1)
    )
 }
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
                <h5>{title}</h5>
                <h5>{name}</h5>
                <small>{description}</small>
              </div>
              <div id="projectDescriptionSites">
                <small>
                  <a href={siteLink}>Visit Site</a>
                </small>
                <small>
                  <a href={githubLink}>See source code</a>
                </small>
              </div>
              <div id="projectDescriptionLink">
                <div id="projectDescriptionLinkIcons">
                  <div id="projectDescriptionLinkIconsLike">
                    <i class="bx bx-like" onClick={Likes}></i>
                    <small>{count}</small>
                  </div>
                  <div id="projectDescriptionLinkIconsLike">
                  
                    <i class="bx bx-share-alt"></i>
                  </div>
                <div id="projectDescriptionInputBox">
                  <input type="text" placeholder="Add a comment" />
                  <i class="bx bxs-send"></i>
                </div>
                
                </div>
                <div id="projectDescriptionLinkDate">
                  <small>{date}</small>
                </div>
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

export default ProjectDescription;
