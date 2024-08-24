import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./index";
import { LOGO } from "../utils/constants";

export function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        background: "#000",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={LOGO} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
}
