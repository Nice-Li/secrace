(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{302:function(t,e,n){"use strict";n.r(e);n(61);var r=n(18),o={data:function(){return{tips:"欢迎报名比赛，一经报名，无法更改，必须参赛！"}},props:["changesinger"],methods:{joinrace:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!parseInt(window.localStorage.getItem("isjoin"))){e.next=4;break}return t.tips="您已报名，不可重复报名...",e.abrupt("return");case 4:return n=window.localStorage.getItem("myid"),r=window.localStorage.getItem("usrname"),data={myid:n,usrname:r},"http://wx.zxyow.com/join",e.next=10,t.$axios.$get("http://wx.zxyow.com/join",{params:data});case 10:e.sent?(t.changesinger({id:n,singername:r}),window.localStorage.setItem("isjoin",1)):t.tips="您已报名，不可重复报名...";case 12:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=window.localStorage.getItem("myid");parseInt(window.localStorage.getItem("isjoin"))&&this.$router.push("/singer/"+t)}},c=n(43),component=Object(c.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",[this._v(this._s(this.tips))]),this._v(" "),e("b-button",{attrs:{block:"",variant:"secondary"},on:{click:this.joinrace}},[this._v("报名参赛")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);