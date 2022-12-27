import React, { useState } from 'react'
import { useEffect } from 'react';
import Link from 'next/link'

function Search(item) {
  const [searchTerm, setSearchTerm] = useState('')
  const [items, setItems] = useState([]);
  const [check, checkItems] = useState("");
  useEffect(() => {
    if (item) {
      setItems(item.item);
    }
  }, []);
  if (items.items === undefined) {
    return <h1>Loading....</h1>
  }
  return (<div className='ss' onClick={() => { checkItems("") }}>
    <div className="search">
      <div className='logo'>The Movie db</div>
      <input type="text" value={check} placeholder="search...."
        onChange={(e) => {
          checkItems(e.target.value)
          return (
            setSearchTerm(e.target.value)
          )

        }} />
      <div className='child'>
        {items.items.filter((val) => {
          if (searchTerm == "") {
            return val
          }
          else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((val, key) => {
          console.log(check);
          if (check != "") {
            return<div className='search-result' onClick={() => { window.location.href = `http://localhost:3000/${val.id}`}}> {val.title} </div>
          } else {

          }
        })}
      </div>

    </div>
  </div>
  );
}
export default Search;