import { SearchResultsData } from "@/data";
import React, { useState } from "react";
import ResultCard from "./base/ResultCard";

const SearchResults = () => {
  const [id, setId] = useState<number | null>(null);

  const results = SearchResultsData.map((item) => {
    return (
      <ResultCard
        isActive={item.id === id}
        handleClick={() => {
          setId(item.id);
        }}
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

  return (
    <div className="w-[480px] border-r border-r-amaka-grey-border">
      {results}
    </div>
  );
};

export default SearchResults;
