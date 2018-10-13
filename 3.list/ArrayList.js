
const List = require('./List');
var ArrayList = function(){
    List.call(this);
    this._type = 'ArrayList';
    //타입을 ArrayList로 정의
    this._dataStore = [];
}

ArrayList.prototype = Object.assign(Object.create(List.prototype),{

    constructor: ArrayList,

    clear: function(){
        this.listSize = this.pos = 0;
        this._dataStore.length = 0; // why hack?
        //아.. 배열을 0으로 만들어버리면 기존 배열안에 있는 내용을 지워버리기 때문인가.
    },
    find: function(element){
        for(var i = 0; i<this._dataStore.length; i++){
            if(this._dataStore[i] == element){
                return i;
            }
        }
        return -1;
    },

    toString: function(){
        return JSON.stringify(this._dataStore);
    },
    insert: function(element,after){
        var insertPos = this.find(after);
        if(insertPos>-1){
            this._dataStore.splice(insertPos+1,0,element);
        }
    },

    append: function(element){
        this._dataStore[this.listSize++] = element;
    },

    remove: function(element){
        var foundAt = this.find(element);
        
        if(foundAt > -1){
            this._dataStore.splice(foundAt,1);
            --this.listSize;
            return true;
        }
    },

    getElement: function(){
        return this._dataStore[this.pos];
    }

});

module.exports = ArrayList;
//export { ArrayList }; es6용법이 틀린건가
