"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolve = void 0;
var container_1 = require("../container");
function resolve(target, propertyName) {
    var original = Reflect.getMetadata('design:type', target.constructor.prototype, propertyName);
    var $resolve = Reflect.getMetadata('resolve', target.constructor) || [];
    $resolve.push([propertyName, original]);
    Reflect.defineMetadata('resolve', $resolve, target.constructor);
    Object.defineProperty(target.constructor.prototype, propertyName, {
        get: function () {
            if (this.context && this.context instanceof container_1.Container) {
                return this.context.get(original);
            }
            return this[container_1.CONTAINER_CONTEXT].get(original);
        }
    });
}
exports.resolve = resolve;
//# sourceMappingURL=resolve.annotation.js.map