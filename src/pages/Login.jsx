export default function Login() {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div id="login-modal" className="bg-white rounded-xl p-5">
        <form className="flex flex-col gap-4">
          <input
            className="p-2 border border-1 border-gray-400 rounded-xl"
            type="email"
            placeholder="email"
          />
          <input
            className="p-2 border border-1 border-gray-400 rounded-xl"
            type="password"
            placeholder="password"
          />
          <input
            className="p-2 border border-1 border-gray-400 rounded-xl"
            type="submit"
            value="login"
          />
        </form>
      </div>
    </div>
  );
}
