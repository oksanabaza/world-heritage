import adapter from '@sveltejs/adapter-node';

export default {
  kit: {
    adapter: adapter(),
    vite: {
      server: {
        host: '0.0.0.0',
        port: process.env.PORT || 3000
      }
    }
  }
};
