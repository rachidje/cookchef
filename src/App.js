import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import styles from "./App.module.scss";
import { seedRecipes } from "./data/seed";
import { useState } from "react";
import Admin from "./pages/Admin/Admin";

// seedRecipes();

function App() {
  const [page, setPage] = useState("homepage");

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header setPage={setPage} />
      {page === "homepage" && <Homepage />}
      {page === "admin" && <Admin />}
      <Footer />
    </div>
  );
}

export default App;
