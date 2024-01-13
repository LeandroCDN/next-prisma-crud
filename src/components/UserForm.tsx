"use client";
import { useState } from "react";

function UserForm() {
  const [wallet, setWallet] = useState("");
  const [balance, setBalance] = useState("");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await fetch("/api/register", {
          method: "POST",
          body: JSON.stringify({
            wallet,
            balance,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        console.log(data);
      }}
    >
      <input
        type="text"
        name="wallet"
        autoFocus
        placeholder="Wallet"
        className="w-full px-4 py-2 text-black bg-whte rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-2"
        onChange={(e) => setWallet(e.target.value)}
      />
      <input
        type="text"
        name="balance"
        placeholder="Wallet"
        className="w-full px-4 py-2 text-black bg-whte rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-2"
        onChange={(e) => setBalance(e.target.value)}
      />
      <button className="px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">
        Create
      </button>
    </form>
  );
}
export default UserForm;
