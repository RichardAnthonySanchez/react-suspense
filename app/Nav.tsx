export default function Nav() {
  return (
    <nav className="mb-4">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-600 text-shadow-lg">
        React Fetch Performance
      </h1>
      <ul className="flex flex-row justify-center mb-6">
        <li>
          <a
            className="mx-4 bg-gray-300 rounded-2xl text-gray-600 font-bold p-4 border-2 border-gray-400"
            href="#"
          >
            Test 1
          </a>
          <a
            className="mx-4 bg-gray-300 rounded-2xl text-gray-600 font-bold p-4 border-2 border-gray-400"
            href="#"
          >
            Test 2
          </a>
          <a
            className="mx-4 bg-gray-300 rounded-2xl text-gray-600 font-bold p-4 border-2 border-gray-400"
            href="#"
          >
            Test 3
          </a>
        </li>
      </ul>
    </nav>
  );
}
