import { useState } from 'react'
// import Post from './assets/components/Post'
import './App.css'
// import Header from './assets/components/Header'
import {Routes,Route} from 'react-router-dom'
import LogIn from './assets/components/LogInPage'
import Layout from './assets/components/Home'
import IndexPosts from './assets/components/IndexPosts'
import RegisterPage from './assets/components/RegisterPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      {/* <Route path='/' element={Layout} > */}
      <Route path='/' element={<Layout/>}>
        <Route index element={<IndexPosts/>}/>

        <Route path='login' element={<LogIn/>} />
        <Route path='/register' element={<RegisterPage/>} />
      </Route>
        
      
      
      
    </Routes>
    
    </>
    
  )
}

export default App
