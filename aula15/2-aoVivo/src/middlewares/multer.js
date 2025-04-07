// multerConfig.js

const multer = require('multer');
const path = require("path");

const pathUpload = path.join(`${__dirname}/../../public`);

// Configurar o destino e o nome do arquivo
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, pathUpload); // O diretório onde os arquivos serão salvos
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Nome do arquivo
    }
});

// Configurar a instância do Multer
const upload = multer({ storage: storage });

module.exports = upload; // Exportar a instância do Multer para uso em outros arquivos