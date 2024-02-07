import { Post } from './Post';
import { Header } from './components/Header';
import './global.css';

export function App() {
  return (
    <>
      <Header />

      <Post 
        author ="Artur Silvestre"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti possimus a soluta fuga accusantium, commodi maxime odio non pariatur illum nostrum necessitatibus praesentium, reprehenderit dignissimos minus nesciunt aspernatur architecto" 
      />
      <Post 
        author ="Diego Fernandes"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit deleniti possimus a soluta fuga accusantium, commodi maxime odio non pariatur illum nostrum necessitatibus praesentium, reprehenderit dignissimos minus nesciunt aspernatur architecto" 
      />
    </>
  )
}
