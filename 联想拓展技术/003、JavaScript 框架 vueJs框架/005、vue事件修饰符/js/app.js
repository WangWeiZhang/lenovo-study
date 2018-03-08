//实例化vue对象
new Vue({
	el:"#vue-app", //此时告诉我们要干嘛 都在那个标记下做
	data:{
		age:30,
		x:0,
		y:0
	},
	methods:{
		add: function(age){
			this.age += age;
		},
		subtract: function(age){
			this.age -= age;
		},
		updateXY: function(event){
			this.x = event.clientX;
			this.y = event.clientY;
		}
	}
})
