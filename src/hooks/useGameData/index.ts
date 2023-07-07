import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { GameData } from "../../interface/GameData";

const API_URL = "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data";

const headers = {
  "dev-email-address": "luiggiabdieldev@gmail.com"
}

const fetchData = async (): AxiosPromise<GameData[]> => {
  try {
    const response = axios.get(API_URL, { headers, timeout: 5000 });
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
