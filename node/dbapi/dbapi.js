const express = require('express');
const  Joi = require('joi');
const mysql = require('mysql');

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const pool = mysql.createPool({
    connectionLimit:100,
    host: 'localhost',
    user: 'projekat',
    password: 'skript',
    database: 'bazafudbal'
})

const route = express.Router();
const bcrypt = require('bcrypt')

const fudbaleriSema = Joi.object().keys({
    ime: Joi.string().trim().max(30).required(),
    prezime: Joi.string().trim().max(30).required(),
    golovi: Joi.number(),
    asistencije: Joi.number()
});

const timoviSema = Joi.object().keys({
    ime_tima : Joi.string().min(3).max(24).required(),
    osvojeni_poeni : Joi.number()
})

const userSema = Joi.object().keys({
    username : Joi.string().min(5).max(40).required(),
    password : Joi.string().min(5).max(15).required(),
    name : Joi.string().min(2).max(20),
    email : Joi.string().email()
})

const loginSema = Joi.object().keys({
    username : Joi.string().min(5).max(40).required(),
    password : Joi.string().min(5).max(15).required()
})
async function hashPassword(password) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    console.log(hash)
}



route.post('/register',jsonParser, (req,res)=>{
    let { error } = userSema.validate(req.body);
    if (error){
        console.log(error)
        res.status(400).send(error.details[0].message);
    }else{
        const name = req.body.username;
        const email= req.body.email;
        var password= req.body.password;
        var name1 = req.body.name;
        let errors = [];

        //Check required fields
        if(!name  || !password  ){
            errors.push({msg: 'Please fill in all the fields'});
            res.send({message:'Please fill in all the fields'});
        }



        if(errors.length>0){

        }else{
            if(email){
                pool.query('SELECT * FROM users WHERE username = ?', [name],
                    (error, results, fields)=>{
                        if (results.length>0){
                            res.send('username exists');
                        }else{
                            res.send('Reg success')
                            bcrypt.hash(password, 5, (err, hash)=> {
                                if(err)throw err;
                                password = hash;
                                pool.query('INSERT INTO users(username, email, password, name) VALUES("'+name+'", "'+email+'", "'+password+'","' + name1+ ' ")',
                                    [name, email, password, name1]);
                            });
                            console.log("uspesna registracija")
                        }

                    });
            }else{
                res.send('Enter Email');
            };
        }
    }

});
route.post('/login',jsonParser, (req, res)=> {
    let { error } = loginSema.validate(req.body);
    console.log(req.body.username)
    console.log(req.body.password)
    if (error){
        res.status(400).send(error.details[0].message);
    }else {
        const username = req.body.username;
        const password = req.body.password;

        if (username && password) {
            pool.query('SELECT * FROM users WHERE username = ?', [username],
                (error, results, fields) => {
                    pass = results[0].password;
                    console.log(results[0]);
                    console.log(pass);
                    if (bcrypt.compareSync(password, pass)) {
                        res.send(results[0]);
                    } else {
                        res.send('Incorrect Email and/or Password!');
                    }
                    res.end();
                });
        } else {
            res.send('Please enter Username and Password!');
            res.end();
        }
    }
});

route.get('/test', (req, res)=>{
    res.send('cao');
})

route.get('/fudbaleri',(req,res) => {
    pool.query('select * from fudbaleri', (err, rows) => {
        if (err)
            res.status(500).send(err.sqlMessage);
        else
            res.send(rows);
    })
})

route.get('/timovi',(req,res) => {
    pool.query('select * from timovi', (err, rows) => {
        if (err)
            res.status(500).send(err.sqlMessage);
        else
            res.send(rows);
    })
})

route.post('/fudbaleri', jsonParser, (req, res)=> {
    let { error } = fudbaleriSema.validate(req.body);

    if (error)
        res.status(400).send(error.details[0].message);
    else{
        let query = 'insert into fudbaleri (ime, prezime, golovi, asistencije) values (?, ?, ?, ?)';
        let formatted = mysql.format(query, [req.body.ime, req.body.prezime, req.body.golovi, req.body.asistencije]);

        pool.query(formatted, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {
                // Ako nema greske dohvatimo kreirani objekat iz baze i posaljemo ga korisniku
                query = 'select * from fudbaleri where idFudbaleri=?';
                formatted = mysql.format(query, [response.insertId]);

                pool.query(formatted, (err, rows) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else
                        res.send(rows[0]);
                });
            }
        });
    }
});


