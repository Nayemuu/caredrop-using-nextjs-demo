import CreateArticles from '@/Components/CreateArticles/CreateArticles';
import PrivateRoute from '@/helpers/PrivateRoute';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Create Article',
  description: 'This is Create Article page',
};

export default function CreateArticle() {
  const cookieStore = cookies();
  const access_token = cookieStore.get('access_token');
  // console.log('access_token = ', access_token);
  return (
    <>
      <PrivateRoute />
      {access_token?.value ? (
        <CreateArticles />
      ) : (
        <div className="container">you do not have access</div>
      )}
    </>
  );
}
