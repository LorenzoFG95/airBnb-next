import Link from "next/link";
import DefaultLayout from "./layouts/defaultLayout";

export default function About() {
  return (
    <>
      <DefaultLayout>
        <h1>Pagina about</h1>
        <h2>
          <Link href="/">Back to home</Link>
        </h2>
      </DefaultLayout>
    </>
  );
}
