import axios, { AxiosPromise } from "axios";
import { GameData } from "../interface/GameData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://games-test-api-81e9fb0d564a.herokuapp.com/api/data";

const headers = {
  "dev-email-address": "luiggiabdieldev@gmail.com"
}

const fetchData = async (): AxiosPromise<GameData[]> => {
  const response = axios.get(API_URL, { headers });
  return response;
}

export function useGameData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["snack-data"]
  });

  return {
    ...query,
    data: query.data?.data
  }
}
