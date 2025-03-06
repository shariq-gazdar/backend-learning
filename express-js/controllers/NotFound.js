const notFound = (req, res) => {
  res.status(404).json({ error: "Are you mad" });
};
module.exports = notFound;
