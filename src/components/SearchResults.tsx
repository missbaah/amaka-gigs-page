import { SearchResultsData } from "@/data";
import React, { useContext } from "react";
import ResultCard from "./base/ResultCard";
import { ResultsContext } from "@/context/ResultsContext";

const SearchResults = () => {
  const resultsContext = useContext(ResultsContext);

  console.log(resultsContext?.id);

  const results = SearchResultsData.map((item) => {
    return (
      <ResultCard
        key={item.id}
        isActive={item.id === resultsContext?.id}
        handleClick={() => {
          resultsContext?.setResultId(item.id);
        }}
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
    <div className="w-1/2 border-r border-r-amaka-grey-border">{results}</div>
  );
};

export default SearchResults;
