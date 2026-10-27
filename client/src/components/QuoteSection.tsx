import { useEffect, useState } from "react";

export function QuoteSection() {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    fetch("http://localhost:3001/api/quote")
      .then(r => r.json())
      .then(d => setQuote(d.quote))
      .catch(() => setQuote("Error loading quote"));
  }, []);
  return <p className="mt-4 text-lg">{quote}</p>;
}
