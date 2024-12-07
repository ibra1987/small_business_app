"use client"






const SignIn = () => {
  return (
      <form className="w-full  p-16 md:w-3/5  flex flex-col justify-start items-start gap-4">
         <h1 className="text-2xl lg:text-4xl font-bold"> Sign In </h1>
         <input placeholder="email adress" className="w-full p-2 border border-gray-300 rounded" type="email" />
         <input placeholder="password" className="w-full p-2 border border-gray-300 rounded" type="password" name="password"/>
         
         <button className="w-full p-2 outline-none bg-blue-600 text-white roundeds transition duration-150 hover:bg-blue-700">
               Sign In
         </button>
      </form>

  )
}

export default SignIn