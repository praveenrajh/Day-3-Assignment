//Day 3 Assignment 1
//JSON iterate over all for loops (for, for in, for of, forEach)

var a=[ { "name":"Sirius",
          "Age":"23",
          "Gender":"Male"   },
        { "name":"Luna",
          "Age":"22",
          "Gender":"Female" },
        { "name":"CC1",
          "Age":"1",
          "Gender":"Female" },
        { "name":"CC2",
          "Age":"1",
          "Gender":"Female" },
        { "name":"CC3",
          "Age":"1",
          "Gender":"Male"   }
      ];
    
var b="";
    
// Itteration using for.
    for (let i=0; i<a.length; i++){
      console.log(a[i].name);
    }
// Itteration using for in.    
    for (let i in a){
      console.log(a[i].Age);
    }
// Itteration using for of.   
    for(let i of a){
      console.log(i.Gender);
    }
// Ittereation using forEach.   
    a.forEach(foo);
    function foo(item,index){
      b= b+index+":"+item;
    } console.log(b);       //note: forEach method is applicable only in array.
    