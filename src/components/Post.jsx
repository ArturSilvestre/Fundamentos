import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/ArturSilvestre.png" />
          <div className={styles.authorInfo}>
            <strong>Artur Silvestre</strong>
            <span>FrontEnd Developer</span>
          </div>
        </div> 

        <time title='08 de Fevereiro ás 15:15' dateTime="2024-02-08 15:15">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RocketSeat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉<a href="#">{' '}jane.design/doctorcare</a></p>
        <p> 
          <a href="#">#novoprojeto</a>{' '}
          <a href=''>#nlw</a>{' '}   
          <a href=''>#rocketseat</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea  
          placeholder='Deixe um comentário'
        />

        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>


      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}