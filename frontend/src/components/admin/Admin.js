import React from "react";
import "./Admin.css";
import { Link, Outlet } from "react-router-dom";
function Admin() {
  return (
    <>
      <div className="container" id="adminSection">
        <div id="adminBox">
          <Link className="nav-link" to="addproject" as={Link} id="adminNavTxt">
            <p>ADD PROJECTS</p>
          </Link>

          <Link className="nav-link" to="viewproject" as={Link} id="adminNavTxt">
            <p>VIEW PROJECTS</p>
          </Link>

          <Link className="nav-link" to="addblog" as={Link} id="adminNavTxt">
            <p>ADD BLOG</p>
          </Link>

          <Link className="nav-link" to="viewblog" as={Link} id="adminNavTxt">
            <p>VIEW BLOGS</p>
          </Link>

          <Link className="nav-link" to="feedbacks" as={Link} id="adminNavTxt">
            <p>VIEW EMAILS</p>
          </Link>

          <Link className="nav-link" to="chats" as={Link} id="adminNavTxt">
            <p> VIEW CHATS</p>
          </Link>

          {/* <div id="projectNotification">
            <i class="bx bx-bell"></i>
            <small>3</small>
          </div> */}
        </div>
      </div>
      <div className="container" id="adminPanel">
        <Outlet />
      </div>
    </>
  );
}

export default Admin;
