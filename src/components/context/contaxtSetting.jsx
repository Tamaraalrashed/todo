import React, { useState } from "react";


const PaginationContext = React.createContext();

function Pagination(props) {

  const [currentPage, setCurrentPage] = useState(1);
  const [PerPage, setPerPage] = useState(3);
  const indexLastItem = currentPage * PerPage;
  const indexFirstItem = indexLastItem - PerPage;


  const list = props.list.sort((a, b) => {
    if (a.difficulty > b.difficulty) {
      return 1;
    } else {
      return -1;
    }
  });

  let item = list.slice(indexFirstItem, indexLastItem);
  const page = pageNumber => setCurrentPage(pageNumber);
  const setItems = numberOfPages => setPerPage(numberOfPages);

  const state = {
    currentPage,
    PerPage,
    setCurrentPage,
    setPerPage,
    page,
    item,
    setItems,
  }

  return (
    <PaginationContext.Provider value={state}>
      {props.children}
    </PaginationContext.Provider>
  );
}

export default Pagination;

