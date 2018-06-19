// Usamos el var por compatibilidad
var socket = io();

// On: escuchar información
socket.on('connect', function() {

    console.log('Conectado al servidor');

});

socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});

// Emit: enviar información
socket.emit('enviarMensaje', {
    usuario: 'Alexis',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta del servidor: ', resp);
});

// Escuchar información
socket.on('enviarMensaje', function(data) {

    console.log('Servidor:', data);

});