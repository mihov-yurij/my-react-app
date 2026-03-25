import { useDispatch, useSelector } from 'react-redux';
import {
  fetchPostsThunk,
  postsErrorSelector,
  postsSliceSelector,
  postsStatusSelector,
  type Post,
} from '../redux/postsSlice.ts';
import { useEffect } from 'react';
import type { AppDispatch } from '../redux/store';
import SinglePost from './SinglePost';
import { Status } from '../redux/types';

const Posts = () => {
  const posts = useSelector(postsSliceSelector);
  const error = useSelector(postsErrorSelector);
  const status = useSelector(postsStatusSelector);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (status === Status.IDLE) {
      dispatch(fetchPostsThunk());
    }
  });

  return (
    <div>
      {status === Status.LOADING && <p>Loading...</p>}
      {status === Status.FAILED && <p>Error: {error}</p>}
      {posts.map((post: Post) => (
        <SinglePost key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;