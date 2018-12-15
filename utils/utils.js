module.exports.add = (a,b) => a+b ;
module.exports.mul = (x) => x*x ;

module.exports.asyncAdd = (a, b, callback) => {
  setTimeout(() =>
             {
      callback(a + b);
  },1000);  
};
//module.exports.setName (user, fullname) =>
//{
//    var names = fullname.split(" ");
//    user.firstname = names[0];
//    user.lastname = names[1];
//    retuen user;
//} 