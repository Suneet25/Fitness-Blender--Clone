import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavBar } from "./NavBar";
import { CommunityCard } from "./CommunityCard";
import { Footer } from "./Footer";
let getData = (page) => {
  return axios.get(`https://reqres.in/api/users?page=${page}`);
};
export const Community = () => {
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  useEffect(() => {
    getData(page).then((res) => setData(res.data.data));
  }, [page]);
  return (
    <div>
      <NavBar />
      <h1>Community</h1>
      {data.map((item) => (
        <div>
          <CommunityCard
            key={item.id}
            firstName={item.first_name}
            email={item.email}
            avatar={item.avatar}
          />
        </div>
      ))}
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </button>
        <button>{page}</button>
        <button onClick={() => setPage(page + 1)}>NEXT</button>
      </div>
      <Footer />
    </div>
  );
};
