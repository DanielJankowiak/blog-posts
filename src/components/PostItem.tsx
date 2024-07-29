import React from 'react';
import './PostItem.css';

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

type PostItemProps = {
    post: Post;
  };

const PostItem= ({ post }: PostItemProps) => (
  <div className="postItem">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
  </div>
);

export default PostItem;