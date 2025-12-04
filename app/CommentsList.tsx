"use client";

import { use } from "react";

export default function CommentsList({
  commentsPromise,
}: {
  commentsPromise: Promise<{ id: number; name: string }[]>;
}) {
  const comments = use(commentsPromise).slice(0, 24);
  return (
    <ul className="md:grid md:grid-cols-4 ">
      {comments.map((c) => (
        <li
          className="card rounded-md border-2 border-gray-200 p-4 m-2 "
          key={c.id}
        >
          {c.name}
        </li>
      ))}
    </ul>
  );
}
