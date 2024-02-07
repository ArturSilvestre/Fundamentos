import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author ="Artur Silvestre"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti possimus a soluta fuga accusantium, commodi maxime odio non pariatur illum nostrum necessitatibus praesentium, reprehenderit dignissimos minus nesciunt aspernatur architecto" 
        />
        <Post 
          author ="Diego Fernandes"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti possimus a soluta fuga accusantium, commodi maxime odio non pariatur illum nostrum necessitatibus praesentium, reprehenderit dignissimos minus nesciunt aspernatur architecto" 
        />
        </main>
      </div>
    </>
  )
}
