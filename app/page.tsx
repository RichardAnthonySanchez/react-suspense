import { Suspense } from "react";
import { getComments } from "./lib/getComments";
import { getImages } from "./lib/getImages";
import CommentsSkeleton from "./CommentsSkeleton";
import CommentsList from "./CommentsList";
import Nav from "./Nav";
import { ErrorBoundary } from "react-error-boundary";
import ImagesList from "./ImagesList";
import Banner from "./Banner";

export default function Page() {
  const commentsPromise = getComments();
  const imagesPromise = getImages();

  const bannerContent = () => {
    return (
      <p className="p-4  w-full md:w-xl rounded-md border border-green-500 text-green-700 bg-green-100 my-4">
        <strong>Server Fetching with Suspense:</strong>{" "}
        {`The skeleton renders immediately, and the real data is streamed in (in parallel) when it's ready.`}{" "}
        <em>
          <strong>This is the fastest way to get data into your app.</strong>
        </em>
      </p>
    );
  };

  return (
    <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
      <Nav />
      <Banner bannerContent={bannerContent()} />
      <Suspense fallback={<CommentsSkeleton />}>
        <ImagesList imagesPromise={imagesPromise} />
        <CommentsList commentsPromise={commentsPromise} />
      </Suspense>
    </ErrorBoundary>
  );
}
