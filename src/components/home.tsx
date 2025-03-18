import React, { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import FilterBar from "./FilterBar";
import CasinoGrid from "./CasinoGrid";
import Footer from "./Footer";

const Home = () => {
  const [activeFilters, setActiveFilters] = useState({
    gameTypes: [],
    bonuses: [],
    paymentMethods: [],
  });

  const handleFilterChange = (filters) => {
    setActiveFilters({
      gameTypes: filters.gameTypes,
      bonuses: filters.bonuses,
      paymentMethods: filters.paymentMethods,
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="pt-[80px]">
        {" "}
        {/* Offset for fixed header */}
        {/* Hero Section */}
        <HeroSection />
        {/* Filter Bar */}
        <FilterBar onFilterChange={handleFilterChange} />
        {/* Casino Grid */}
        <CasinoGrid
          activeFilters={{
            gameTypes: activeFilters.gameTypes,
            bonusTypes: activeFilters.bonuses,
            paymentMethods: activeFilters.paymentMethods,
          }}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
