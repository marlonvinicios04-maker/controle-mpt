// Copia as bibliotecas usadas pelo app para www/libs,
// para que o APK funcione sem depender de CDN.
const fs = require('fs');
const path = require('path');

const out = path.join(__dirname, '..', 'www', 'libs');
fs.mkdirSync(out, { recursive: true });

const files = [
  ['firebase/firebase-app-compat.js', 'firebase-app-compat.js'],
  ['firebase/firebase-auth-compat.js', 'firebase-auth-compat.js'],
  ['firebase/firebase-firestore-compat.js', 'firebase-firestore-compat.js'],
  ['xlsx/dist/xlsx.full.min.js', 'xlsx.full.min.js'],
  ['jspdf/dist/jspdf.umd.min.js', 'jspdf.umd.min.js'],
  ['qrcode-generator/qrcode.js', 'qrcode.js'],
  ['jsqr/dist/jsQR.js', 'jsQR.js'],
];

for (const [src, dst] of files) {
  try {
    const from = path.join(__dirname, '..', 'node_modules', src);
    fs.copyFileSync(from, path.join(out, dst));
    console.log('ok  ', dst);
  } catch (e) {
    // O app tem CDN como alternativa, então só avisa
    console.warn('AVISO: não encontrei', src, '-', e.message);
  }
}
