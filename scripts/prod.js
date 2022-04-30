import fs from 'fs';
import fse from 'fs-extra';
import { spawn } from 'child_process';
import dotenv from 'dotenv';

/* ENVIRONMENT VARIABLES */
dotenv.config();
const SITE_FOLDER = process.env.SITE_FOLDER;

/* MAIN */
spawn('npm', ['run', 'build']).stdout.on('close', () => {
	fs.readFile(`public/${SITE_FOLDER}/index.html`, 'utf8', async (err, data) => {
		err && console.error('unable to read file');

		const updated = cleanCSSLink(data);
		writeDataToHMTL(updated);
		await fse.move(`public/${SITE_FOLDER}/assets`, `public/${SITE_FOLDER}/css`);
		spawn('npx', ['prettier', '-w', `public/${SITE_FOLDER}/index.html`]);
	});
});

/* CLOSE */
process.on('exit', () => {
	console.log('site built!');
});

/* HELPERS */
function cleanCSSLink(data) {
	return data.replace('></link>', ' />').replace('assets', 'css');
}

function writeDataToHMTL(data) {
	fs.writeFile(`public/${SITE_FOLDER}/index.html`, data, 'utf8', (err) => {
		err && console.error('unable to write file');
	});
}
