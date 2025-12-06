import Image from "next/image";

export default function Nav() {
  return (
    <>
      <nav className="flex justify-center mb-4">
        <div className="nav-header-container mx-2">
          <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-600 text-shadow-lg">
            React Fetch Performance
          </h1>
          <ul className="flex flex-col md:flex-row justify-center mb-6">
            <li className="my-2 md:mx-4 bg-gray-300 rounded-2xl text-gray-600 font-bold p-4 border-2 border-gray-400">
              <a className="" href="./">
                Server Fetching using Suspense
              </a>
            </li>
            <li className="my-2 md:mx-4 bg-gray-300 rounded-2xl text-gray-600 font-bold p-4 border-2 border-gray-400">
              <a className="" href="./use-effect-test">
                Client Fetching
              </a>
            </li>
            <li className="my-2 md:mx-4 bg-gray-300 rounded-2xl text-gray-600 font-bold p-4 border-2 border-gray-400">
              <a className="" href="./ssr-test">
                Server Fetching
              </a>
            </li>
          </ul>
        </div>

        <a
          href="https://github.com/RichardAnthonySanchez/react-suspense"
          target="_blank"
        >
          <Image
            src="/github.svg"
            alt="Link to GitHub Repo"
            width={80}
            height={80}
            className="rounded-md border border-gray-300"
          />
        </a>
      </nav>
    </>
  );
}
