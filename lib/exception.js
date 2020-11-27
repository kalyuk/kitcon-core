"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exception = void 0;
var Exception = /** @class */ (function () {
    function Exception(message, code, errors) {
        if (code === void 0) { code = 500; }
        this.message = message;
        this.code = code;
        this.errors = errors;
    }
    return Exception;
}());
exports.Exception = Exception;
//# sourceMappingURL=exception.js.map