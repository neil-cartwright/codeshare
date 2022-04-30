import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import tailwind from '@astrojs/tailwind';
import dotenv from 'dotenv';

dotenv.config();
const SITE_FOLDER = process.env.SITE_FOLDER;

export default defineConfig({
	integrations: [vue(), tailwind()],
	publicDir: 'static',
	base: SITE_FOLDER,
	outDir: `public/${SITE_FOLDER}`,
});