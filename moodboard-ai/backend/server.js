require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('MoodBoard AI Backend is running!');
});

// Placeholder for mood processing endpoint
app.post('/api/mood', (req, res) => {
  const { mood } = req.body;
  console.log('Received mood:', mood);

  // In a real implementation, you would call APIs here
  // For now, return some mock data
  const mockData = {
    playlist: {
      name: 'Chill Vibes',
      url: 'https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO',
    },
    wallpaper: {
      url: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      photographer: 'eberhard grossgasteiger',
    },
    quote: {
      text: 'The best way to predict the future is to create it.',
      author: 'Peter Drucker',
    },
    tasks: [
      { id: 1, text: 'Take 5 deep breaths', completed: false },
      { id: 2, text: 'Stretch for 2 minutes', completed: false },
      { id: 3, text: 'Write down one thing you are grateful for', completed: false },
    ],
  };

  res.json(mockData);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});