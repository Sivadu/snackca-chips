const loginAdmin = (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@example.com" && password === "admin123") {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

module.exports = { loginAdmin };
