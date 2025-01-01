import express from "express";
import { HelloResponse } from '@internal/shared-types'

const port = 3200;
const app = express();

app.get('/test', (req, res) => {
    const response: HelloResponse = {data: 'Hello from the server!'};
    res.send(response);
});


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
