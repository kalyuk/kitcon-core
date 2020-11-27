"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Container = exports.CONTAINER_CONTEXT = exports.CONTAINER_ID = void 0;
require("reflect-metadata");
var uuid_1 = require("uuid");
exports.CONTAINER_ID = Symbol('CONTAINER_ID');
exports.CONTAINER_CONTEXT = Symbol('CONTAINER_CONTEXT');
var Container = /** @class */ (function () {
    function Container() {
        this.instances = {};
    }
    Container.add = function (target) {
        if (!target[exports.CONTAINER_ID]) {
            target[exports.CONTAINER_ID] = uuid_1.v4();
            this.register[target[exports.CONTAINER_ID]] = {
                Target: target
            };
        }
    };
    Container.getContext = function () {
        return this.context;
    };
    Container.set = function (target, alias) {
        this.register[target[exports.CONTAINER_ID]].alias = alias;
    };
    Container.prototype.get = function (target) {
        var instanceKey = target[exports.CONTAINER_ID];
        if (!this.instances[instanceKey]) {
            var _a = Container.register[instanceKey], alias = _a.alias, Target = _a.Target;
            var instance = alias ? alias(this) : new Target();
            this.instances[instanceKey] = instance;
            instance[exports.CONTAINER_CONTEXT] = this;
            if (instance.init) {
                instance.init();
            }
        }
        return this.instances[instanceKey];
    };
    Container.prototype.destroy = function () {
        this.instances = {};
    };
    Container.context = new Container();
    Container.register = {};
    return Container;
}());
exports.Container = Container;
//# sourceMappingURL=container.js.map