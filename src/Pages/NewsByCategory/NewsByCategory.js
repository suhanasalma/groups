import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllNews from '../AllNews/AllNews';

const NewsByCategory = () => {
  const allNews = useLoaderData()
   return (
      <div className="">
       {allNews.map((news) => (
         <AllNews key={news.id} news={news}/>
       ))}
     </div>
   );
};

export default NewsByCategory;