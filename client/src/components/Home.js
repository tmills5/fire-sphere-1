import React from "react";
import UserProfile from "./UserProfile";


const Home = ({user}) => {
  // console.log("Home User: ", user)
  return (
    <div id="home-parent">
      {/* <Header /> */}
      <main>
        {/* left sidebar */}
        <div className="left-nav">
          <ul>
            <li><a href='/'>Profile</a></li>
            <li><a href='/'>Messages</a></li>
            <li><a href='/'>Assignment</a></li>
            <li><a href='/'>Training</a></li>
            <li><a href='/'>Leave Tracking</a></li>
            <li><a href='/login' className='button'>Login</a></li>
          </ul>
        </div>

        {/* center content */}
        <article className="center-content">
          News and events and whatever user renders
        </article>

        {/* right sidebar */}
        <aside className="right-sidebar">
          {user ? <UserProfile user={user} /> : ''}
        </aside>
      </main>
    </div>
  );
}

export default Home;