route.post('/timovi', jsonParser, (req, res)=> {
    let { error } = timoviSema.validate(req.body);


    if (error)
        res.status(400).send(error.details[0].message);
    else{
        let query = 'insert into timovi (ime_tima, osvojeni_poeni) values (?, ?)';

        let formatted = mysql.format(query, [req.body.ime_tima, req.body.osvojeni_poeni]);

        pool.query(formatted, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {

                // Ako nema greske dohvatimo kreirani objekat iz baze i posaljemo ga korisniku
                query = 'select * from timovi where idTimovi=?';
                formatted = mysql.format(query, [response.insertId]);

                pool.query(formatted, (err, rows) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else
                        res.send(rows[0]);
                });
            }
        });
    }
});

route.post('/fudbaleri/del/:id', (req, res) => {
    let query = 'select * from fudbaleri where idFudbaleri=?';
    let formatted = mysql.format(query, [req.params.id]);

    pool.query(formatted, (err, rows) => {
        if (err)
            res.status(500).send(err.sqlMessage);
        else {
            let fudbaler = rows[0];

            let query = 'delete from fudbaleri where idFudbaleri=?';
            let formatted = mysql.format(query, [req.params.id]);

            pool.query(formatted, (err, rows) => {
                if (err)
                    res.status(500).send(err.sqlMessage);
                else
                    res.send(fudbaler);
            });
        }
    });
});

route.post('/timovi/del/:id', (req, res) => {
    let query = 'select * from timovi where idTimovi=?';
    let formatted = mysql.format(query, [req.params.id]);

    pool.query(formatted, (err, rows) => {
        if (err)
            res.status(500).send(err.sqlMessage);
        else {
            let tim = rows[0];

            let query = 'delete from timovi where idTimovi=?';
            let formatted = mysql.format(query, [req.params.id]);

            pool.query(formatted, (err, rows) => {
                if (err)
                    res.status(500).send(err.sqlMessage);
                else
                    res.send(tim);
            });
        }
    });
});

route.get('/timovi/:id', (req, res) => {
    let query = 'select * from timovi where idTimovi=?';
    let formatted = mysql.format(query, [req.params.id]);

    pool.query(formatted, (err, rows) => {
        if (err)
            res.status(500).send(err.sqlMessage);
        else {
            let tim = rows[0];
             res.send(tim);
            }});

});

route.get('/fudbaleri/:id', (req, res) => {
    let query = 'select * from fudbaleri where idFudbaleri=?';
    let formatted = mysql.format(query, [req.params.id]);

    pool.query(formatted, (err, rows) => {
        if (err)
            res.status(500).send(err.sqlMessage);
        else {
            let fudbaler = rows[0];
            res.send(fudbaler);
        }});

});

route.post('/fudbaleri/:id', jsonParser ,(req, res)=>{

    let { error } = fudbaleriSema.validate(req.body);
    if (error)
        res.status(400).send(error.details[0].message);
    else{
        let query = 'update fudbaleri set ime=?, prezime=?, osvojeni_poeni=?, minuti_odigrani=? where idFudbaleri = ?';
        let formatted = mysql.format(query, [req.body.ime, req.body.prezime, req.body.osvojeni_poeni, req.body.minuti_odigrani, req.params.id]);


        pool.query(formatted, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {
                // Ako nema greske dohvatimo kreirani objekat iz baze i posaljemo ga korisniku
                query = 'select * from fudbaleri where idFudbaleri=?';
                formatted = mysql.format(query, [req.params.id]);

                pool.query(formatted, (err, rows) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else
                        res.send(rows[0]);
                });
            }
        });
    }
});

route.post('/timovi/:id', jsonParser ,(req, res)=>{

    let { error } = timoviSema.validate(req.body);

    if (error)
        res.status(400).send(error.details[0].message);
    else{
        let query = 'update timovi set ime_tima=?, osvojeni_poeni=? where idTimovi = ?';
        let formatted = mysql.format(query, [req.body.ime_tima, req.body.osvojeni_poeni, req.params.id]);


        pool.query(formatted, (err, response) => {
            if (err)
                res.status(500).send(err.sqlMessage);
            else {
                // Ako nema greske dohvatimo kreirani objekat iz baze i posaljemo ga korisniku
                query = 'select * from timovi where idTimovi=?';
                formatted = mysql.format(query, [req.params.id]);

                pool.query(formatted, (err, rows) => {
                    if (err)
                        res.status(500).send(err.sqlMessage);
                    else
                        res.send(rows[0]);
                });
            }
        });
    }
});

module.exports = route;