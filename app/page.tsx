import { Suspense } from "react";
import { getComments } from "./lib/getComments";
import { getImages } from "./lib/getImages";
import CommentsSkeleton from "./CommentsSkeleton";
import CommentsList from "./CommentsList";
import Nav from "./Nav";
import { ErrorBoundary } from "react-error-boundary";
import ImagesList from "./ImagesList";

export default function Page() {
  const commentsPromise = getComments();
  const imagesPromise = getImages();

  return (
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      <Nav />
      <Suspense fallback={<CommentsSkeleton />}>
        <ImagesList imagesPromise={imagesPromise} />
        <CommentsList commentsPromise={commentsPromise} />
      </Suspense>
    </ErrorBoundary>
  );
}
