function *foo(){
    yield 'a';
    yield 'b';
    yield 'c';
}
for(let i of foo){
    console.log(i)
}