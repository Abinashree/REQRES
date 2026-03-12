function step1(callback){
    setTimeout(() => {
        console.log("6000");
    }, 6000);
}
function step2(callback){
    setTimeout(() => {
        console.log("3000");
        
    }, 3000);
}
function step3(callback){
    setTimeout(() => {
        console.log("2000");
    }, 2000);
}
function step4(callback){
    setTimeout(() => {
        console.log("4000")
    }, 4000);
}
step1(
    
    ()=>step2()
)