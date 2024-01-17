import { useParams, useLocation } from "react-router-dom";
import { Post as PostInterface } from "./Posts";

export default function Post() {
  const { id } = useParams();

  const location = useLocation();
  console.log("location:", location);
  const post = location.state as PostInterface;
  console.log("🚀 ~ file: Post.tsx:8 ~ Post ~ id:", id);
  console.log("post:", post);
  return (
    <div className="h-full">
      <h1>Post {id}</h1>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </div>
  );
}
