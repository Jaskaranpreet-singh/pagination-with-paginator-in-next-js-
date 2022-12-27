import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Link from 'next/link'

function Items({ currentItems }) {
  return (
    <>
      <div id='main-container'>
        <div className='container'>
          {
            currentItems.map((val, index) => {
              return (
                <div className='card'>
                  <Link href={`/${val.id}`}><img src={`https://image.tmdb.org/t/p/w400${val.poster_path}`} alt="" srcset="" /></Link>
                  <h3>{val.title}</h3>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export function PaginatedItems({ itemsPerPage, items }) {

  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

