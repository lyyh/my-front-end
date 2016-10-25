##javascript 数组的迭代方法
###forEach map every some filter reduce的区别
#### forEach 假设我们有一个数组，每个元素是一个人。你面前站了一排人。
foreach 就是你按顺序一个一个跟他们做点什么，具体做什么，让数组的每一项做一件事。随便:  
```
people.forEach(function (dude) {
  dude.pickUpSoap();
});
```
#### map
让数组通过某种计算返回一个新的数组
map 就是你手里拿一个盒子（一个新的数组），一个一个叫他们把钱包扔进去。结束的时候你获得了一个新的数组，里面是大家的钱包，钱包的顺序和人的顺序一一对应。  
```
var wallets = people.map(function (dude) {
  return dude.wallet;
});
```
#### reduce
让数组中的前后项做某种计算，并累计最终的值
reduce 就是你拿着钱包，一个一个数过去看里面有多少钱啊？每检查一个，你就和前面的总和加一起来。这样结束的时候你就知道大家总共有多少钱了。  
```
var totalMoney = wallets.reduce(function (countedMoney, wallet) {
  return countedMoney + wallet.money;
}, 0);
```
#### filter
筛选出数组中符合条件的项，组成新的数组  
你一个个钱包数过去的时候，里面钱少于 100 块的不要（留在原来的盒子里），多于 100 块的丢到一个新的盒子里。这样结束的时候你又有了一个新的数组，里面是所有钱多于 100 块的钱包：  
```
var fatWallets = wallets.filter(function (wallet) {
  return wallet.money > 100;
});
```
#### every
检测数组中的每一项是否符合条件
#### some
检测数组中的某些项是否符合条件
#### 补充
filter map 都是immutable methods，返回一个新的数组而不影响原来的数组

