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
          <Post 
            author="Fernando Zuchi" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis nisi odit est laborum quae ducimus voluptatem eaque enim aperiam illo id cumque expedita provident sapiente inventore nihil, tempora quod!"
          />
          <Post 
            author="Zézin" 
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit veritatis nisi odit est laborum quae ducimus voluptatem eaque enim aperiam illo id cumque expedita provident sapiente inventore nihil, tempora quod!"
          />
        </main>
      </div>
    </>
  )
}

