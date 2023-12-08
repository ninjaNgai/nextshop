"use client";
import Navigation from "./components/Navigation";
import ProductOverview from "./components/ProductOverview/productOverview";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navigation />
      <ProductOverview />
    </main>
  );
}
