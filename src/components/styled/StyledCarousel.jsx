import React, { useState } from "react";
import { Box, IconButton, Stack } from "@mui/material";
import ArrowIconLeft from "../../icons/ArrowIconLeft";
import ArrowIcon from "../../icons/ArrowIcon";

const StyledCarousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === children.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <Stack sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {React.Children.map(children, (child) => (
          <Box
            sx={{
              minWidth: "100%",
              boxSizing: "border-box",
              p: 2,
            }}
          >
            {child}
          </Box>
        ))}
      </Box>
      <Stack
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        mt={2}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            backgroundColor: "transparent",
            border: 1,
            padding: 2,
          }}
        >
          <ArrowIconLeft color="black" fontSize="small" />
        </IconButton>
        <IconButton
          onClick={handleNext}
          sx={{
            backgroundColor: "transparent",
            border: 1,
            padding: 2,
          }}
        >
          <ArrowIcon color="black" fontSize="small" />
        </IconButton>
      </Stack>
      <Stack direction="row" justifyContent="center" spacing={1} mt={2}>
        {React.Children.map(children, (_, index) => (
          <Box
            key={index}
            onClick={() => handleIndicatorClick(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "black" : "gray",
              cursor: "pointer",
            }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default StyledCarousel;
