const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const htmlPath = path.resolve('test-headless.html').replace(/\\/g, '/');
const fileUrl = `file:///${htmlPath}`;

console.log('Launching headless Chrome on:', fileUrl);

const args = [
  '--headless=new',
  '--enable-logging=stderr',
  '--v=1',
  '--autoplay-policy=no-user-gesture-required',
  '--allow-file-access-from-files',
  '--use-fake-ui-for-media-stream',
  fileUrl
];

const proc = spawn(chromePath, args);

let output = '';
let foundVideo = false;

const checkOutput = (data) => {
  const str = data.toString();
  output += str;
  if (output.includes('###BASE64_VIDEO_START###') && output.includes('###BASE64_VIDEO_END###')) {
    foundVideo = true;
    const match = output.match(/###BASE64_VIDEO_START###([\s\S]*?)###BASE64_VIDEO_END###/);
    if (match) {
      const b64 = match[1].replace(/\s+/g, '');
      const buf = Buffer.from(b64, 'base64');
      fs.writeFileSync('test-out.webm', buf);
      console.log('SUCCESS! test-out.webm generated! Size:', buf.length, 'bytes');
    }
    proc.kill();
  }
};

proc.stdout.on('data', checkOutput);
proc.stderr.on('data', checkOutput);

proc.on('close', (code) => {
  console.log('Chrome closed with code:', code, 'foundVideo:', foundVideo);
  process.exit(foundVideo ? 0 : 1);
});

setTimeout(() => {
  if (!foundVideo) {
    console.log('Timeout. Current output length:', output.length);
    console.log('Sample output:', output.substring(0, 500));
    proc.kill();
    process.exit(1);
  }
}, 10000);
