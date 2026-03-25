import type { Post } from '../redux/postsSlice.ts';
import { useSelector } from 'react-redux';
import { usersSliceSelector } from '../redux/usersSlice.ts';

const AuthorName = ({ userId }: { userId: Post['userId'] }) => {
  const users = useSelector(usersSliceSelector);
  const user = users.find((user: User) => user.id === userId);

  return <p>{`Author: ${user?.name || 'default user'}`}</p>;
};

export default AuthorName;