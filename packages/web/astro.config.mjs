// @ts-check
import { defineConfig } from 'astro/config';
import aws from "astro-sst";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	output: "server",
  integrations: [react()],
  adapter: aws(),
  experimental: {
    serverIslands: true
  }
});
