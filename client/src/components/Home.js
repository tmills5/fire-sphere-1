import React from "react";
import Header from "./Header";


const Home = () => {
  // console.log("Home User: ", user)
  return (
    <div id="home-parent">
      {/* <Header /> */}
      <main>
        {/* left sidebar */}
        <div className="left-nav">
          <ul>
            <a href='#'><li>Home</li></a>
            <a href='#'><li>Profile</li></a>
            <a href='#'><li>Messages</li></a>
            <a href='#'><li>Assignment</li></a>
            <a href='#'><li>Training</li></a>
            <a href='#'><li>Leave</li></a>
          </ul>
        </div>

        {/* center content */}
        <article className="center-content">
          News and events and whatever user renders
        </article>

        {/* right sidebar */}
        <aside className="right-sidebar">
          right nav with user pic and current info
        </aside>
      </main>
    </div>
  );
}

export default Home;