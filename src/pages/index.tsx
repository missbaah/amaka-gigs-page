import FilterMenu from "@/components/menu/FilterMenu";
import NavBar from "@/components/menu/NavBar";
import ResultDetails from "@/components/results/ResultDetails";
import SearchResults from "@/components/results/SearchResults";
import SideMenu from "@/components/menu/SideMenu";

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
