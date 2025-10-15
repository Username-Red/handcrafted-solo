"use client"; // This makes it a client component

import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
      <form
        onSubmit={handleSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-6 space-y-4"
      >
        <legend className="fieldset-legend text-lg font-bold">Sign Up</legend>

        <label className="label">Name</label>
        <input
          type="text"
          className="input input-bordered w-full"
          placeholder="Obiwan Kenobi"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="label">Email</label>
        <input
          type="email"
          className="input input-bordered w-full"
          placeholder="highground@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="label">Password</label>
        <input
          type="password"
          className="input input-bordered w-full"
          placeholder="SuperSecretPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label className="label">Repeat Password</label>
        <input
          type="password"
          className="input input-bordered w-full"
          placeholder="Repeat password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="btn btn-primary w-full mt-2"
        >
          Sign Up
        </button>

        {message && <p className="mt-2 text-center">{message}</p>}
      </form>
    </div>
  );
};

export default Signup;
