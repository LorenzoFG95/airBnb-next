import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Welcome from "./components/welcome";
import DefaultLayout from "./layouts/defaultLayout";
import { createContext } from "react";

export const UserContext = createContext();

const state = {
  name: "Lorenzo FG",
};

export default function Home() {
  return (
    <UserContext.Provider value={state}>
      <DefaultLayout>
        <div className={styles.container}>
          <Head>
            <title>AirBnb</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main>
            <Welcome />
          </main>
        </div>
      </DefaultLayout>
    </UserContext.Provider>
  );
}
