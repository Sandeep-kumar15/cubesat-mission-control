// Arduino (USB serial, one JSON line per sample) -> WebSocket ws://localhost:8080
// Setup: npm install   then   node bridge.js   (change COM3 to your port)
const { SerialPort, ReadlineParser } = require('serialport');
const { WebSocketServer } = require('ws');
const port = new SerialPort({ path: process.argv[2] || 'COM3', baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));
const wss = new WebSocketServer({ port: 8080 });
parser.on('data', line => {
  try {
    const j = JSON.parse(line);
    j.timestamp = new Date().toISOString();
    wss.clients.forEach(c => c.send(JSON.stringify(j)));
  } catch (e) { /* ignore bad line */ }
});
console.log('Bridge running on ws://localhost:8080');
