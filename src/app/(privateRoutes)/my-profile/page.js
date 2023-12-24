import { cookies } from 'next/headers';
import PrivateRoute from '@/helpers/PrivateRoute';
import MyProfile from './MyProfile';

export const metadata = {
  title: 'My Profile',
  description: 'This is MyProfile page',
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
          <div>Your Profile</div>
          <MyProfile />
        </div>
      ) : (
        <div className="container">you do not have access</div>
      )}
    </>
  );
}
