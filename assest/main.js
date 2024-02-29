//Nối 2 mảng
function b1(){
    let a = ['a', 'b', 'c']
    let b = [1,2,3]
    let c = b+','+a;
    console.log(c)
}
b1()

function Check(x){
    if(x){
        console.log("Yes")
    }else console.log("No")
}
  
//Kiểm tra mảng full chẵn không
function b2(){
    let data1= [1,2,3,4,5]
    let data2=[2,4,6]
    console.log(data1.every(Checkeven))
    console.log(data2.every(Checkeven))
    function Checkeven(x){
      return x%2===0;
    }
}
b2()
    
//Kiểm tra mảng có tồn tại số chẵn ko
function b3() {
    let data1 = [1, 2, 3, 4, 5]
    let data2 = [1, 1, 3, 1, 5]
       
      
    Check(data1.some(Checkeven))
      
    Check(data2.some(Checkeven))
      
    function Checkeven(x) {
        return x % 2 === 0;
    }
}
b3()

//Xuất các giá trị dương => filter
function b4() {
    let datas = [1, -2, 3, 4, -5]
     
    console.log(datas.filter(Checkpositive))
    
    function Checkpositive(x) {
      return x > 0;
    }
}
b4()

//tìm giá trị dương đầu tiên => find
function b5() {
    let data1 = [-1, -2, 3, 4, -5]
    let data2 = [-1, 2, 3, 4, -5]
    let data3 = [-1,-2]
     
    Outputb5(data1)
    Outputb5(data2)
    Outputb5(data3)
    
    function Outputb5(x){
        if(true)
          console.log(x.findIndex(Checkpositive) +" "+x.find(Checkpositive))
       else console.log("No result")
    }
    function Checkpositive(x) {
      return x > 0;
    }
}
b5()

//In từng giá trị chia hết 5 => forEach()
function b6() {
    let data1 = [2, 5, 30, 26]
    data1.forEach(Divisible5);
    function Divisible5(x) {
      if(x%5===0){
          console.log(x)
      }
    }
}
b6()

//tìm index của giá trị 2 
function b7() {
    let data1 = [-1, 2, 3, 4, 2, 6]
    let data2 = [0,6]
    let data3 = [0, 2, 5]
    outputb7(data1)
    outputb7(data2)
    outputb7(data3)
    
    function outputb7(data) {
    let x = data.indexOf(2)
    let x1 = data.lastIndexOf(2)
    if(x === -1) console.log("No result")
    else if(x===x1) console.log(x+"")
    else console.log(x + " " + x1)
    }
}
b7()

//Join()
function b8() {
    let data1 = ["A", "B", "C"]
    let data2 = [1, 2, 3]
    
    let join1 = data1.join(", ")
    let join2 = data2.join(", ") 
    
    console.log(join1)
    console.log(join2)
}
b8()

//Map và Math.ads
function b9() {
    let data = [2, -1, -8]
    let newdata = data.map(Math.abs)
    console.log(newdata)
}
b9()
  


  

