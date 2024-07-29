import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import PostItem from './PostItem';
import AuthorFilter from './AuthorFilter';
import { Post } from './PostItem'
import './PostList.css';

const PostList = () => {
  const { data, loading, error } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');
  const [selectedAuthor, setSelectedAuthor] = useState<number | null>(null);

  const filteredPosts = selectedAuthor
    ? data?.filter(post => post.userId === selectedAuthor)
    : data;

  if (loading) return <p>Loading posts...</p>;

  if (error) return <p>Error loading posts: {error}</p>;

  return (
  <div className='container'>
    <h1>Blog Posts</h1>
    <AuthorFilter setSelectedAuthor={setSelectedAuthor} />
    {filteredPosts && filteredPosts.map(post => (
      <PostItem key={post.id} post={post} />
    ))}
  </div>
  );
};

export default PostList;