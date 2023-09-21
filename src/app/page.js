import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/organisims/Navbar";
import MainSection from "./components/organisims/MainSection";

export default function Home() {
  return (
    <>
      <nav className="header">
        <Navbar />
        <MainSection />
      </nav>
    </>
  );
}
