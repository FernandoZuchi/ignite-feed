import { Header } from "./components/Header/Header"
import './global.css'
import styles from './App.module.css'
import { Post } from "./components/Post/Post"
import { Sidebar } from "./components/Sidebar/Sidebar"

export const App = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
  )
}

