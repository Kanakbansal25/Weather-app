fetch("https://your-api-url.com/endpoint", {
  method: "GET",
  headers: {
    "Authorization": "d1845658f92b31c64bd94f06f7188c9c",
    "Content-Type": "application/json"
  }
})
.then(async res => {
  console.log("Status:", res.status);

  const data = await res.json();
  console.log("Fetched data:", data);

  return data;
})
.catch(err => console.error("Error:", err));
