"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confugure = void 0;
var container_1 = require("../container");
function confugure(target, propertyName, descriptor) {
    var originalTarget = Reflect.getMetadata('design:returntype', target.constructor.prototype, propertyName);
    var value = descriptor.value;
    // tslint:disable-next-line:only-arrow-functions
    descriptor.value = function () {
        return this[container_1.CONTAINER_CONTEXT].get(originalTarget);
    };
    container_1.Container.set(originalTarget, value);
}
exports.confugure = confugure;
//# sourceMappingURL=confugure.annotation.js.map