import { Comment } from '../Comment/Comment';
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/127436816?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Fernando Zuchi</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="14 de setembro às 20:01:43" dateTime="2024-09-14 20:01:43">Publicado há 29 minutos</time>
            </header>

            <div className={styles.content}>
                <p>Fala aí developers!!</p>

                <p>Ontem dia 13/09 assinei a plataforma da @RocketSeat!! Estou ansioso para adquirir e apronfundar meus conehcimentos nas tecnologias mais importantes para o mercado de trabalho!</p>

                <p>Confira: <a>"https://app.RocketSeat.com.br"</a></p>
                <p>
                    <a>#aprendendo</a>{' '}
                    <a>#rocketSeat</a>{' '}
                    <a>#tamoJunto</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />
                <button type='submit'>Comentar</button>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>

            </div>
        </article>
    );
}