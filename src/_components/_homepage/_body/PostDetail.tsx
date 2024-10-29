import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { posts } from "../../data/posts";
import PostDetailTemplate from "./PosDetailTemplate";
import { Post } from "./IBody";


const PostDetail: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const selectedPost = posts.find((p) => p.id === Number(postId));
    if (selectedPost) {
      setPost(selectedPost);
    }
  }, [postId]);

  if (!post) {
    return <div>Post not found</div>;
  }

  return <PostDetailTemplate post={post} />;
};

export default PostDetail;
