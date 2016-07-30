function addPromise (a,b) {
  return new Promise (function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('not a number');
    }
  });
}

addPromise(5,3).then(
  function(sum){
    console.log('a + b = ', sum);
  },
  function(errmsg){
    console.log(errmsg);
  }
);
