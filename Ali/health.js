
export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  res.status(200).json({
    success: true,
    service: "StockWise Solutions",
    assistant: "StockWise Assistant",
    status: "operational",
    message: "StockWise backend is running."
  });
}
