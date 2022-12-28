"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pow = exports.isWord = exports.diff = void 0;
const diff = (a, b) => Math.abs(a - b);
exports.diff = diff;
const isWord = text => text.length === 1;
exports.isWord = isWord;
const pow = (a, x) => a ** x;
exports.pow = pow;