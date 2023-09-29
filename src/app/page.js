import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/organisims/Navbar";
import MainSection from "./components/organisims/MainSection";
import TodoStore from './controllers/TodoListStore.jsx'
import Note from "./components/molecules/Note";
import NavbarRightSide from "./components/molecules/NavbarRightSide";

export default function Home() {
 
  return (
    <>
      <nav className="header">
   
        <Navbar >
  <TodoStore>
      </TodoStore>
        </Navbar>
        <MainSection />
      </nav>
    </>
  );
}
