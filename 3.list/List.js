
    var List = function(){
        this._type='List'
        this.listSize=0;
        this.pos = 0;
    }

    Object.assign(List.prototype,{
        constructor: List,

        clear:function(){
            throw new Error("List : not implemented");
        },
        find: function(element){
            throw new Error("List : not implemented");
        },
        toString:function(){
            return JSON.stringify(this);
        },
        insert: function(element, after) {
            throw new Error('List : not implements');
        },
        append: function(element){
            throw new Error("List: not implements");
        },
        remove: function(element){
            throw new Error('List: not implements');
        },
        front: function(){
            this.pos=0;
        },
        end:function(){
            this.pos=this.listSize=-1;
        },
        prev: function(){
            if(this.pos>0) --this.pos
        },
        next: function(){
            if(this.pos<this.listSize -1 ) ++this.pos;
        },
        length: function(){
            return this.listSize;
        },
        currPos: function(){
            return pos;
        },
        moveTo:function(pos){
            this.pos = pos;
        },
        getElement: function(){
            throw new Error('List: not implements')
        },
        contains: function(element){
            return (this.find(element) != -1);
        },

        iterator:function(){
            var list = this;
            var pos = 0;
            list.front();
            return{
                hasNext: function(){
                    return (pos<=list.length()-1);
                },
                next:function(){
                    if (!this.hasNext()) throw new Error('iterator end.');
                    list.moveTo(pos);
                    var elem = list.getElement();
                    pos++
                    return elem;
                }
            };
        }

    });

    //export var List = List;
    module.exports = List;
