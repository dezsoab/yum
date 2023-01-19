export const fetchHealthEndpoint = async (token, endpoint) => {
  const res = await fetch("http://localhost:8080/admin/" + endpoint, {
    // const res = await fetch(
    //   "http://192.168.0.27:8080/api/v1/auth/authenticate",
    //   {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await res.json();
  return data;
};
