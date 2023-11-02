import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({message: 'Yeah! Docker baby 🐳'});
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
