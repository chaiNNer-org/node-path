'use strict';

const winRe = /\b(?:Windows|Win64|Win32)\b/i;
const emptyEnv = {};

const processShim = {
  get platform() {
    if (typeof process === "object") {
      const pplatform = process?.platform;
      if (typeof pplatform === "string") {
        return pplatform;
      }
    }

    if (typeof navigator !== "undefined") {
      const ua = navigator?.userAgent
      if (typeof ua === "string" && winRe.test(ua)) {
        return "win32";
      }
    }

    return "linux";
  },

  get env() {
    if (typeof process === "object") {
      const env = process?.env;
      if (typeof env === "object" && env !== null) {
        return env;
      }
    }

    return emptyEnv;
  },

  cwd() {
    if (typeof process === "object" && typeof process?.cwd === "function") {
      return process.cwd();
    }

    return this.platform === "win32" ? "C:\\" : "/";
  }
}

module.exports = { process: processShim };
