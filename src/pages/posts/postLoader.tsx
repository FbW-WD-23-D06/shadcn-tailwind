import { redirect } from "react-router-dom";
import { Post as PostInterface } from "./Posts";
import poemsLoader from "./postsLoader";

export default async function poemLoader() {
  const pathName = window.location.pathname;
  const id = pathName.split("/")[2];
  const posts = await poemsLoader();

  const post = posts.find((post: PostInterface) => {
    return post.id === id;
  });
  
  if (!post) {
    return redirect("the post", );
  }
  return post;
}
