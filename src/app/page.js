import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/organisims/Navbar";

export default function Home() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>
    </>
  );
}
