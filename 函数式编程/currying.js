var curring = function (fn) {
  var args = Array.prototype.slice.call(arguments,1);
  return function(){
    var newArgs = args.concat(Array.prototype.slice.call(arguments));
    return fn.apply(null, newArgs);
  }
}

var getWife = curring(function(){
  var allWife = Array.prototype.slice.call(arguments);
  console.log(allWife.join(','));
},'大老婆')

getWife('大老婆','小老婆','俏老婆');
getWife('送上门的老婆');

var addEvent = (function(){
  if(window.addEventListener){
    return function(el,type,fn,capture){
      el.addEventListener(type,function(){
        fn.call(el,e)
      },(capture))
    }
  }else{
    return function(el,type.fn,capture){
      el.attachEvent('on' + type,function(){
        fn.call(el,e);
      })
    }
  }
})()
