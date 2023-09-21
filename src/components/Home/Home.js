import { useContext } from "react";
import styles from "./Home.module.css"
import Intro from "./Intro/Intro";
import Menu from "./Menu/Menu";
import AuthContext from "../Auth-Context/AuthContext";

const Home = () => {
    const ctx = useContext(AuthContext);
    return (
      <main className={styles.main}>
        <Intro></Intro>
        <Menu></Menu>
      </main>
    );
}

export default Home;