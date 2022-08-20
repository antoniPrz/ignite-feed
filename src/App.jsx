import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            autor='Angel Paez'
            cargo='Dev Ops'
            avatar='https://github.com/merma158.png'
            contenido='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam dolore non optio nihil aut, iusto repudiandae. Provident id blanditiis dicta!'
          />
          <Post
            autor='Ana Garrido'
            cargo='UI Designer'
            avatar='https://github.com/BiancaMalta.png'
            contenido='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam dolore non optio nihil aut, iusto repudiandae. Provident id blanditiis dicta!'
          />
        </main>
      </div>
    </>
  );
}
