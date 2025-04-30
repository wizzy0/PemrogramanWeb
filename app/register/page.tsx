"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
   const router = useRouter();
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(false);

   const handleRegister = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError("");

      const { data, error } = await supabase.auth.signUp({
         email,
         password,
      });

      setLoading(false);

      if (error) {
         setError(error.message);
      } else {
         // Optional: redirect setelah register
         router.push("/login"); // Ganti ke halaman login kalau kamu punya
      }
   };

   return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4">
         <h1 className="text-2xl font-bold mb-4">Register</h1>
         <form onSubmit={handleRegister} className="w-full max-w-sm">
            <input
               type="email"
               placeholder="Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
               className="w-full px-3 py-2 mb-3 border rounded"
            />
            <input
               type="password"
               placeholder="Password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
               className="w-full px-3 py-2 mb-3 border rounded"
            />
            <button
               type="submit"
               className="w-full bg-blue-600 text-white py-2 rounded"
               disabled={loading}
            >
               {loading ? "Loading..." : "Register"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
         </form>
      </div>
   );
}
