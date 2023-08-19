import express from 'express';
import hbs from 'hbs'

import path from 'path';

const __dirname = path.resolve();

import friendsRouter from './routes/friends.router.js';
import messagesRouter from './routes/messages.router.js';

const app = express();

app.set('view engine', 'html');
app.engine('html', hbs.__express);
app.set('views', path.join(__dirname, 'views'));

const port = 3000;


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Express Project',
        caption: 'This is a caption'
    });
});

app.use((req, res, next) => {

    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${req.ip} ${delta}ms}`);
});


app.use('/site', express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});