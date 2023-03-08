import React from "react";
import Header from "./Header";


const Home = () => {
  // console.log("Home User: ", user)
  return (
    <div id="home-parent">
      {/* <Header /> */}
      <main>
        {/* left sidebar */}
        <aside className="left-sidebar"></aside>

        {/* center content */}
        <article className="center-content"></article>

        {/* right sidebar */}
        <nav className="right-nav"></nav>
      </main>
    </div>
  );
}

export default Home;