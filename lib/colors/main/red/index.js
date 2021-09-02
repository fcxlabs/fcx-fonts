"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.red = void 0;
var shades_1 = require("./shades");
exports.red = {
    primary: "#C8102E",
    shades: __assign(__assign({}, shades_1.light), shades_1.dark),
};
//# sourceMappingURL=index.js.map