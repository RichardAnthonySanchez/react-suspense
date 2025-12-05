export default function Banner() {
  return (
    <div className="flex justify-center text-center">
      <p className="p-4  w-full md:w-xl rounded-md border border-green-500 text-green-700 bg-green-100 my-4">
        <strong>Server Fetching with Suspense:</strong>
        {`The skeleton renders immediately, and the real data is streamed in (in parallel) when it's ready.`}{" "}
        <em>
          <strong>This is the fastest way to get data into your app.</strong>
        </em>
      </p>
    </div>
  );
}
