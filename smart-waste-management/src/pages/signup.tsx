"use client";
import { useState } from "react";
import { signUp } from "../firebase/auth";
import { useRouter } from "next/navigation";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await signUp(email, password);
      router.push("/dashboard"); // Redirect after signup
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 mb-2" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 mb-2" />
      <button onClick={handleSignup} className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Signup;
