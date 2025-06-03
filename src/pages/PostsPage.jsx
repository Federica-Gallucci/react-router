import axios from "axios";
import { useEffect, useState } from "react";

export default function PostsPage() {
  const [posts, setPosts] = useState();
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => {
      console.log(res.data.data);
      setPosts(res.data.data);
    });
  }, []);

  return (
    <div className="container">
      <h1>Lista dei post</h1>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Titolo</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {/* <tr>
            <th>1</th>
            <th>Ciao</th>
            <th>Click</th>
          </tr> */}
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>Click</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
