import styles from "./page.module.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Concatenations from "./components/concatenations";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Concatenations />
      </main>
      <Footer />
    </div>
  );
}
