"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const router = useRouter();

   const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();

      const { error } = await supabase.auth.signInWithPassword({
         email,
         password,
      });

      if (error) {
         setError(error.message);
      } else {
         setError("");
         router.push("/"); // arahkan ke halaman home setelah login
      }
   };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
         <form
            onSubmit={handleLogin}
            className="bg-white p-8 rounded shadow-md w-full max-w-sm"
         >
            <h2 className="text-2xl font-bold mb-6 text-center text-black">
               Login
            </h2>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <label className="block mb-2 text-sm font-medium text-black">
               Email
            </label>
            <input
               type="email"
               className="w-full p-2 border rounded mb-4 text-black"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
            />

            <label className="block mb-2 text-sm font-medium text-black">
               Password
            </label>
            <input
               type="password"
               className="w-full p-2 border rounded mb-4 text-black"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
            />

            <button
               type="submit"
               className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
               Login
            </button>
         </form>
      </div>
   );
}
