cc.Class({
    extends: cc.Component,

    properties: {
       IsHideAni : false,
       IsShowAni : false,

       hero01Btn :{
       		default : null,
       		type : cc.Node,
       },
       
       hero02Btn :{
       		default : null,
       		type : cc.Node,
       },

       playerCtrl :{
       		default : null,
       		type : cc.Node,
       }
    },

    onLoad: function () {
        this.onRegisteredEvent();
    },

    onRegisteredEvent: function () {
        this.hero01Btn.on(cc.Node.EventType.TOUCH_END, this.onHero01Click.bind(this));
        this.hero02Btn.on(cc.Node.EventType.TOUCH_END, this.onHero02Click.bind(this));
    },

    onHero01Click: function (event) {
    	var pc = this.playerCtrl.getComponent("PlayerCtrl")
    	cc.log("pc = " + pc)
    	pc.changeHero("Hero01")
    },

    onHero02Click: function (event) {
    	this.playerCtrl.getComponent("PlayerCtrl").changeHero("Hero02")
    },

});
