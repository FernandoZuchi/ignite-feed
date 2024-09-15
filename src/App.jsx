import { Header } from "./components/Header/Header"
import './global.css'
import styles from './App.module.css'
import { Post } from "./components/Post/Post"
import { Sidebar } from "./components/Sidebar/Sidebar"

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/127436816?v=4',
      name: 'Fernando Zuchi',
      role: 'Developer FullStack'
    },
    content: [
      { type: 'paragraph', content: 'Fala aí developers!!' },
      { type: 'paragraph', content: 'Ontem dia 13 /09 assinei a plataforma da @RocketSeat!! Estou ansioso para adquirir e apronfundar meus conehcimentos nas tecnologias mais importantes para o mercado de trabalho!' },
      { type: 'link', content: 'https://app.RocketSeat.com.br' },
    ],
    publishedAt: new Date('2024-09-14 23:55:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/74840490?v=4',
      name: 'Brunão Dev',
      role: 'Developer FullStack'
    },
    content: [
      { type: 'paragraph', content: 'Fala rapaziada do TI!!' },
      { type: 'paragraph', content: 'Indiquei a rocketseat pro meu developer favorito @FernandoZuchi e agora ele tá aprofundando o aprendizado dele em programação fullstack! Façam o mesmo e acesse: ' },
      { type: 'link', content: 'https://app.RocketSeat.com.br' },
    ],
    publishedAt: new Date('2024-09-14 23:57:35')
  }
]

export const App = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post, index) => {
            return (
              <Post 
                key={index}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

