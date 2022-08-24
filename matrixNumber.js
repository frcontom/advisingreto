const value = [[1,2],[2,4]];
function dimension (array, rec) {
    if (!Array.isArray(array)) throw new Exception('not an array');

    var res = rec;
    for(var i = 0; i < array.length; ++i) {
        if (Array.isArray(array[i])) {
            var subdimension  = dimension (array[i], rec + 1);
            if (subdimension  > res) {
                res = subdimension ;
            }
        }
    }
    return res;
}




   function straight(){

    }

   function compute(arr3){
        return arr3.flat(2).reduce((p, c) => p+c)
    }

   console.log(`MyMatrix.new(a).dimension -> ` +dimension (value,1));
   console.log (`MyMatrix.new(a).straight -> `);
   console.log (`MyMatrix.new(a).compute  -> ` +compute(value));