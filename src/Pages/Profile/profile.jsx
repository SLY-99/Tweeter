import React from 'react';
import '../Profile/profile.scss';
import Sidebar from "../../Components/Sidebar/sidebar";
import Header from "../../Components/Profile-header/profile-header";
import Intro from "../../Components/Intro/intro";
import Search from "../../Components/Search/search";
import Trends from "../../Components/Trends/trends";
import Follow from "../../Components/Follow/follow";
import Catolog from "../../Components/Catolog/catolog";
import Tweets from "../../Components/Profile-tweets/profile-tweets";
import { Context as ThemeContext } from '../../Context/theme'

function Profile() {
  const { theme } = React.useContext(ThemeContext);

  return (
    <>
    <div className={theme == "light" ? "light" : "dark"}>
    <div className='containers'>
     <div className="row">
      <div className="col-auto border-end border-3">
       <Sidebar/>
      </div>
      <div className="col-6 border-end border-3 m-0 p-0">
        <Header/>
        <Intro/>
        <Tweets/>
      </div>
      <div className="col-3 me-0 pe-0">
        <div className='aside__wrapper'>
          <Search/>
          <Catolog/>
          <Follow/>
          <Trends/>
        </div>
      </div>
     </div>
    </div>
    </div>
    </>
  );
}

export default Profile;