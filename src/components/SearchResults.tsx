import { SearchResultsData } from "@/data";
import React from "react";
import ResultCard from "./base/ResultCard";

const SearchResults = () => {
  const results = SearchResultsData.map((item) => {
    return (
      <ResultCard
        key={item.id}
        name={item.name}
        earned={item.earned}
        date={item.timeCreated}
        brief={item.brief}
        title={item.title}
        location={item.location}
        rate={item.rate}
        imageSrc={item.image}
      />
    );
  });

  return <div className="w-[480px] mx-3">{results}</div>;
};

export default SearchResults;
