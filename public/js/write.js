/*
 * 博客 markdown 编写区域
 * @Author slashhuang
 */


require('./write.scss');
const SimpleMDE = require('simplemde');
const showdown  = require('showdown');

let app = {
	init:function(){
		setTimeout(()=>{
			$('#simplemde').removeClass('invisible')
		},0);
		this.SimpleMDE = new SimpleMDE();
		this.converter =  new showdown.Converter();
		this.events()
	},
	makeHtml:function(markdown){
		return this.converter.makeHtml(markdown)
	},
	events:function(){
		$('.submit-btn').click(()=>{
			let markdown = this.SimpleMDE.value();
			let html = this.makeHtml(markdown);
			$('#preview').html(html)
		});
	}
};
app.init()



