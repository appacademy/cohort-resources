import { $CombinedState } from "redux"

export const fetchAllTeas = () => {
  return $.ajax({
    method: "GET",
    url: "/api/teas", //check rails routes if you forget!
  })
}

export const createTea = (tea) => {
  return $.ajax({
    method: "POST",
    url: "/api/teas",
    data: {
      tea: tea 
    }
  });
};