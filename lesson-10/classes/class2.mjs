import {ParentClass} from './class1.mjs';

export class ChildClass extends ParentClass {
    constructor(age) {
        super('child')
        this.age = age;
    }
}