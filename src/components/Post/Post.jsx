import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './Post.module.css'

export function Post({ author, publishedAt, content }) {
    const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR, });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: ptBR, addSuffix: true})

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar className={styles.avatar} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>Fernando Zuchi</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title={publishedDateFormat} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {content.map((line, index) => {
                    if(line.type == 'paragraph') {
                        return <p>{line.content}</p>
                    } else if(line.type == 'link') {
                        return <p><a>{line.content}</a></p>
                    }
                })}
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                    placeholder='Deixe um comentário'
                />
                <button type='submit'>Comentar</button>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    );
}