import { use } from 'react';
import Comment from './comment';

export default function Comments({commentsPromise}) {
  const comments = use(commentsPromise);
  console.log(comments);

  return (
    <div className="card">
      <h2>All Comments are Here: {comments.length}</h2>
      {
        comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
      }
    </div>
  )
}
