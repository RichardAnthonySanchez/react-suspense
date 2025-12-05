"use client";

import { useState, useEffect } from "react";

export default function UeCommentsList() {
  const [comments, setComments] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setComments(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setComments(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchComments();
  }, []);

  if (isLoading) {
    return <div>Loading Comments...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className="md:grid md:grid-cols-4 ">
      {comments.slice(0, 24).map((c) => (
        <li
          className="card bg-gray-300 text-gray-700 rounded-md border-2 border-gray-400 p-4 m-2 "
          key={c.id}
        >
          {c.name}
        </li>
      ))}
    </ul>
  );
}
