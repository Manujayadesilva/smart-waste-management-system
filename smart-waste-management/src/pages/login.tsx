"use client";
import { useState } from "react";
import { login, googleLogin } from "../firebase/auth";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await login(email, password);
      router.push("/dashboard"); // Redirect after login
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 mb-2" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 mb-2" />
      <button onClick={handleLogin} className="bg-green-500 text-white px-4 py-2 rounded">Login</button>
      <button onClick={handleGoogleLogin} className="bg-red-500 text-white px-4 py-2 rounded mt-2">Login with Google</button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Login;
