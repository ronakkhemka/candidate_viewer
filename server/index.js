const express = require('express');
const cors = require('cors');  // Import the cors module
const app = express();
const PORT = 5000;

app.use(cors());  // Enable CORS for all routes

const candidates = [
    { id: 1, name: "Alice Smith", skills: ["React", "Node.js"], experience: 5 },
    { id: 2, name: "Bob Johnson", skills: ["Java", "Spring Boot"], experience: 8 },
    { id: 3, name: "Charlie Brown", skills: ["Python", "Django"], experience: 3 },
    { id: 4, name: "David White", skills: ["JavaScript", "Vue.js"], experience: 4 },
    { id: 5, name: "Eve Davis", skills: ["Java", "Spring Boot", "Microservices"], experience: 7 },
    { id: 6, name: "Frank Miller", skills: ["React", "TypeScript"], experience: 6 },
    { id: 7, name: "Grace Wilson", skills: ["Node.js", "Express"], experience: 2 },
    { id: 8, name: "Hannah Lee", skills: ["Ruby", "Rails"], experience: 4 },
    { id: 9, name: "Ivy Taylor", skills: ["PHP", "Laravel"], experience: 5 },
    { id: 10, name: "Jack Martinez", skills: ["C#", "ASP.NET"], experience: 9 },
    { id: 11, name: "Kenny Harris", skills: ["Swift", "iOS Development"], experience: 3 },
    { id: 12, name: "Liam Clark", skills: ["Go", "Docker"], experience: 6 },
    { id: 13, name: "Maya Robinson", skills: ["JavaScript", "Node.js"], experience: 2 },
    { id: 14, name: "Nathan Young", skills: ["Python", "Flask"], experience: 4 },
    { id: 15, name: "Olivia King", skills: ["Angular", "TypeScript"], experience: 7 }
];


app.get('/api/candidates', (req, res) => {
    res.json(candidates);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
