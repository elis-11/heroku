import express from 'express';
import path from 'path';
const __dirname = path.resolve(path.dirname(''));
import * as qfil from './qtools/qfil.js';
 
const app = express();
const port = process.env.PORT || 3011;
 
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));
 
const staticDirectory = path.join(__dirname, './public');
app.use(express.static(staticDirectory));
 
qfil.getJsonDataFromFile('siteData.json', (siteData) => {
 
    app.get('/info', (req, res) => {
        res.render('info',
            {
                ...siteData,
                message: "Welcome to info page."
            });
    });
    app.get('/', (req, res) => {
        res.render('index',
            {
                ...siteData,
                message: 'Welcome to the home page.',
            });
    });
 
    app.listen(port, () => {
        console.log(`Listening on port http://localhost:${port}`);
    });
});