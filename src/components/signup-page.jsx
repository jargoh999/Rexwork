import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import imageToUse from "@/assets/mylogo.png"
import { connect, useDispatch, useSelector } from 'react-redux';
import { signupRequest } from '../redux/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state);

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.email.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const role = 'user';
    dispatch(signupRequest({ email, password , role , name }));
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500 opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              width: `${Math.random() * 300 + 50}px`,
              height: '1px',
            }}
          />
        ))}
      </div>
      <div className="flex w-full max-w-5xl">
        {/* Left side: Sign-up form */}
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md z-10">
          <div className="flex items-center mb-8">
            <div className="w-8 h-8 bg-purple-600 rounded-sm mr-2 animate-spin" >
              <img src={imageToUse}/>
            </div>
            <div/>
            <h1 className="text-2xl font-bold text-gray-800">Rexwork's</h1>
          </div>
          <h2 className="text-xl font-semibold mb-6">Sign Up</h2>
          <form className="space-y-4 pb-10" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email Address</label>
              <Input type="email" id="email" className="mt-1 bg-purple-50" placeholder="jsmith@gmail.com" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Input type="password" id="password" className="mt-1 bg-purple-50" />
              {/* <a href="#" className="text-xs text-purple-600 hover:underline mt-1 inline-block">Forgot Password?</a> */}
            </div>
            <div className="pb-9">
              <label htmlFor=" confirm password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <Input type="password" id="con-password" className="mt-1 bg-purple-50" />
              {/* <a href="#" className="text-xs text-purple-600 hover:underline mt-1 inline-block">Forgot Password?</a> */}
            </div>
            {loading && <p>Loading...</p>}
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
            <Button className="w-full bg-purple-600 hover:bg-purple-700 animate-bounce ">Sign Up</Button>
          </form>
           <a href="/signIn" className="text-xs text-gray-700 hover:underline mt-1 inline-block">already have an account? sign in </a>
        </div>
        {/* Right side: Text content */}
        <div className="hidden md:flex flex-col justify-center pl-12 w-full max-w-lg">
          <h2 className="text-4xl font-bold text-white mb-4">One app,</h2>
          <h2 className="text-4xl font-bold text-white">a whole ecosystem.</h2>
        </div>
      </div>
      {/* Footer */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-400">
        Rexork's • Support • Integrations • Forum • Developers & API<br>
        </br> • Resources • Guide • Legal • Pricing • Terms • Privacy
      </div>
    </div>
  );
}
