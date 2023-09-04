import React from "react";
import "./Admin.css";
import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";


function Admin() {
  const [headingText, setHeadingText] = useState("ADD PROJECTS ");
  const [countEmail, setCountEmail] = useState(0);
  const [feedbacks, setFeedbacks] = useState([]);
  const [messages, setMessages] = useState([]);
  const [messageDate, setMessageDate] = useState("");

  const getFeedbacks = async () => {
    const response = await fetch("http://localhost:8000/feedback").then(
      (response) => response.json()
    );
    const lastObjectIndex = response.length - 1;
    const User = response[lastObjectIndex].name;
    const userMessage = response[lastObjectIndex].message;
    const UserMessageDate = response[lastObjectIndex].createdAt;

    const truncateMessage = (message, maxWords) => {
      const words = userMessage.split(" ");

      if (words.length <= maxWords) {
        return userMessage;
      }

      const truncatedMessage = words.slice(0, maxWords).join(" ") + " ...";
      return truncatedMessage;
    };

    const truncatedLastMessage = truncateMessage(userMessage.message, 15);
    setFeedbacks(User);
    setCountEmail(response.length);
    setMessages(truncatedLastMessage);
    setMessageDate(UserMessageDate);
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  const handleButtonClick = (buttonName) => {
    setHeadingText(buttonName);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="container-fluid" id="adminSection">
        <div className="container-fluid" id="adminBox">
          <div id="admniNotifications">
            <button
              type="button"
              class="btn btn-dark position-relative"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <i class="bx bx-bell"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                7+
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>

            <button
              type="button"
              class="btn btn-dark position-relative"
              onClick={() => {
                navigate("feedbacks");
                handleButtonClick("VIEW EMAILS");
              }}
            >
              <i class="bx bx-envelope"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {countEmail}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
          <div id="admnSectionHead">
            <h4>{headingText}</h4>
          </div>
          <div class="dropdown">
            <a
              class="btn btn-dark dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="admnMenu"
            >
              <small>
                {" "}
                ADMN MENU <i class="bx bx-menu-alt-right"></i>
              </small>
            </a>

            <ul class="dropdown-menu" id="dropdownMenu">
              <li>
                <Link
                  className="nav-link"
                  to="addproject"
                  as={Link}
                  onClick={() => handleButtonClick("ADD PROJECTS")}
                >
                  <small>ADD PROJECT</small>
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="viewproject"
                  as={Link}
                  onClick={() => handleButtonClick("VIEW PROJECTS")}
                >
                  <small>VIEW PROJECTS</small>
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="addblog"
                  as={Link}
                  onClick={() => handleButtonClick("ADD BLOGS")}
                >
                  <small>ADD BLOG</small>
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="viewblog"
                  as={Link}
                  onClick={() => handleButtonClick("VIEW BLOGS")}
                >
                  <small>BLOGS</small>
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link"
                  to="feedbacks"
                  as={Link}
                  onClick={() => handleButtonClick("VIEW EMAILS")}
                >
                  <small>EMAILS</small>
                </Link>
              </li>
              {/* <li>
                <Link
                  className="nav-link"
                  to="updateblogs"
                  as={Link}
                  onClick={() => handleButtonClick("UPDATE BLOGS")}
                >
                  <small>UPDATE BLOGS</small>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className="container" id="adminPanel">
        <Outlet />
      </div>

      <div
        class="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header" id="offcanvas-header">
          <button type="button" class="btn btn-warning">
            Notifications <span class="badge text-bg-secondary">4</span>
          </button>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <ul id="noficationList">
            <div id="noficationListItem">
              <div>
                <small id="userName">
                  <b>
                    New message from {feedbacks} and {countEmail - 1} others
                  </b>
                  <i class="bx bx-envelope"></i>
                </small>
              </div>
            </div>
            <div id="noficationListItemText">
              <small>
                {messages}
                <a
                  href="#"
                  onClick={() => {
                    navigate("feedbacks");
                  }}
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  Read more
                </a>
              </small>
            </div>
            <small id="userMessage">
              <i>{messageDate}</i>
            </small>
          </ul>

          <ul id="noficationList">
            <div id="noficationListItem">
              <div>
                <small>
                  New comment <i class="bx bx-comment"></i>
                </small>{" "}
              </div>
              <div>
                <small>
                  <i>~06 March 2023</i>
                </small>
              </div>
            </div>
            <div id="noficationListItemText">
              <small>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin{" "}
                <a href="#">Read more</a>
              </small>
            </div>
          </ul>
          <ul id="noficationList">
            <div id="noficationListItem">
              <div>
                <small>
                  New like <i class="bx bx-like"></i>
                </small>{" "}
              </div>
              <div>
                <small>
                  <i>~06 Feb 2023</i>
                </small>
              </div>
            </div>
            <div id="noficationListItemText">
              <small>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin{" "}
                <a href="#">Read more</a>
              </small>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Admin;
