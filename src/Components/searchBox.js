import React from "react";
import BookData from "../Data.json";

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        type="text"
        placeholder="Type to Search..."
        value={props.value}
        onChange={(event) => props.setSearch(event.target.value)}
        name="search"
        data={BookData}
      ></input>
    </div>
  );
};

export default SearchBox;
