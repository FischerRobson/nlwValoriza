import express from "express";

const app = express();

app.get("/", (req, res) => {
    return res.json({ user: 'amor' });
});

app.post("/", (req, res) => {
    return res.send();
})

app.listen(3333, () => {
    console.log("Server is running");
});
