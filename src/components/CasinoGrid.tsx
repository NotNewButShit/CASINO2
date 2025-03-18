import React, { useState, useEffect } from "react";
import CasinoCard from "./CasinoCard";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Casino {
  id: number;
  name: string;
  logo: string;
  rating: number;
  features: string[];
  bonus: string;
  paymentMethods: string[];
  visitUrl: string;
  gameTypes: string[];
  bonusTypes: string[];
}

interface CasinoGridProps {
  casinos?: Casino[];
  activeFilters?: {
    gameTypes: string[];
    bonusTypes: string[];
    paymentMethods: string[];
  };
}

const CasinoGrid = ({
  casinos = [
    {
      id: 1,
      name: "BK8",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=BK8",
      rating: 4.8,
      features: ["Broad Range of Games", "Promotional Offers", "Live Dealers"],
      bonus: "₱15,000 Welcome Bonus + 200 Free Spins",
      paymentMethods: ["Visa", "Mastercard", "GCash", "PayMaya", "Bitcoin"],
      visitUrl: "https://www.bk8.com",
      gameTypes: ["Slots", "Poker", "Blackjack", "Roulette"],
      bonusTypes: ["Welcome Bonus", "Free Spins", "No Deposit"],
    },
    {
      id: 2,
      name: "22Bet",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=22Bet",
      rating: 4.7,
      features: ["Sports Betting", "Casino Games", "Comprehensive Selection"],
      bonus: "₱10,000 Welcome Bonus + 100 Free Spins",
      paymentMethods: ["Visa", "Mastercard", "GCash", "Skrill"],
      visitUrl: "https://www.22bet.com",
      gameTypes: ["Slots", "Sports Betting", "Roulette"],
      bonusTypes: ["Welcome Bonus", "Free Spins"],
    },
    {
      id: 3,
      name: "MegaPari",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=MegaPari",
      rating: 4.6,
      features: ["Diverse Selection", "Casino Games", "Betting Options"],
      bonus: "₱20,000 Welcome Package",
      paymentMethods: ["Visa", "Mastercard", "GCash", "PayPal", "Ethereum"],
      visitUrl: "https://www.megapari.com",
      gameTypes: ["Slots", "Blackjack", "Roulette", "Baccarat"],
      bonusTypes: ["Welcome Package", "Cashback", "Reload Bonus"],
    },
    {
      id: 4,
      name: "GG.BET",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=GGBET",
      rating: 4.5,
      features: ["Sports Betting", "Casino Entertainment", "eSports"],
      bonus: "₱8,000 Welcome Bonus + 50 Free Spins",
      paymentMethods: ["Visa", "Mastercard", "GCash"],
      visitUrl: "https://www.gg.bet",
      gameTypes: ["Slots", "eSports", "Sports Betting"],
      bonusTypes: ["Welcome Bonus", "Free Spins", "Free Bet"],
    },
    {
      id: 5,
      name: "MD88",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=MD88",
      rating: 4.4,
      features: ["Rising Profile", "Asian Market", "Live Dealers"],
      bonus: "₱12,000 Welcome Bonus + 120 Free Spins",
      paymentMethods: ["Visa", "Mastercard", "GCash", "Bitcoin", "Ethereum"],
      visitUrl: "https://www.md88.com",
      gameTypes: ["Slots", "Blackjack", "Roulette", "Baccarat"],
      bonusTypes: ["Welcome Bonus", "Free Spins", "Loyalty Program"],
    },
    {
      id: 6,
      name: "Plae8",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Plae8",
      rating: 4.3,
      features: ["Classic Casino Experience", "Slots", "Table Games"],
      bonus: "₱9,000 Welcome Bonus",
      paymentMethods: ["Visa", "Mastercard", "GCash", "PayMaya"],
      visitUrl: "https://www.plae8.com",
      gameTypes: ["Slots", "Blackjack", "Roulette"],
      bonusTypes: ["Welcome Bonus", "Cashback"],
    },
    {
      id: 7,
      name: "IB8",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=IB8",
      rating: 4.2,
      features: ["Online Gaming Options", "Live Dealers", "Slots"],
      bonus: "₱8,000 Welcome Package + 80 Free Spins",
      paymentMethods: ["Visa", "Mastercard", "GCash", "PayPal", "Bitcoin"],
      visitUrl: "https://www.ib8.com",
      gameTypes: ["Slots", "Poker", "Blackjack", "Roulette"],
      bonusTypes: ["Welcome Package", "Free Spins", "VIP Rewards"],
    },
    {
      id: 8,
      name: "WSM",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=WSM",
      rating: 4.1,
      features: ["Slot Games", "Table Games", "Progressive Jackpots"],
      bonus: "₱7,000 Welcome Bonus",
      paymentMethods: ["Visa", "Mastercard", "GCash", "Skrill"],
      visitUrl: "https://www.wsm.com",
      gameTypes: ["Slots", "Blackjack", "Roulette"],
      bonusTypes: ["Welcome Bonus", "Jackpot Bonus"],
    },
    {
      id: 9,
      name: "BC.Game",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=BCGame",
      rating: 4.0,
      features: ["Cryptocurrency-Focused", "Online Casino", "Slots"],
      bonus: "₱6,000 Welcome Bonus + 60 Free Spins",
      paymentMethods: ["Bitcoin", "Ethereum", "Litecoin", "Dogecoin"],
      visitUrl: "https://www.bc.game",
      gameTypes: ["Slots", "Crypto Games", "Blackjack"],
      bonusTypes: ["Welcome Bonus", "Free Spins", "Crypto Bonus"],
    },
    {
      id: 10,
      name: "1XBet",
      logo: "https://api.dicebear.com/7.x/avataaars/svg?seed=1XBet",
      rating: 4.5,
      features: ["Large Selection", "Online Betting", "Casino Games"],
      bonus: "₱10,000 Welcome Bonus + 100 Free Spins",
      paymentMethods: ["Visa", "Mastercard", "GCash", "WeChat Pay"],
      visitUrl: "https://www.1xbet.com",
      gameTypes: ["Slots", "Sports Betting", "Live Casino"],
      bonusTypes: ["Welcome Bonus", "Free Spins", "Betting Bonus"],
    },
  ],
  activeFilters = {
    gameTypes: [],
    bonusTypes: [],
    paymentMethods: [],
  },
}: CasinoGridProps) => {
  const [filteredCasinos, setFilteredCasinos] = useState<Casino[]>(casinos);
  const [currentPage, setCurrentPage] = useState(1);
  const casinosPerPage = 6;

  // Apply filters when activeFilters change
  useEffect(() => {
    let result = [...casinos];

    // Filter by game types
    if (activeFilters.gameTypes.length > 0) {
      result = result.filter((casino) =>
        casino.gameTypes.some((type) => activeFilters.gameTypes.includes(type)),
      );
    }

    // Filter by bonus types
    if (activeFilters.bonusTypes.length > 0) {
      result = result.filter((casino) =>
        casino.bonusTypes.some((type) =>
          activeFilters.bonusTypes.includes(type),
        ),
      );
    }

    // Filter by payment methods
    if (activeFilters.paymentMethods.length > 0) {
      result = result.filter((casino) =>
        casino.paymentMethods.some((method) =>
          activeFilters.paymentMethods.includes(method),
        ),
      );
    }

    setFilteredCasinos(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [casinos, activeFilters]);

  // Calculate pagination
  const indexOfLastCasino = currentPage * casinosPerPage;
  const indexOfFirstCasino = indexOfLastCasino - casinosPerPage;
  const currentCasinos = filteredCasinos.slice(
    indexOfFirstCasino,
    indexOfLastCasino,
  );
  const totalPages = Math.ceil(filteredCasinos.length / casinosPerPage);

  // Change page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full bg-gray-950 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid Header with count */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-white">
            Top Casinos{" "}
            <span className="text-yellow-500">({filteredCasinos.length})</span>
          </h2>

          {/* Pagination controls */}
          {totalPages > 1 && (
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevPage}
                disabled={currentPage === 1}
                className="border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-300"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Prev
              </Button>
              <span className="text-gray-400">
                {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-300"
              >
                Next <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          )}
        </div>

        {/* Casino Grid */}
        {filteredCasinos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {currentCasinos.map((casino) => (
              <div
                key={casino.id}
                className="flex justify-center"
                style={{
                  opacity: 1,
                  transform: "translateY(0)",
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                }}
              >
                <CasinoCard
                  name={casino.name}
                  logo={casino.logo}
                  rating={casino.rating}
                  features={casino.features}
                  bonus={casino.bonus}
                  paymentMethods={casino.paymentMethods}
                  visitUrl={casino.visitUrl}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 bg-gray-900 rounded-lg border border-gray-800">
            <p className="text-xl text-gray-400 mb-4">
              No casinos match your filters
            </p>
            <Button
              variant="outline"
              className="border-yellow-600 text-yellow-500 hover:bg-yellow-600 hover:text-white"
              onClick={() => {
                // This would typically be handled by the parent component
                console.log("Reset filters clicked");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Bottom Pagination for mobile */}
        {totalPages > 1 && filteredCasinos.length > 0 && (
          <div className="flex justify-center mt-8 md:hidden">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={prevPage}
                disabled={currentPage === 1}
                className="border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-300"
              >
                <ChevronLeft className="w-4 h-4 mr-1" /> Prev
              </Button>
              <span className="text-gray-400">
                {currentPage} of {totalPages}
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="border-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-300"
              >
                Next <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CasinoGrid;
