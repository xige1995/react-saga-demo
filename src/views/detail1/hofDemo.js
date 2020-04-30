
// 例子1：
function add(x, y, f) {
  return f(x) + f(y);
}
//当调用add(-5, 6, Math.abs)时，参数x，y和f分别接收-5，6和函数Math.abs，根据函数定义，可以推导计算过程为：
//x = -5;
//y = 6;
//f = Math.abs;
//f(x) + f(y) ==> Math.abs(-5) + Math.abs(6) ==> 11;
//return 11;

//用代码验证一下：
add(-5, 6, Math.abs); // 11


// 例子2：
function pow(x) {
  return x * x;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// map即为高阶函数，类似还有filter 等
arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]