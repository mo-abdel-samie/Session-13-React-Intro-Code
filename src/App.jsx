import { AddForm } from "./components/AddForm";
import { Footer } from "./components/Footer";
import { Headr } from "./components/Headr";
import { NavBar } from "./components/NavBar";
import { ToDoItems } from "./components/ToDoItems";

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

const Title = (ay7aga) => (
  <h2>
    {ay7aga.greet ? ay7aga.greet : "Hello"} {ay7aga.name}{" "}
  </h2>
);

export default function App() {
    return (
        <>
        <Headr />
        <NavBar />
            <main>
                <AddForm />
                <ToDoItems />

            <section>
                <Title name="A.Samie" greet="Hi" />
                <Title name="Jo" />
                <Title name="Yara" />
                <Title name="Fatma" />
                <Title name="Mo" />
            </section>
        </main>
        <Footer />
        </>
  );
}
