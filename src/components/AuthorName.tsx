import type { Post } from '../redux/postsSlice';
import { useSelector } from 'react-redux';
import { usersSliceSelector } from '../redux/usersSlice';

const AuthorName = ({ userId }: { userId: Post['userId'] }) => {
  const users = useSelector(usersSliceSelector);
  const user = users.find((user) => user.id === userId);

  return <p>{`Author: ${user?.name || 'default user'}`}</p>;
};

export default AuthorName;