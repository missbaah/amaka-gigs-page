import FilterMenu from "@/components/FilterMenu";
import NavBar from "@/components/NavBar";
import ResultDetails from "@/components/ResultDetails";
import SearchResults from "@/components/SearchResults";
import SideMenu from "@/components/SideMenu";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className="flex">
        <SideMenu />
        <section className="flex flex-col">
          <FilterMenu />
          <div className="border-b border-b-amaka-grey-border w-full"></div>
          <section id="resultsArea" className="flex pr-16">
            <SearchResults />
            <ResultDetails />
          </section>
        </section>
      </section>
    </main>
  );
}
