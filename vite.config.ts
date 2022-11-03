import { sveltekit } from '@sveltejs/kit/vite';
import getCertificate from '@vitejs/plugin-basic-ssl';
import type { UserConfig } from 'vite';

const config: UserConfig = {
  plugins: [sveltekit()],
  server: {
    https: false,
  },
};

export default config;
