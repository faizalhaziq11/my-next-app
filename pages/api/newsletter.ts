export default function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.inclues("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    console.log(userEmail);
  }
}
