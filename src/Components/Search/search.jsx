import React from 'react';
import '../Search/search.scss';
import Data from "../../Localization/data";
import { Context } from '../../Context/localization';


function Search() {

  const { state } = React.useContext(Context)
  return (
    <>
    <input className='search' type="search" placeholder={Data[state].aside.trends.search} />
    </>
  );
}

export default Search;