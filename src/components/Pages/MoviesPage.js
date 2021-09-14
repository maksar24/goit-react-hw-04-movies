import React, { useState, useEffect } from "react";
import Searchbar from "../Searchbar/Searchbar";
import { CustomLoader } from "../Loader/Loader";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  return <div>MoviesPage</div>;
}
