import { Header } from './components/Header';
import { Post } from './Post';

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
            autor='Angel'
            contenido='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam dolore non optio nihil aut, iusto repudiandae. Provident id blanditiis dicta!'
          />
          <Post
            autor='Angel'
            contenido='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam dolore non optio nihil aut, iusto repudiandae. Provident id blanditiis dicta!'
          />

          <Post />
        </main>
      </div>
    </>
  );
}
