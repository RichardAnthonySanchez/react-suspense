export default function CommentsSkeleton() {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="h-40 w-xs md:h-96 md:w-lg justify-center rounded bg-gray-300 animate-pulse border-2 border-gray-400 mb-6"></div>
      </div>
      <div className="md:grid md:grid-cols-4 space-y-4">
        <div className="h-12 w-xs md:w-md bg-gray-300 rounded animate-pulse border-2 border-gray-400" />
        <div className="h-12 w-xs md:w-md bg-gray-300 rounded animate-pulse border-2 border-gray-400" />
        <div className="h-12 w-xs md:w-md bg-gray-300 rounded animate-pulse border-2 border-gray-400" />
        <div className="h-12 w-xs md:w-md bg-gray-300 rounded animate-pulse border-2 border-gray-400" />
        <div className="h-12 w-xs md:w-md bg-gray-300 rounded animate-pulse border-2 border-gray-400" />
        <div className="h-12 w-xs md:w-md bg-gray-300 rounded animate-pulse border-2 border-gray-400" />
        <div className="h-12 w-xs md:w-md bg-gray-300 rounded animate-pulse border-2 border-gray-400" />
        <div className="h-12 w-xs md:w-md bg-gray-300 rounded animate-pulse border-2 border-gray-400" />
      </div>
    </>
  );
}
