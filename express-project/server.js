import express from 'express';

import friendsRouter from './routes/friends.router.js';
import messagesRouter from './routes/messages.router.js';

const app = express();

const port = 3000;


app.use((req, res, next) => {

    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${req.ip} ${delta}ms}`);
});

app.use(express.json());


app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});