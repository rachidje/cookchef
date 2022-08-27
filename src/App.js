import Content from "./components/layout/Content";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App;
