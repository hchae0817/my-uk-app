// api/submit.js
const mongoose = require('mongoose');

let db = null;  // Ensure connection is reused across function calls

// Define a schema and model for submissions
const submissionSchema = new mongoose.Schema({
    email: { type: String, required: true },
    timestamp: { type: Date, required: true },
});

let Submission;

async function connectDB() {
  if (db) return db;

  if (!Submission) {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    db = mongoose.connection;
    Submission = mongoose.model('Submission', submissionSchema);
  }
  return db;
}

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    console.log(req.body)
    const { email } = req.body;
    const existingSubmission = await Submission.findOne({ email });
    const now = new Date();

    if (existingSubmission) {
      const daysElapsed = (now - existingSubmission.timestamp) / (1000 * 60 * 60 * 24);
      if (daysElapsed < 7) {
        return res.status(400).json({ message: 'You can only submit once every 7 days.' });
      }
    }

    // Save the new submission
    const newSubmission = new Submission({ email, timestamp: now });
    await newSubmission.save();

    return res.json({ message: 'Submission successful!' });
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
