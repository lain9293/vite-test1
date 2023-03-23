import axios from "axios";
import { DOGS_API_BASE_URL } from "../constants/appParameters";
import { DogEntity } from "./DogEntity";

export const axiosInstance = axios.create({
  baseURL: DOGS_API_BASE_URL,
  timeout: 2000,
});

export const clientGet = async (endpoint: string) => {
  try {
    const response = await axiosInstance.get<DogEntity>(endpoint);
    return response.data;
  } catch (error) {
    return Promise.reject(
      new Error(
        axios.isAxiosError(error)
          ? error.message
          : "Ocurrio un error consultando los dogs."
      )
    );
  }
};
