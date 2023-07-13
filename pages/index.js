import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import DefaultLayout from "./layouts/defaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <div className={styles.container}>
        <Head>
          <title>AirBnb</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className={styles.title}>Homepage</h1>
          <h2>Usa la navbar per navigare</h2>
        </main>
      </div>
    </DefaultLayout>
  );
}
