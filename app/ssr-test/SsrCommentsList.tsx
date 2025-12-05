export default async function CommentsList({
  commentsPromise,
}: {
  commentsPromise: Promise<{ id: number; name: string }[]>;
}) {
  const comments = (await commentsPromise).slice(0, 24);
  return (
    <ul className="md:grid md:grid-cols-4 ">
      {comments.map((c) => (
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
