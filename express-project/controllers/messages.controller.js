import path from 'path';

const __dirname = path.resolve();

function getMessages(req, res) {
    res.render('messages', {
        title: 'Messages',
        friends: 'kenny'
    })

    //res.sendFile(path.join(__dirname, '.', 'public', 'images','skimountain.jpg'));
}

function postMessage(req, res) {
    console.log('Updating messages');
}

export { getMessages, postMessage }

