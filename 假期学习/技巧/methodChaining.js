//方法体内返回对象实例自身(this)
class ClassA {
    constructor(props) {
        this.prop1 = 1;
        this.prop2 = 1;
        this.prop3 = 1;
    }
    method1(p1) {
        this.prop1 = p1;
        return this;
    }
    method2(p2) {
        this.prop2 = p2;
        return this;
    }
    method3(p3) {
        this.prop3 = p3;
        return this;
    }
}

let obj = new ClassA();
obj.method1(1).method2(2).method3(3);


//对象传入后每次调用返回函数自身
const singleChain = obj => {
    const chain = (...options) => {
        if (options.length == 0) {
            return chain.obj;
        }
        const methodName = options[0],
            methodArgs = [].slice.call(options, 1);
        chain.obj[methodName].apply(chain.obj, methodArgs);
        return chain;
    }
    chain.obj = obj;
    return chain;
}
const obj1 = new ClassA();
singleChain(obj1)('method1', 1)()

