import { Container, CONTAINER_CONTEXT } from '../container';

export function confugure(target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const originalTarget = Reflect.getMetadata('design:returntype', target.constructor.prototype, propertyName);
    const value = descriptor.value;
    // tslint:disable-next-line:only-arrow-functions
    descriptor.value = function () {
        return this[CONTAINER_CONTEXT].get(originalTarget);
    }
    Container.set(originalTarget, value);
}
