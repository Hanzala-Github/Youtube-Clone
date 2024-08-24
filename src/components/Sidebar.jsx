import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

export function Sidebar(props) {
  const { selectedCategory, setSelectedCategory } = props;

  // ..........This is the JSX return part......//
  return (
    <Stack
      direction="row"
      sx={{
        overflow: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category, i) => (
        <button
          className="category-btn"
          style={{
            background: category.name === selectedCategory && "#FC1503",
            color: "#fff",
          }}
          key={i}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "#fff" : "red",
              marginRight: "15px",
            }}
          >
            {<category.icon />}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}
