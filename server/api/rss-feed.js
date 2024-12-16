import axios from "axios";
import { parseStringPromise } from "xml2js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      // Fetch RSS feed
      const response = await axios.get("https://qubicbox.com/feed/wprss/");
      const xmlData = response.data;

      // Convert XML to JSON
      const jsonData = await parseStringPromise(xmlData, {
        explicitArray: false,
      });

      // Process entries
      const entries = jsonData.feed.entry || [];
      const items = Array.isArray(entries)
        ? entries.map((entry) => ({
            title: entry.title || "Untitled Article",
            link: entry.link?.href || "#",
            contentSnippet: entry.summary || "No summary available.",
          }))
        : [
            {
              title: entries.title || "Untitled Article",
              link: entries.link?.href || "#",
              contentSnippet: entries.summary || "No summary available.",
            },
          ];

      // Respond with JSON
      res.status(200).json({ items });
    } catch (error) {
      console.error("Error fetching and parsing RSS feed:", error);
      res.status(500).json({ error: "Failed to fetch or parse RSS feed" });
    }
  } else {
    // Handle unsupported HTTP methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
