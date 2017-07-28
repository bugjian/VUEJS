/**
 * Created by jian on 2017/7/27.
 */
    Vue.component('my-component',{
        template:'<button  v-on:click="addNum()">' +
        '<slot :text="name"></slot>'+
        '{{count}} </button>',
        data: function() {
            return {
                count:0,
                name:'peng'
            }
        },
        methods:{
            addNum: function() {
                this.count++;
                this.$emit('intion');
            }
        }
    });
    var vm = new Vue({
        el:'#app',
        data:{
            total:1
        },
        methods:{
            inter: function() {
                this.total++;
            }
        }

    });