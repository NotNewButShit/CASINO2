import React, { useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Badge } from "./ui/badge";
import { Filter, X } from "lucide-react";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterBarProps {
  onFilterChange?: (filters: {
    gameTypes: string[];
    bonuses: string[];
    paymentMethods: string[];
  }) => void;
}

const FilterBar = ({ onFilterChange }: FilterBarProps = {}) => {
  const gameTypeOptions: FilterOption[] = [
    { id: "slots", label: "Slots" },
    { id: "poker", label: "Poker" },
    { id: "blackjack", label: "Blackjack" },
    { id: "roulette", label: "Roulette" },
    { id: "baccarat", label: "Baccarat" },
    { id: "live-dealer", label: "Live Dealer" },
  ];

  const bonusOptions: FilterOption[] = [
    { id: "welcome-bonus", label: "Welcome Bonus" },
    { id: "no-deposit", label: "No Deposit" },
    { id: "free-spins", label: "Free Spins" },
    { id: "cashback", label: "Cashback" },
    { id: "loyalty-program", label: "Loyalty Program" },
  ];

  const paymentOptions: FilterOption[] = [
    { id: "credit-card", label: "Credit Card" },
    { id: "e-wallet", label: "E-Wallet" },
    { id: "bank-transfer", label: "Bank Transfer" },
    { id: "crypto", label: "Cryptocurrency" },
    { id: "gcash", label: "GCash" },
    { id: "paymaya", label: "PayMaya" },
  ];

  const [selectedGameTypes, setSelectedGameTypes] = useState<string[]>([]);
  const [selectedBonuses, setSelectedBonuses] = useState<string[]>([]);
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState<
    string[]
  >([]);

  const handleGameTypeChange = (id: string) => {
    setSelectedGameTypes((prev) => {
      const newSelection = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];

      if (onFilterChange) {
        onFilterChange({
          gameTypes: newSelection,
          bonuses: selectedBonuses,
          paymentMethods: selectedPaymentMethods,
        });
      }

      return newSelection;
    });
  };

  const handleBonusChange = (id: string) => {
    setSelectedBonuses((prev) => {
      const newSelection = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];

      if (onFilterChange) {
        onFilterChange({
          gameTypes: selectedGameTypes,
          bonuses: newSelection,
          paymentMethods: selectedPaymentMethods,
        });
      }

      return newSelection;
    });
  };

  const handlePaymentMethodChange = (id: string) => {
    setSelectedPaymentMethods((prev) => {
      const newSelection = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];

      if (onFilterChange) {
        onFilterChange({
          gameTypes: selectedGameTypes,
          bonuses: selectedBonuses,
          paymentMethods: newSelection,
        });
      }

      return newSelection;
    });
  };

  const resetFilters = () => {
    setSelectedGameTypes([]);
    setSelectedBonuses([]);
    setSelectedPaymentMethods([]);

    if (onFilterChange) {
      onFilterChange({
        gameTypes: [],
        bonuses: [],
        paymentMethods: [],
      });
    }
  };

  const totalFiltersApplied =
    selectedGameTypes.length +
    selectedBonuses.length +
    selectedPaymentMethods.length;

  return (
    <div className="w-full bg-gray-900 border-t border-b border-gray-800 py-4 px-6 sticky top-[80px] z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            {/* Game Types Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-gray-700 bg-gray-800 hover:bg-gray-700"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Game Types
                  {selectedGameTypes.length > 0 && (
                    <Badge
                      className="ml-2 bg-red-600 hover:bg-red-700"
                      variant="secondary"
                    >
                      {selectedGameTypes.length}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700">
                {gameTypeOptions.map((option) => (
                  <DropdownMenuCheckboxItem
                    key={option.id}
                    checked={selectedGameTypes.includes(option.id)}
                    onCheckedChange={() => handleGameTypeChange(option.id)}
                    className="text-white hover:bg-gray-700"
                  >
                    {option.label}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Bonuses Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-gray-700 bg-gray-800 hover:bg-gray-700"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Bonuses
                  {selectedBonuses.length > 0 && (
                    <Badge
                      className="ml-2 bg-red-600 hover:bg-red-700"
                      variant="secondary"
                    >
                      {selectedBonuses.length}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700">
                {bonusOptions.map((option) => (
                  <DropdownMenuCheckboxItem
                    key={option.id}
                    checked={selectedBonuses.includes(option.id)}
                    onCheckedChange={() => handleBonusChange(option.id)}
                    className="text-white hover:bg-gray-700"
                  >
                    {option.label}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Payment Methods Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-gray-700 bg-gray-800 hover:bg-gray-700"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Payment Methods
                  {selectedPaymentMethods.length > 0 && (
                    <Badge
                      className="ml-2 bg-red-600 hover:bg-red-700"
                      variant="secondary"
                    >
                      {selectedPaymentMethods.length}
                    </Badge>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-gray-800 border-gray-700">
                {paymentOptions.map((option) => (
                  <DropdownMenuCheckboxItem
                    key={option.id}
                    checked={selectedPaymentMethods.includes(option.id)}
                    onCheckedChange={() => handlePaymentMethodChange(option.id)}
                    className="text-white hover:bg-gray-700"
                  >
                    {option.label}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {totalFiltersApplied > 0 && (
            <Button
              variant="ghost"
              onClick={resetFilters}
              className="text-red-400 hover:text-red-300 hover:bg-gray-800"
            >
              <X className="h-4 w-4 mr-2" />
              Reset Filters
            </Button>
          )}
        </div>

        {/* Active Filters Display */}
        {totalFiltersApplied > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {selectedGameTypes.map((id) => {
              const option = gameTypeOptions.find((opt) => opt.id === id);
              return (
                <Badge
                  key={id}
                  variant="outline"
                  className="bg-gray-800 text-white border-gray-700 px-3 py-1"
                >
                  {option?.label}
                  <X
                    className="ml-1 h-3 w-3 cursor-pointer"
                    onClick={() => handleGameTypeChange(id)}
                  />
                </Badge>
              );
            })}

            {selectedBonuses.map((id) => {
              const option = bonusOptions.find((opt) => opt.id === id);
              return (
                <Badge
                  key={id}
                  variant="outline"
                  className="bg-gray-800 text-white border-gray-700 px-3 py-1"
                >
                  {option?.label}
                  <X
                    className="ml-1 h-3 w-3 cursor-pointer"
                    onClick={() => handleBonusChange(id)}
                  />
                </Badge>
              );
            })}

            {selectedPaymentMethods.map((id) => {
              const option = paymentOptions.find((opt) => opt.id === id);
              return (
                <Badge
                  key={id}
                  variant="outline"
                  className="bg-gray-800 text-white border-gray-700 px-3 py-1"
                >
                  {option?.label}
                  <X
                    className="ml-1 h-3 w-3 cursor-pointer"
                    onClick={() => handlePaymentMethodChange(id)}
                  />
                </Badge>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
