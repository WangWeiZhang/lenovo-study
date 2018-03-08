//实例化vue对象
new Vue({
	el:"#vue-app", //此时告诉我们要干嘛 都在那个标记下做
	data:{
		name: "米斯特王"
	}
})


/*
 el:element 元素： 需要控制获取的元素， 一定是html中的 根容器元素。（会在vue中操作dom）
 data: 用于数据的存储。
 
 index.html 中的花括号{{}} 通过虚拟dom 插入到真实dom
 * */