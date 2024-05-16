import React, { useContext } from "react";
import DetailCard from "./base/DetailCard";
import { ResultsContext } from "@/context/ResultsContext";
import { SearchResultsData } from "@/data";
import BriefCard from "./base/BriefCard";
import AboutCard from "./base/AboutCard";

const ResultDetails = () => {
  const resultsContext = useContext(ResultsContext);

  const resultData =
    resultsContext && SearchResultsData[resultsContext.id]
      ? SearchResultsData[resultsContext.id]
      : undefined;

  console.log(resultData);

  return (
    <section className="p-4 w-1/2 flex flex-col gap-6">
      <DetailCard data={resultData} />
      <BriefCard data={resultData} />
      <AboutCard data={resultData} />
    </section>
  );
};

export default ResultDetails;
