# 面试集合

- ## toString 引发的事情

	> `Function.prototype.toString()` 方法返回一个[表示当前函数源代码的字符串]。

	> 函数原型对象重写 `toString()`方法; 语法： `function.toString()`; 返回值：表示函数源代码的一个字符串。

	```js
	// e.g.
	function sum(a, b) {
		return a + b;
	}
	console.log(sum.toString()); //  "function sum(a, b) { return a + b; }"
	```
	```js
	/* 面试题01：实现 add(1)(2)(3)(4) = 10 */
	function add(a) {
		function sum(b){
			a = a + b;
			return sum;
		}
		sum.toString = function (){
			return a;
		}
		return sum;
	}
	console.log(add); // function add(a) { ... }
	console.log(add(1)(2)(3)(4)); // 10
	```
	```js
	/* 面试题02：实现 add(1, 2, 3, 4) = 10 */
	function add(...args) {
		return args.reduce((pre, cur) => {
			return pre + cur;
		});
	}
	console.log(add(1, 2, 3, 4)); // 10
	```
	```js
	/* 面试题03：实现 add(1, 2, 3)(4) = 10 */
	function add(...args) {
		let a = args.reduce((pre, cur) => {
			return pre + cur;
		})
		function sum(b){
			a = a + b;
			return sum;
		}
		sum.toString = function (){
			return a;
		}
		return sum;
	}
	console.log(add(1, 2, 3)(4)); // 10
	console.log(add(1, 2, 3)(4)(5)); // 15
	```

