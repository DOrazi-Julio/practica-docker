import express, { Request, Response } from 'express';
import cors from 'cors';
import { Pool } from 'pg';

// Crear una instancia de Express
const app = express();

// Habilitar CORS
app.use(cors());
app.use(express.json());

// Configurar la conexión a PostgreSQL
const pool = new Pool({
    user: 'dockerUser',
    host: 'db',
    database: 'dockerTestDB',
    password: '1234',
    port: 5432,
});

// Ruta de ejemplo para obtener usuarios
app.get('/users', async (req: Request, res: Response) => {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM users');
        const users = result.rows;
        client.release();
        res.send(users);
    } catch (err) {
        console.error('Error al obtener usuarios', err);
        res.status(500).send('Error al obtener usuarios');
    }
});

// Ruta de ejemplo para agregar un usuario
app.post('/users', async (req: Request, res: Response) => {
    const { name, email, age } = req.body;
    try {
        const client = await pool.connect();
        await client.query('INSERT INTO users (name, email, age) VALUES ($1, $2, $3)', [name, email, age]);
        client.release();
        res.send({
            error:false,
            data:{},
            message:"Usuario agregado correctamente"
        });
        // res.send('Usuario agregado correctamente');
    } catch (err) {
        console.error('Error al agregar usuario', err);
        res.status(500).send('Error al agregar usuario');
    }
});


// Ruta para eliminar un usuario por su ID
app.delete('/users/:id', async (req: Request, res: Response) => {
    const userId = req.params.id;

    try {
        const client = await pool.connect();
        const result = await client.query('DELETE FROM users WHERE id = $1', [userId]);
        client.release();

        if (result.rowCount === 0) {
            res.status(404).send({
                error: true,
                message: `Usuario con ID ${userId} no encontrado`
            });
        } else {
            res.send({
                error: false,
                message: `Usuario con ID ${userId} eliminado correctamente`
            });
        }
    } catch (err) {
        console.error('Error al eliminar usuario', err);
        res.status(500).send('Error al eliminar usuario');
    }
});
// Escuchar en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
