"use client";

import Banner from "../Banner";
import Nav from "../Nav";
import UeCommentsList from "./UeCommentsList";
import UeImagesList from "./UeImagesList";

export default function Page() {
  const bannerContent = () => {
    return (
      <p className="p-4  w-full md:w-xl rounded-md border border-orange-500 text-orange-700 bg-orange-100 my-4">
        <strong>Client Fetching:</strong>{" "}
        {`We don't even start fetching data until a component fully mounts. Markup is served from server -> JS loads and executes -> JS fetches data -> waits for data -> renders data.`}{" "}
        <em>
          <strong>{`This is slow but useful when we don't need data until we explicitly request it. i.e. when the user clicks a button.`}</strong>
        </em>
      </p>
    );
  };
  return (
    <>
      <Nav />
      <Banner bannerContent={bannerContent()} />
      <UeImagesList />
      <UeCommentsList />
    </>
  );
}
