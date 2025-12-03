"use client";

import { use } from "react";

export default function CommentsList({
  commentsPromise,
}: {
  commentsPromise: Promise<{ id: number; name: string }[]>;
}) {
  const comments = use(commentsPromise);
  return (
    <ul>
      {comments.map((c) => (
        <li key={c.id}>{c.name}</li>
      ))}
    </ul>
  );
}
