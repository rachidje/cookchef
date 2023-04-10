import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import styles from "./App.module.scss";
import { seedRecipes } from "./data/seed";
import { Suspense } from "react";
import { Outlet } from "react-router";

// seedRecipes();

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="d-flex flex-column flex-fill">
        <Suspense >
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
