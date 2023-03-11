import Homepage from "./pages/Homepage/Homepage";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
