import Banner from "../Banner";
import Nav from "../Nav";
import { getComments } from "../lib/getComments";
import { getImages } from "../lib/getImages";
import SsrCommentsList from "./SsrCommentsList";
import SsrImageList from "./SsrImageList";

export default function Page() {
  const commentsPromise = getComments();
  const imagesPromise = getImages();
  const bannerContent = () => {
    return (
      <p className="p-4  w-full md:w-xl rounded-md border border-yellow-500 text-yellow-700 bg-yellow-100 my-4">
        <strong>Server-Side Fetching:</strong>{" "}
        {`The user doesn't see anything on the page until all data is fetched, served, and rendered. This is essentially how templating engines work.`}{" "}
        <em>
          <strong>{`This is slowest to initial render (the user sees a blank page until the large markup is finished loading) but useful for static content. Especially content that needs to be crawled by search engines.`}</strong>
        </em>
      </p>
    );
  };
  return (
    <>
      <Nav />
      <Banner bannerContent={bannerContent()} />
      <SsrImageList imagesPromise={imagesPromise} />
      <SsrCommentsList commentsPromise={commentsPromise} />
    </>
  );
}
