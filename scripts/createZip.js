const fs = require('fs');
const archiver = require('archiver');
const packageJSON = require('../package.json');

const SOURCE_DIR = 'build';
const OUTPUT_DIR = 'dist';
const ZIP_FILE = `${OUTPUT_DIR}/extension-${packageJSON.version}.zip`;

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR);
}

const output = fs.createWriteStream(ZIP_FILE);
const archive = archiver('zip');

output.on('close', () => {
  const totalBytes = archive.pointer();

  if (totalBytes) {
    console.log(`Generated ${ZIP_FILE}: ${totalBytes} bytes`);
  }
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

archive.directory(SOURCE_DIR, false);

archive.finalize();
