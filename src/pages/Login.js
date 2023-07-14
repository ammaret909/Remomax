export function Login() {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen p-2">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm">
        <div className="p-10 pb-4">
          <img className="object-cover" src="miti.jpg"></img>
        </div>
        <div className="space-y-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="link-checkbox"
              className="ml-2 text-sm font-medium text-center"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>

          <div className="flex flex-col md:justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <div className="text-center text-zinc-600 text-xs mt-4">
              Forgot Password? Contact REMOMAX
            </div>
          </div>
        </div>
        <p className="text-center text-zinc-600 text-xs mt-4 ">
          &copy; 2023 Company Name. All rights reserved.
        </p>
      </div>
    </div>
  );
}
