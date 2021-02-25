export default (key) => { var _a; return (_a = document.cookie.match(`(^|;)\\s*${key}\\s*=\\s*([^;]+)`)) === null || _a === void 0 ? void 0 : _a.pop(); };
