import React, { useContext } from "react";
import DetailCard from "./base/DetailCard";
import { ResultsContext } from "@/context/ResultsContext";
import { SearchResultsData } from "@/data";

const ResultDetails = () => {
  const resultsContext = useContext(ResultsContext);

  const resultData =
    resultsContext && SearchResultsData[resultsContext.id]
      ? SearchResultsData[resultsContext.id - 1]
      : SearchResultsData[resultsContext?.id - 1];

  console.log(resultData);

  return (
    <section className="p-4 w-full">
      <DetailCard
        name={resultData?.name}
        location={resultData?.location}
        title={resultData?.title}
        imageSrc={resultData?.image}
        date={resultData?.timeCreated}
        experienceLevel={resultData?.experienceLevel}
        rate={resultData?.rate}
        earned={resultData?.earned}
      />
    </section>
  );
};

export default ResultDetails;
