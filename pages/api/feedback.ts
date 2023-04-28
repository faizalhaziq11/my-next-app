export default function handler(req, res) {
  if (req.method === "POST") {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    const newFeedback = {
      id: new Date().toISOString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };

    // store that in a database or in a file
    console.log(newFeedback);
  }
  res.status(200).json({ message: "Hello World!" });
}
