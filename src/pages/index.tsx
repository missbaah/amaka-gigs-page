import FilterMenu from "@/components/menu/FilterMenu";
import NavBar from "@/components/menu/NavBar";
import ResultDetails from "@/components/results/ResultDetails";
import SearchResults from "@/components/results/SearchResults";
import SideMenu from "@/components/menu/SideMenu";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Amaka Gigs Web Page</title>
      </Head>
      <main>
        <NavBar />
        <section className="flex">
          <SideMenu />
          <section className="flex flex-col">
            <FilterMenu />
            <div className="border-b border-b-amaka-grey-border w-full"></div>
            <section id="resultsArea" className="flex pr-14">
              <SearchResults />
              <ResultDetails />
            </section>
          </section>
        </section>
      </main>
    </>
  );
}
