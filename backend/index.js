const express = require("express");
const cors = require("cors");


const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const {username} = req.body;

try{
    const r = await axios.put(
        'http: //api.chatengine.io/users/',
        {username: username, secret: username, first_name: username },
        {header: {"private-key": "hh8c63dbce-80a7-455a-890b-9368d16e1dcb"} }
    );
    return res.status(r.status).json(r.data);
}catch (e) {
    return res.status(e.response.status).json(e.response.data);
}


});

app.listen(3001);
