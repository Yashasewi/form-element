import { defineConfig } from "vite";

export default defineConfig({
    // Set the output directory for the built files
    build: {
        lib: {
            entry: "src/my-element.ts",
            formats: ["es"],
        },
        rollupOptions: {
            external: [/^lit/],
        },
    },
});
