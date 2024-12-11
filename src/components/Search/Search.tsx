import React, { useState, useEffect, useCallback } from "react";
import styles from "./Search.module.css";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Props {
  searchByCityName: (cityName: string) => void;
}

const Search: React.FC<Props> = ({ searchByCityName }) => {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = useCallback(() => {
    searchByCityName(search);
    clearField();
  }, [search, searchByCityName]);

  function onCandleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  const filterOnKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSubmit();
      }
    },
    [handleSubmit]
  );

  const clearField = () => {
    setSearch("");
  };

  useEffect(() => {
    window.addEventListener("keypress", filterOnKeyPress, true);
    return () => {
      window.removeEventListener("keypress", filterOnKeyPress, true);
    };
  }, [filterOnKeyPress]);

  return (
    <section className={styles.wrapper_search}>
      <FormControl className={styles.form}>
        <div>
          <InputLabel htmlFor="search">City</InputLabel>
          <Input
            id="search"
            aria-describedby="helper-text"
            value={search}
            onChange={onCandleChange}
          />
          <FormHelperText id="helper-text">
            Enter your intersting place.
          </FormHelperText>
        </div>
        <div>
          <SearchIcon className={styles.icon} onClick={handleSubmit} />
        </div>
      </FormControl>
    </section>
  );
};

export default Search;
