import { type Post } from '../redux/postsSlice.ts';
import AuthorName from './AuthorName.tsx';

const SinglePost = (post: Post) => {
  return (
    <div className="container" key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <AuthorName userId={post.userId} />
    </div>
  );
};

export default SinglePost;