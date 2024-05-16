import React, { useContext } from "react";
import DetailCard from "./base/DetailCard";
import { ResultsContext } from "@/context/ResultsContext";
import { SearchResultsData } from "@/data";
import AboutCard from "./base/AboutCard";

const ResultDetails = () => {
  const resultsContext = useContext(ResultsContext);

  const resultData =
    resultsContext && SearchResultsData[resultsContext.id]
      ? SearchResultsData[resultsContext.id - 1]
      : null;

  console.log(resultData);

  return (
    <section className="p-4 w-1/2 flex flex-col gap-6">
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
      <AboutCard
        intro={resultData?.about.intro}
        body={resultData?.about.body}
        conclusion={resultData?.about.conclusion}
        salutation={resultData?.about.salutation}
        name={resultData?.name}
        skills={resultData?.about.skills}
      />
    </section>
  );
};

export default ResultDetails;
