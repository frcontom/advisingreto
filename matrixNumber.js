const value = [[[1, 2, 3], [2, 3, 4]], [[5, 6, 7], [5, 4, 3]], [[3,5, 6], [4, 8, 3]]];
function dimension (array) {
    if (!Array.isArray(array)) throw new Exception('not an array');
    rec = 1;
    var res = rec;
    for(var i = 0; i < array.length; ++i) {
        if (Array.isArray(array[i])) {
            var subdimension  = dimension(array[i], rec + 1);

            if (subdimension  > res) {
                res = subdimension ;
            }
        }
    }
     return res;
}


   function straight(value){
       if (!Array.isArray(value)) throw new Exception('not an array');
       rec = 1;
       let add = [];
       for(var i = 0;i < value.length;i++){
           if(Array.isArray(value[i])){
               straight (value[i], rec+1);
               add.push(value[i].length)
           }
       }
       return add.every( (val, i, arr) => val === arr[0] )
    }

   function compute(arr3){
        return arr3.flat(2).reduce((p, c) => p+c)
    }

   console.log(`MyMatrix.new(a).dimension -> ` +dimension (value,1));
   console.log (`MyMatrix.new(a).straight -> ` +straight (value,1));
   console.log (`MyMatrix.new(a).compute  -> ` +compute(value));