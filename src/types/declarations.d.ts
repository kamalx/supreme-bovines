/// <reference types="vite/client" />

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

// This tells TypeScript that both .scss and .css files are valid modules.

// Also,
// Ensure `vite-env.d.ts` (this file) is Included in `tsconfig.json`
// REF: https://chat.deepseek.com/a/chat/s/3e3d128b-450f-432e-9465-bf53ba5da48f
