export default async function handler(req, res) {
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": process.env.MONGODB_DATA_API_KEY,
    },
  };
  const fetchBody = {
    dataSource: "Cluster0",
    database: "sample_mflix",
    collection: "movies",
  };
  const baseUrl = `${process.env.MONGODB_DATA_API_URL}/action`;

  try {
    const readData = await fetch(`${baseUrl}/find`, {
      ...fetchOptions,
      body: JSON.stringify({
        ...fetchBody,
        limit: 10
      }),
    });
    const readDataJson = await readData.json();
    res.status(200).json(readDataJson.documents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
}
