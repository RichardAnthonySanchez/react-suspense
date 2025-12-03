import { Suspense } from "react";
import { getComments } from "./lib/getComments";
import CommentsSkeleton from "./CommentsSkeleton";
import CommentsList from "./CommentsList";
import { ErrorBoundary } from "react-error-boundary";

export default function Page() {
  const commentsPromise = getComments();

  return (
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      <Suspense fallback={<CommentsSkeleton />}>
        <CommentsList commentsPromise={commentsPromise} />;
      </Suspense>
    </ErrorBoundary>
  );
}
