
function Home() {
  return (
    <div className=" h-screen width-full bg-[#ADD899]">
      <h1 className="text-5xl text-white ml-[30%] ">Welcome to the User App😊 </h1>
      {/* // i want a div in which i write a paragraph */}
      <div className="flex items-center w-2/3 ml-48 justify-center h-screen bg-[#ADD899]">
      <p className="text-3xl  text-red-400">First, you need to create an account. After that, you can log in. Once you are logged in, a cookie (token) 🍪 will be created in your browser. When you log out, the cookie will be deleted 😊. </p>
      </div>
 </div>
  );
}

export default Home;
