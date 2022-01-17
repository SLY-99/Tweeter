import React from 'react';
import './App.scss';
import Sidebar from "./Components/Sidebar/sidebar";
import Header from "./Components/Header/header";
import Aside from "./Components/Aside/aside";
import Main from "./Components/Main/main";

function App() {

  const [lang , setLang] = React.useState("en");

  return (
    <>
    <div className='containers'>
     <div className="row">
      <div className="col-auto border-end border-3">
       <Sidebar lang={lang}/>
      </div>
      <div className="col-6 border-end border-3 m-0 p-0">
        <Header setLang = {setLang} lang={lang}/>
        <Main lang={lang}/>
      </div>
      <div className="col-3 me-0 pe-0">
        <Aside lang={lang}/>
      </div>
     </div>
    </div>
    </>
  );
}

export default App;
