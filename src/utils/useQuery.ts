import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from 'query-string';

export default function useQuery() {
  const location = useLocation();
  const [query, setQuery] = useState<any>(queryString.parse(location.search));

  useEffect(() => {
    if (queryString.parse(location.search) !== query)
      setQuery(queryString.parse(location.search))

    // eslint-disable-next-line
  }, [location])

  return query;
}

