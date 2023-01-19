export const fetchHealthEndpoint = async (token, endpoint) => {
  const res = await fetch(
    process.env.REACT_APP_BASE_URL + "admin/" + endpoint,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  );
  const data = await res.json();
  return data;
};
