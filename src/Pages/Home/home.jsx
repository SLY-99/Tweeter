import React from 'react';
import '../Home/home.scss';
import Sidebar from "../../Components/Sidebar/sidebar";
import Header from "../../Components/Header/header";
import Main from "../../Components/Main/main";
import Search from "../../Components/Search/search";
import Trends from "../../Components/Trends/trends";
import Follow from "../../Components/Follow/follow";
import { Context as ThemeContext } from '../../Context/theme'

function Home() {
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
        <Main/>
      </div>
      <div className="col-3 me-0 pe-0">
        <div className='aside__wrapper'>
          <Search/>
          <Trends/>
          <Follow/>
        </div>
      </div>
     </div>
    </div>
    </div>
    </>
  );
}

export default Home;