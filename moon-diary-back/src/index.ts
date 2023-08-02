import express from 'express'

const app = express();
const PORT = 5030

app.get("/", (req, res) =>{
    res.send("Welcome the moon diary.")
});

app.listen(PORT, () => {
    console.log(`Moon diary server listening on port ${PORT}.`);
})