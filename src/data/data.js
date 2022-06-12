import axios from "axios";

export const instance = axios.create({
  baseURL: "https://disease.sh/v3/covid-19",
});

export const apiEndpoints = {
  countries: "/countries",
  global: instance.get("/all"),
};
