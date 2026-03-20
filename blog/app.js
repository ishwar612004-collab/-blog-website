import { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(()=>{
    fetch('http://127.0.0.1:8000/posts/')
    .then(res=>res.json())
    .then(data=>setPosts(data));
  },[]);

  const addPost = async () => {
    await fetch('http://127.0.0.1:8000/add/',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify({title, content:"Demo"})
    });
    window.location.reload();
  }

  return (
    <div>
      <h1>Blog</h1>
      <input onChange={e=>setTitle(e.target.value)} />
      <button onClick={addPost}>Add</button>

      {posts.map(p=>(
        <div key={p.id}>
          <h3>{p.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;