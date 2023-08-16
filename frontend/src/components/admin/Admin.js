import React from "react";
import "./Admin.css";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Admin() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid" id="adminSection">
        <div className="container-fluid" id="adminBox">
          <div id="admniNotifications">
            <button
              type="button"
              class="btn btn-secondary position-relative"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              <i class="bx bx-bell"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                9+
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>

            <button
              type="button"
              class="btn btn-secondary position-relative"
              onClick={() => {
                navigate("feedbacks");
              }}
            >
              <i class="bx bx-envelope"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                5+
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
          <div class="dropdown">
            <a
              class="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <b>ADMNI PANEL</b>
            </a>

            <ul class="dropdown-menu" id="dropdownMenu">
              <li>
                <Link className="nav-link" to="addproject" as={Link}>
                  <small>ADD PROJECT</small>
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="viewproject" as={Link}>
                  <small>VIEW PROJECTS</small>
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="addblog" as={Link}>
                  <small>ADD BLOG</small>
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="viewblog" as={Link}>
                  <small>BLOGS</small>
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="feedbacks" as={Link}>
                  <small>EMAILS</small>
                </Link>
              </li>
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
                <small>New email from Chimbo</small>{" "}
              </div>
              <div>
                <small>
                  <i>~06 Jan 2023</i>
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
                  New email from J.Smith <i class="bx bx-envelope"></i>
                </small>{" "}
              </div>
              <div>
                <small>
                  <i>~06 Jan 2023</i>
                </small>
              </div>
            </div>
            <div id="noficationListItemText">
              <small>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin piece of
                classical Latin <a href="#">Read more</a>
              </small>
            </div>
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
          {/* <h5>See more</h5> */}
        </div>
      </div>
    </>
  );
}

export default Admin;
