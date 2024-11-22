const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('<h1>Selamat Datang di Aplikasi Express.js</h1>');
});

app.get('/json', (req, res) => {
    res.json({
        message: 'Ini adalah data JSON',
        status: 'Berhasil',
        data: {
            nama: 'Jefryanus Lemur',
            pekerjaan: 'Mahasiswa',
        },
    });
});

app.get('/html', (req, res) => {
    res.send('<h1>Ini adalah halaman HTML sederhana</h1>');
});

app.get('/profil', (req, res) => {
    res.send('<h2>Halo, ini adalah halaman Profil!</h2>');
});

app.use((req, res) => {
    res.status(404).send('<h1>404 - Halaman Tidak Ditemukan</h1>');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
