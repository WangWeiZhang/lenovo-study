//实例化vue对象
new Vue({
	el:"#vue-app", //此时告诉我们要干嘛 都在那个标记下做
	data:{
		name: "米斯特王",
		job : "web开发",
		website:"http://echarts.baidu.com",
		aHref:"<a href='http://www.baidu.com'>百度一下</a>"
	},
	methods:{
		adder :function(a,b){
			return " " +a+ "+" +b+ " = " + (a+b);
		},
		
		remove : function(){
			console.log("删除方法调用成功")
		}
	}
})


/*
 el:element 元素： 需要控制获取的元素， 一定是html中的 根容器元素。（会在vue中操作dom）
 data: 用于数据的存储。
 
 methods: 是一个对象，用于创建函数 。对象需要时key 和 value 的形式。可以添加多个参数
 	注意：
 		1、在我们的方法中可以进行传递参数，在vue-app域中，直接使用{{adder(3,4)}}既可以调用
 		2、在vue中方法中，获取data中的属性。使用 “ this ” ， eg ： this.name //米斯特王
 data-binding: 给html属性绑定vue中的值
 * */