import React from "react";
import { Star, ExternalLink, Gift, CreditCard, Gamepad2 } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface CasinoCardProps {
  name: string;
  logo: string;
  rating: number;
  features: string[];
  bonus: string;
  paymentMethods: string[];
  visitUrl: string;
}

const CasinoCard = ({
  name = "Casino Royale",
  logo = "https://api.dicebear.com/7.x/avataaars/svg?seed=casino",
  rating = 4.5,
  features = ["Live Dealers", "Slots", "Poker"],
  bonus = "₱10,000 Welcome Bonus + 100 Free Spins",
  paymentMethods = ["Visa", "Mastercard", "GCash", "PayMaya"],
  visitUrl = "#",
}: CasinoCardProps) => {
  // Generate stars based on rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />,
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative">
            <Star className="w-5 h-5 text-yellow-400" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            </div>
          </div>,
        );
      } else {
        stars.push(<Star key={i} className="w-5 h-5 text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <Card className="w-full max-w-[350px] h-[450px] bg-gray-900 border-gray-800 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 overflow-hidden group">
      <CardHeader className="p-4 bg-gray-800 flex items-center justify-center h-[120px]">
        <div className="w-32 h-32 flex items-center justify-center bg-white rounded-full p-2 transform group-hover:scale-105 transition-transform duration-300">
          <img
            src={logo}
            alt={`${name} logo`}
            className="w-24 h-24 object-contain"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
          <div className="flex justify-center gap-1">{renderStars()}</div>
          <p className="text-sm text-gray-400 mt-1">{rating.toFixed(1)}/5.0</p>
        </div>

        <div className="mt-2">
          <div className="flex items-center gap-2 mb-2">
            <Gift className="w-5 h-5 text-red-500" />
            <p className="text-sm font-medium text-yellow-400">{bonus}</p>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <Gamepad2 className="w-5 h-5 text-blue-500" />
            <div className="flex flex-wrap gap-1">
              {features.map((feature, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-gray-800 text-gray-300 border-gray-700"
                >
                  {feature}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-green-500" />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex flex-wrap gap-1">
                    {paymentMethods.slice(0, 2).map((method, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-gray-800 text-gray-300 border-gray-700"
                      >
                        {method}
                      </Badge>
                    ))}
                    {paymentMethods.length > 2 && (
                      <Badge
                        variant="outline"
                        className="bg-gray-800 text-gray-300 border-gray-700"
                      >
                        +{paymentMethods.length - 2}
                      </Badge>
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-gray-800 border-gray-700">
                  <p className="text-sm text-gray-300">
                    {paymentMethods.join(", ")}
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button
          className="w-full bg-gradient-to-r from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700 text-white font-bold py-2 rounded-md flex items-center justify-center gap-2 group-hover:shadow-md transition-all duration-300"
          asChild
        >
          <a href={visitUrl} target="_blank" rel="noopener noreferrer">
            Visit Site <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CasinoCard;
