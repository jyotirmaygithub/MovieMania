import React from "react";

export default function Logo({ setterm ,handleSearching}) {
  function handleSubmit() {
    setterm("");
    // handleSearching()
  }
  return (
    <ul className="flex cursor-pointer" onClick={handleSubmit}>
      <li className="text-4xl">MovieMania</li>
    </ul>
  );
}
