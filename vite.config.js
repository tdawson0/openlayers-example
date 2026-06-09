export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'ol': ['ol']
        }
      }
    }
  },
}
