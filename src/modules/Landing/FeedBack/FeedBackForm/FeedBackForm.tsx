import { Stack } from "@mui/material";
import FeedBackLeftSection from "./LeftSection/FeedBackLeftSection";
import FeedBackRightSection from "./RightSection/FeedBackRightSection";
import { useState } from "react";
function FeedBack() {
  const [ratings, setRatings] = useState({
    quality: 5,
    interactivity: 5,
    education: 5,
    maintenance: 5,
  });
  const [globalRating, setGlobalRating] = useState(5);
  const reGenerateGlobalRating = (newRatings: Record<string, number>): void => {
    const total = Object.values(newRatings).reduce(
      (acc, curr) => acc + curr,
      0
    );
    const globalRating = Math.round((total / 4) * 10) / 10;
    setGlobalRating(globalRating);
  };
  const handleChangeRating = (
    attribute: "quality" | "interactivity" | "education" | "maintenance"
  ) => {
    return (_event: Event, newValue: number | number[]): void => {
      const newRatings = {
        ...ratings,
        [attribute]: Array.isArray(newValue)
          ? newValue.map((value) => value / 20)
          : newValue / 20,
      };
      setRatings(newRatings);
      reGenerateGlobalRating(newRatings);
    };
  };
  //TODO:: consume post api from backend
  const handleSubmit = (data: any) => {
    console.log(data);
    console.log(ratings);
    console.log(globalRating);
  };
  return (
    <Stack direction={"row"}>
      <FeedBackLeftSection
        ratings={ratings}
        globalRating={globalRating}
        handleChangeRating={handleChangeRating}
      />
      <FeedBackRightSection handleSubmit={handleSubmit} />
    </Stack>
  );
}

export default FeedBack;
