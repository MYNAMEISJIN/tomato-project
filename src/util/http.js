import { QueryClient } from "@tanstack/react-query";
import {io} from "socket.io-client"

export const socket = io.connect("http://43.203.58.227:5000/")

export const queryClient = new QueryClient();


export default async function fetchTomatoData() {


  const response = await fetch(
    "http://43.203.58.227:5000/"
  );

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the Tomato Data");
    error.code = response.status;
    throw error;
  }
  const data = await response.json();

  
  return data;
}


export async function requestNewTomatoData(data) {

  // const response = await fetch(
  //   "http://43.203.58.227:5000/", {
  //   method: "POST",
  //   body: JSON.stringify(data),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   }
  // });

  // if (!response.ok) {
  //   const error = new Error("An error occurred while requesting new Tomato Data");
  //   error.code = response.status;
  //   throw error;
  // }

  // const data = await response.json();

  return data;
}



