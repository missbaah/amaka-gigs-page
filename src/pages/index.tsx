import FilterMenu from "@/components/FilterMenu";
import NavBar from "@/components/NavBar";
import SideMenu from "@/components/SideMenu";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section className="flex">
        <SideMenu />
        <section className="flex flex-col">
          <FilterMenu />
        </section>
      </section>
    </main>
  );
}
