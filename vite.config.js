import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact(),
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				name: 'Clima Punta Alta',
				short_name: 'Clima',
				start_url: '/',
				display: 'standalone',
				background_color: '#c4fffcf5',
				theme_color: '#c4fffcf5',
				description: "Pronóstico del tiempo en Punta Alta",
				screenshots: [
					{
						"src": "screenshot_1.png",
						"sizes": "784x655",
						"type": "image/png",
						"form_factor": "wide"
					}
				],
				icons: [
					{
						src: '48x48_icon.png',
						sizes: '48x48',
						type: 'image/png',
					},
					{
						src: '64x64_icon.png',
						sizes: '64x64',
						type: 'image/png',
					},
					{
						src: '128x128_icon.png',
						sizes: '128x128',
						type: 'image/png',
					},
					{
						src: '256x256_icon.png',
						sizes: '256x256',
						type: 'image/png',
					}

				]
			}
		})

	],
});
