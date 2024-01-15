import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();



export default async function fetchTomatoData() {


  const response = await fetch(
    "http://43.203.58.227:5000/"
  );

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    throw error;
  }

  const data = await response.json();



  return data;
}







// export default async function fetchTomatoImageData() {
//   const response = await fetch(
//     "http://192.168.0.3:9000/image"
//   );

//   if (!response.ok) {
//     const error = new Error("An error occurred while fetching the events");
//     error.code = response.status;
//     throw error;
//   }

//   const data = await response.json();


//   return data;

// }


