import { Header } from './components/Header';
import { Post } from './components/Post';

import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

// post
// author:{avatar_url:'', name:'', role:''}
//publishedAt: Date
//content: String

const posts = [
  {
    id: 1,
    author: {
      name: 'Angel Paez',
      role: 'Web Developer',
      avatarUrl: 'https://github.com/merma158.png',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          '  Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: 'jane.desing/doctorcare' },
    ],
    publishedAt: new Date('2022-08-12 20:00:00'),
  },
  {
    id: 2,
    author: {
      name: 'Ana Martinez',
      role: 'iOS Developer',
      avatarUrl: 'https://github.com/BiancaMalta.png',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      {
        type: 'paragraph',
        content:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam dolore non optio nihil aut, iusto repudiandae. Provident id blanditiis dicta!',
      },
      { type: 'link', content: 'jane.desing/doctorcare' },
    ],
    publishedAt: new Date('2022-08-10 20:00:00'),
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
