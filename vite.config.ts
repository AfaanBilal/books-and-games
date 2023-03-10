import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
    base: "/books-and-games/",
    plugins: [solidPlugin()],
    server: {
        port: 3000,
    },
    build: {
        target: "esnext",
        outDir: "docs",
    },
});
