'use server';

import { revalidateTag } from 'next/cache';

export async function getUpdatedMyBlogList() {
  revalidateTag('MyBlogList');
}
