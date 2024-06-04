"use client";
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);
  console.log("client component");
  return (
    <div>
      <h1 className="text-7xl font-bold mb-4">{count}</h1>
      <button
        className="btn btn-primary mx-2"
        onClick={() => setCount(count + 1)}
      >
        increase
      </button>
      <button
        className="btn btn-primary mx-2"
        onClick={() => setCount(count - 1)}
      >
        decrease
      </button>
      <button className="btn btn-secondary mx-2" onClick={() => setCount(0)}>
        reset
      </button>
    </div>
  );
};

export default ClientPage;
