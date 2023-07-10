import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { GameData } from "../../interface/GameData";

const apiURL = import.meta.env.VITE_API_URL;
const headers = import.meta.env.VITE_HEADER_EMAIL;

const fetchData = async (): AxiosPromise<GameData[]> => {
  try {
    const response = axios.get(apiURL, { headers, timeout: 5000 });
    return response;
  } catch (error: any) {
    return error;
  }
}

export function useGameData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["snack-data"],
    retry: false,
    refetchOnWindowFocus: false
  });

  return {
    ...query,
    data: query.data?.data,
    error: query.error
  }
}
