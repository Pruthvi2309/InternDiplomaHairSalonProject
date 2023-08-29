// const express=require('express');
// const app=express();
// const con=require("./config");
// const cors=require('cors');
// app.use(express.json());

// app.use(cors());

// app.get('/male', (req, res) => {
//     const query = 'SELECT * FROM subtype_details';
//     con.query(query, (error, results) => {
//         if (error) {
//             console.log('Error executing MySQL query:', error);
//             res.send({status: 'error', message: 'Failed to fetch data' });
//         } else {
//             // console.log('Data retrieved successfully');
//             res.send(results);
//         }
//     });
// });

// app.listen(4000);

const express = require('express');
const app = express();
const con = require("./config");
const cors = require('cors');
app.use(express.json());

app.use(cors());

app.get('/cards/:typeId', (req, res) => {
    const typeId = req.params.typeId;

    const query = `
        SELECT subtype.*, type.*
        FROM subtype_details AS subtype
        JOIN type_details AS type ON subtype.type_id = type.type_id
        WHERE subtype.type_id = ?
    `;

    con.query(query, [typeId], (error, results) => {
        if (error) {
            console.log('Error executing MySQL query:', error);
            res.status(500).json({ status: 'error', message: 'Failed to fetch data' });
        } else {
            res.status(200).json(results);
        }
    });
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
