import './App.css'
import { v4 as id } from 'uuid';

function App() {
  const blogs = [
    { title: "React Basics", content: "Learn the basics of React.", isFeatured: true },
    { title: "Advanced React", content: "Delve deeper into React.", isFeatured: false },
    { title: "React Performance Tips", content: "Optimize your React apps.", isFeatured: true },
  ];
  
  return (
   <>
   {
    blogs.map(blog=>(
      <div key={id()}>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
        <span>{blog.isFeatured}</span>
      </div>
    ))
   }
   </>
  )
}

export default App
