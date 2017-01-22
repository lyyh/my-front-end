//链式调用
//流程控制
var _LazyMan = function(name) {
    this.tasks = [];
    var _this = this;
    var fn = (function(name) {
        var _name = name;
        return function() {
            console.log('Hi! This is ' + _name);
            _this.next();
        }
    })(name);
    _this.tasks.push(fn);
    // setTimeout(function() {
    //     _this.next();
    // }, 0)
    _this.next();
}

_LazyMan.prototype.next = function() {
    var fn = this.tasks.shift();
    fn && fn();
}

_LazyMan.prototype.eat = function(name) {
    var _this = this;
    var fn = (function(n) {
        return function() {
            console.log('Eat ' + n + ' ~');
            _this.next();
        }
    })(name);
    this.tasks.push(fn);
    return this;
}

_LazyMan.prototype.sleep = function(time) {
    var self = this;
    var fn = (function(time) {
        return function() {
            setTimeout(function() {
                console.log('Wake up after ' + time + 's!');
                self.next();
            }, time * 1000);
        }
    })(time);
    this.tasks.push(fn);
    return this;
}

_LazyMan.prototype.sleepFirst = function(time) {
    var self = this;
    var fn = (function(time) {
        return function() {
            setTimeout(function() {
                console.log('Wake up after ' + time + 's!');
                self.next();
            }, time * 1000);
        }
    })(time);
    this.tasks.unshift(fn);
    return this;
}

var LazyMan = function(name) {
    return new _LazyMan(name);
}

LazyMan('liu').sleepFirst(1).eat('aaaa')
