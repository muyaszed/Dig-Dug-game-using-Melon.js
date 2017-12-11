const myRenderable = me.Renderable.extend({
	init : function() {
		this._super(me.Renderable, "init", [100, 100, 50, 50]);
		this.z = 100;
	},

	draw : function(renderer) {
		renderer.setColor('#000');
		renderer.fillRect(this.pos.x, this.pos.y, this.width, this.height);
	},

	update : function() {
		return false;
	}


});