import { useState } from "react"
import Info3 from "./components/Info3";
const posts = [
  {
    id: 1,
    author: "John Doe",
    title: "Introduction to JavaScript",
    content:
      "JavaScript is a versatile language used for both front-end and back-end development.",
  },
  {
    id: 2,
    author: "Jane Smith",
    title:
      "Understanding Asynchronous Programming",
    content:
      "Asynchronous programming allows for non-blocking operations in JavaScript.",
  },
  {
    id: 3,
    author: "Alex Johnson",
    title: "Mastering ES6 Features",
    content:
      "ES6 introduced many new features like arrow functions, classes, and template literals.",
  },
  {
    id: 4,
    author: "Emily Davis",
    title: "A Guide to Modern Web Development",
    content:
      "Modern web development involves frameworks like React, Angular, and Vue.js.",
  },
];
  function App() {
    const [info, setInfo] = useState(posts)
    const[title,setTitle] = useState("")
    const[content,setContent] = useState("")
    const[author,setAuthor] = useState("")
    const titleInput = (e)=>{
      setTitle(e.target.value)
    }
    const contentInput = (e) => {
      setContent(e.target.value);
    };
    
    const authorInput = (e) => {
      setAuthor(e.target.value);
    };
    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the form from refreshing the page
      const newPost = { id: info.length + 1, title, content, author };
      setInfo([...info, newPost]); // Add the new post to the info array
      setTitle(""); // Clear input fields
      setContent("");
      setAuthor("");
    };
   const handleDelete = (id)=>{
    const updatePosts = info.filter(post=> post.id !== id )
    setInfo(updatePosts)
   }
 
    return (
      <div>
       {info.map((post)=>(
           <div style={{border:"1px solid red", width:"600px"}} key={post.id}>
            <p> {post.title} </p>
            <p>{post.content}</p>
            <h1>{post.author}</h1>
            <button onClick={()=> handleDelete(post.id) } style={{width:"100px", cursor:"pointer"}} type="submit">delete</button>
           </div>

        ))}
        <form>
            <div>
                <label htmlFor="">title</label>
                <input value={title} onChange={titleInput} type="text" />
            </div>
            <div>
                <label htmlFor="">content</label>
                <input value={content} onChange={contentInput} type="text" />
            </div>
            <div>
                <label htmlFor="">author</label>
                <input value={author} onChange={authorInput} type="text" />
            </div>
        </form>
        
        
        <button onClick={handleSubmit} style={{width:"100px", cursor:"pointer"}} type="submit">submit</button>
     </div>
    )}
  

  export default App
