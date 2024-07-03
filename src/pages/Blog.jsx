import { useEffect, useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(storedPosts);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          {posts.map((post, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-2xl font-semibold">{post.title}</h2>
              <p className="text-sm text-muted-foreground">{post.date}</p>
              <p className="mt-2">{post.content}</p>
            </div>
          ))}
        </div>
        <aside className="md:col-span-1">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Recent Posts</h3>
            <ul>
              {posts.map((post, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text-primary hover:underline">
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Categories</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-primary hover:underline">
                  Technology
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-primary hover:underline">
                  Programming
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-primary hover:underline">
                  Personal
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Search</h3>
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border rounded"
            />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog;