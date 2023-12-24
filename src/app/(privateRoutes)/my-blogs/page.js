import { cookies } from 'next/headers';
import MyBlogs from './MyBlogs';
import PrivateRoute from '@/helpers/PrivateRoute';

export const metadata = {
  title: 'My Blogs',
  description: 'This is MyBlogs page',
};

export default function Home() {
  const cookieStore = cookies();
  const access_token = cookieStore.get('access_token');
  // console.log('access_token = ', access_token.value);

  return (
    <>
      <PrivateRoute />
      {access_token?.value ? (
        <div className="container">
          <div>Your Blogs are</div>
          <MyBlogs />
        </div>
      ) : (
        <div className="container">you do not have access</div>
      )}
    </>
  );
}
