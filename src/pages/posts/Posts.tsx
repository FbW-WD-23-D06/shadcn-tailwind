import { NavLink, useLoaderData } from "react-router-dom";

export interface Post {
  id: number | string;
  title: string;
  body: string;
}

export default function Posts() {
  const posts = useLoaderData();
  return (
    <div className="h-full">
      <h1>Posts</h1>
      {Array.isArray(posts) &&
        posts.map((post: Post) => (
          <NavLink key={post.id} to={`${post.id}`} state={post}>
            <div>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <hr />
            </div>
          </NavLink>
        ))}
    </div>
  );
}
