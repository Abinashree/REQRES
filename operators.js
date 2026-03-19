// // // Arithmetic Operators

// // let Tamil=58;
// // let English=62;
// // let Maths=100;
// // let Science=83;
// // let Social= 78;

// // console.log("Total Marks",Tamil+English+Maths+Science+Social,"/500");

// // console.log("Percentage",(Tamil+English+Maths+Science+Social )/ 500 * 100);

// // // eg 2
// // let item1 =150;
// // let item2 =230;
// // let item3 = 235;

// // let q1 = 3;
// // let q2 = 2;
// // let q3 = 4;

// // let T1= item1 * q1;
// // let T2 = item2 * q2;
// // let T3 = item3 * q3;

// // let Total = T1 + T2 + T3;

// // let Discount = Total * 10/100;
// // let afterdiscount = Total - Discount;

// // let GST = afterdiscount * 18/100;

// // console.log("Amount :", Total);
// // console.log("Discount Amount :", Discount);
// // console.log("Subtotal :", afterdiscount);
// // console.log("GST :", GST);
// // console.log("Final Amount :", afterdiscount + GST);

// // // Assignment operator

// // let ref = afterdiscount+GST;
// // ref -= 120;
// // console.log("Refferal Discount", ref);

// // ref /= 120;
// // console.log("Refferal Discount", ref);

// // ref *= 120;
// // console.log("Refferal Discount", ref);

// // ref = 120;
// // console.log("Refferal Discount", ref);

// // // Comparision operator

// // let mark=78;
// // let atten=78;
// // let age=23;

// // console.log(`Eligibility for Placement 
// //     ${mark>=60} 
// //     ${atten>=80}
// //     ${age==20}`);

// // // Logical operator

// // // let username="Shree";
// // // let password=12345;
// // // let DOB = day/month/year;
// // // console.log("Success", User && password ||DOB);

// // // Increment , Decrement 

// // let a=13;
// // a++;
// // console.log(a); // 14
// // // a++
// // console.log(a++); // 15
// // let b=++a
// // console.log(b);    // doubt y it shows 16

// // let num=9;
// // let ans=9%2;
// // console.log(ans==0 ? "even" : "odd");   //reminder 




// // // Functions

// // function reg(){
// //     let Roll = 1;  // y it shows error when we concat 00 before 1
// //     let Total=98;
// //     console.log("Student Roll No :", Roll , "Total Marks", Total); 

// // }
// // reg()

// // function Cars(Brand, Model){
// //     console.log("Car Brand :",Brand,"Model :",Model);
    
// // }
// // Cars("Hyundai","I20");
// // Cars("RR","Suv");
// // Cars("Tesla","EV");

// // function math(){        
// //     let min=20;
// //     return min;

// // }
// // // console.log(math());
// // // function math(){
// // //     let x=30;}
// // //     console.log(x);
    

// // // math()

// // // default parameter

// // function def(name="Good Boy"){
// //     console.log(`he is ${name}`);
    
// // }
// // def()

// // // rest parameter

// // function fruit(...fruits){
// //     console.log("this is ", fruits);
    

// // }
// // fruit("orange","apple","banana")

// // // function expression

// // const greet=function(){
// //     console.log("javascript");
// // }
// // greet()

// // //IIFE ---> immidiate invoked function expression

// // function no(){
// //     console.log("I'm a robot")
// // }
// // no();



// // // let num=9;
// // // let ans=num%2;
// // // console.log(ans==0 ? "Even":"Odd");

// // // String




// // let text = "Hello planet earth, you are a great planet.";
// // let result = text.lastIndexOf("Planet");
// // console.log(result);



// // const myArray = text.split(" ", 3);

// // let text = "Hello world!";
// // let result = text.slice(0, 5);
// // console.log(result);

// // let a =10;
// // let b =20;
// // console.log("Add=", a+b);
// // console.log("Sub =", a-b);
// // console.log("Mult =", a*b);
// // console.log("Div =", a/b);


// // let std= "Shree";
// // let m=69;
// // if(m>=35 && m<=50){
// //     console.log("Shree Passed");
    
// // }
// // else if(m>50 && m<=70){
// //     console.log("Grade A");
    
// // }
// // else if(m>70){
// //     console.log("Grade O");
    
// // }
// // else{
// //     console.log("Shree Failed");
    
// // }


// // function stud(){
// //     let name = "Shree";
// //     let reg = 10001;
// //     console.log(`Student Name: ${name} 
// // Reg Number: ${reg}`);
// //     }
// // stud()

// // function cars(car, model){
// //     console.log(`Car: ${car} 
// //         MOdel: ${model}`);
    
// // }
// // cars("RR", "SUV");
// // cars("Tesla", "EV");

// // let i=10;
// // for (i=0;i<=10;i++){
// // console.log(i);

// // }

// // console.log((60>70)? true : false);

// // let m =10;
// // let a ="";

// // for(i=0;i<=1;i++){
// //   a -=i;

   
// // }console.log(a);
   
// let emp = "shree"
// switch (emp) {
//     case emp:"shree";
//         console.log("Valid -1");
        
//         break;
//          case emp:"manoj";
//         console.log("Valid 0");
        
//         break; 
//         case value:"dhamu";
//         console.log("Valid");
        
//         break;

//     default: console.log("Invalid");
    
//         break;
// }


// let name="Vignesh Abinashree";
// let res ="";
// for(i=name.length-1;i>=0;i--){
//     res += name[i];
// }console.log(res);

let str="electricity";
let output = {};
for(const count of str){
    if(output[count]){
        output[count]++;
    }else{
        output[count]=1;
    }
    
    }

console.log(output);

