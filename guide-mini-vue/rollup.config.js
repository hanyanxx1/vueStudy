import typescript from "@rollup/plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import pkg from "./package.json";
export default {
  input: "./src/index.ts",
  output: [
    {
      format: "cjs",
      file: pkg.main,
      sourcemap: true,
    },
    {
      name: "vue",
      format: "es",
      file: pkg.module,
      sourcemap: true,
    },
  ],
  plugins: [resolve(), commonjs(), typescript(), sourceMaps()],
};
