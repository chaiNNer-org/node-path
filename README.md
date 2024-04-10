# node path

This is a browser-friendly polyfill for the Node.js `path` module. Unlike other polyfills like `path-browserify`, this is not a re-implementation, but a source code copy of the original Node.js `path` module (state commit [818c10e86d9c44b7e99197a0983ba143754474be](https://github.com/nodejs/node/blob/818c10e86d9c44b7e99197a0983ba143754474be/lib/path.js)). This ensures that win32 is supported properly.

## platform, cwd, and env

The `path` module relies upon the `process.platform`, `process.cwd()`, and `process.env` variables. Those are obviously not present in the browser, so this package uses a shim for those. It works as follows:

- `process.platform`:
   - If `globalThis.process.platform` is a string, return it.
   - If `globalThis.navigator.userAgent` indicates a Windows platform, return `'win32'`.
   - Otherwise, return `'linux'`.
- `process.cwd()`:
   - If `globalThis.process.cwd` is a function, run it and return its result.
   - If the shim for `process.platform` is `'win32'`, return `'C:\\'`.
   - Otherwise, return `'/'`.
- `process.env`:
   - If `globalThis.process.env` is an object, return it.
   - Otherwise, return an empty object.

## License

All code except for `path.js` is licensed under the MIT license.

`path.js` is licensed under following terms:

> Copyright Joyent, Inc. and other Node contributors.
>
> Permission is hereby granted, free of charge, to any person obtaining a
> copy of this software and associated documentation files (the
> "Software"), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to permit
> persons to whom the Software is furnished to do so, subject to the
> following conditions:
>
> The above copyright notice and this permission notice shall be included
> in all copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
> OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
> NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
> DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
> OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
> USE OR OTHER DEALINGS IN THE SOFTWARE.
