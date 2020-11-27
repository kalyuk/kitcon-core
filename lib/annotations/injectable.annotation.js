"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injectable = void 0;
var container_1 = require("../container");
function Injectable(target) {
    container_1.Container.add(target);
}
exports.Injectable = Injectable;
//# sourceMappingURL=injectable.annotation.js.map