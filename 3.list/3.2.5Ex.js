

function List(){
    this.listSize =0; //리스트의 요소 수
    this.pos = 0; //프로퍼티. 현재 위치
    this.dataStore = [];//리스트 요소를 저장할 빈 배열 초기화
    this.clear = clear; //리스트의 모든 요소 삭제.
    this.find= find; //
    this.toString = toString; // 리스트를 문자열로 표현해 반환
    this.insert = insert; //기존 요소 위로 새 요소를 추가.
    this.append = append; //새 요소를 리스트의 끝에 추가.
    this.remove=remove; //리스트의 요소 삭제.
    this.front = front; //현재 위치를 리스트 첫번째 요소로 설정.
    this.end=end; //현재 위치를 리스트 마지막 요소로 설정
    this.prev = prev; //현재 위치를 한 요소 뒤로 이동.
    this.next = next;//현재 위치를 한 요소 앞으로 이동.
    this.length = length; //리스트의 요소 수 반환.
    this.currPos = currPos; //리스트의 현재 위치 반환.
    this.moveTo = moveTo; //현재 위치를 지정한 위치로 이동.
    this.getElement = getElement; //현재 위치의 요소를 반환/
    this.length = length;
    this.contains = contains;
}  
//Append: 리스트에 요소를 추가.
//요소를 추가 한 다음 listSize의 크기를 1 증가시킨다.
    function append(element){
        this.dataStore[this.listSize++] = element;
    }
//find함수는 루프로 dataStore를 반복하면서 원하는 요소를 검색한다
//검색한 후 요소의 위치를 반환한다. 
//찾지 못한 경우 -1을 반환함.
    function find(element){
        for(var i =0;i<this.dataStore.length;++i){
        if(this.dataStore[i]==element){
            return i;
            }
        }
        return -1;
    }
  //remove()함수는 삭제의 성공할경우 boolean값을 줌. 
    function remove(element){
        var foundAt = this.find(element);
            if(foundAt>-1){
            this.dataStore.splice(foundAt,1);
            --this.listSize;//하나를 삭제했으니 리스트의 크기도 하나 줄여줌.
            return true;
        }
        return false;
    }
  
  //Length:리스트의 요소 개수
    function length(){
        return this.listSize;
    }
  
  //toString: 리스트의 요소 확인
  //toString 함수는 문자열이 아닌 배열객체를 반환한다. 
  //하지만 배열을 반환하므로 현재 요소 상태를 알 수 있다.
    function toString(){
        return this.dataStore;
    }
    function insert(element,after){
        var insertPos = this.find(after);
        if(insertPos>-1){
            this.dataStor.splice(insertPos+1,0,element);
            ++this.listSize;
            return false;
        }
    }
    function clear(){
        delete this.dataStore;
        this.dataStore.length = 0;
        this.listSize= this.pos=0;
    }
    function contains(element){
        for(var i=0;i<this.dataStore.length;i++){
            if(this.dataStore[i] == element){
                return true;
            }
        }
    }
    function front(){
        this.pos=0;
    }
    function end(){
        this.pos = this.listSize-1;
    }
    function prev(){
        if(this.pos>0){
            --this.pos;
        }
    }

    function next(){
        if(this.pos<this.listSize-1){
            ++this.pos;
        }
    }

    function currPos(){
        return this.pos;
    }

    function moveTo(position){
        this.pos = position;
    }

    function getElement(){
        return this.dataStore[this.pos];
    }

    var names = new List()
    names.append("yjs");
    names.append("bkk");
    names.append("whybs");
    console.log(names);