"use client";
import { useAppDispatch } from "@/store/hooks";
import { setSearchValue } from "@/store/slices/searchSlice";
import useDebounce from "@/hooks/useDebounce";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const dispatch = useAppDispatch();

  const [search, setSearch] = useState("");

  const debouncedValue = useDebounce(search);
  useEffect(() => {
    dispatch(setSearchValue(debouncedValue));
  }, [debouncedValue]);

  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <SearchIcon sx={{ color: "white", mr: 1, my: 0.5 }} />
      <TextField
        label="Search character"
        onChange={e => setSearch(e.target.value)}
      />
    </Box>
  );
};

export default SearchBar;
