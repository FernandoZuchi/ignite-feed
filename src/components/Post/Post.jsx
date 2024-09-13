import styles from './Post.module.css'

export function Post(props) {
    return (
        <>
            <strong>{props.author}</strong>
            <p>{props.description}</p>
        </>
    );
}