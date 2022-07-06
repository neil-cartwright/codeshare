import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import {fileURLToPath} from 'url';
import path from 'path';
const SITE_FOLDER = path.basename(path.dirname(fileURLToPath(import.meta.url)));

export default defineConfig({
	integrations: [vue(), tailwind()],
	publicDir: 'static',
	base: SITE_FOLDER,
	outDir: `public/${SITE_FOLDER}`,
});
