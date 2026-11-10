// Ajustes no projeto Android gerado pelo Capacitor:
// ícones, cor do ícone, permissão de câmera e chave de assinatura fixa.
const fs = require('fs');
const path = require('path');
const os = require('os');

const root = path.join(__dirname, '..');
const res = path.join(root, 'android', 'app', 'src', 'main', 'res');

// 1) Ícones
const icons = path.join(root, 'resources', 'android');
for (const dir of fs.readdirSync(icons)) {
  const target = path.join(res, dir);
  fs.mkdirSync(target, { recursive: true });
  for (const f of fs.readdirSync(path.join(icons, dir))) {
    fs.copyFileSync(path.join(icons, dir, f), path.join(target, f));
  }
}
console.log('ícones copiados');

// 2) Cor de fundo do ícone adaptativo
const bg = path.join(res, 'values', 'ic_launcher_background.xml');
fs.mkdirSync(path.dirname(bg), { recursive: true });
fs.writeFileSync(bg, '<?xml version="1.0" encoding="utf-8"?>\n<resources>\n    <color name="ic_launcher_background">#0B5CAD</color>\n</resources>\n');

// 3) Permissões (câmera para fotos e leitura de QR)
const manifestPath = path.join(root, 'android', 'app', 'src', 'main', 'AndroidManifest.xml');
let manifest = fs.readFileSync(manifestPath, 'utf8');
const perms = [
  '<uses-permission android:name="android.permission.CAMERA" />',
  '<uses-feature android:name="android.hardware.camera" android:required="false" />',
];
for (const p of perms) {
  if (!manifest.includes(p)) manifest = manifest.replace('</manifest>', '    ' + p + '\n</manifest>');
}
fs.writeFileSync(manifestPath, manifest);
console.log('permissões ok');

// 4) Chave de assinatura fixa (permite instalar atualizações por cima da versão anterior)
const ks = path.join(root, 'android-keystore', 'debug.keystore');
if (fs.existsSync(ks)) {
  const dir = path.join(os.homedir(), '.android');
  fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(ks, path.join(dir, 'debug.keystore'));
  console.log('keystore ok');
}
