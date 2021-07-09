import Head from "next/head";
import Image from "next/image";
import Main from "../components/Main";
import Top from "../components/Top";

export default function Home() {
  return (
    <div className="antialiased bg-[#c5e4e7] sm:h-[100vh]">
      <Head>
        <title>Frontend Mentor | Tip calculator app</title>
        <meta name="description" content="Generated by create next app" />

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        ></link>
      </Head>

      <main>
        <Top />
        <Main />
      </main>

      <footer></footer>
    </div>
  );
}
