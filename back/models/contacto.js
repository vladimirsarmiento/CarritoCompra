'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Se crea un modelo de objeto para el cliente
var ContactoSchema = Schema({
    cliente: {type: String, required: true},
    mensaje: {type: String, required: true},
    asunto: {type: String, required: true},
    estado: {type: String, required: true},
    telefono: {type: String, required: true},
    correo: {type: String, required: true},
    
    createdAt: {type: Date, default: Date.now, required: true}
});

module.exports = mongoose.model('contacto', ContactoSchema);