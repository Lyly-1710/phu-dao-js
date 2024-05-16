//Bai 1
let array = document.getElementById('input');
let result = document.querySelector(".result");
function checkAscending() {
    const array1 = array.value.split(",");
    for (let i = 1; i < array1.length; i++) {
        if (array1[i] - array1[i-1] <= 0) {
            console.log("false" + array1[i] + "," + array1[i-1])
            return false;
        }
    }
    return true;
}
function bai1() {
    if (checkAscending()) {
        result.innerText = true;
    } else {
        result.innerText = false;   
    }
}

// bai 2
function Max(array)
{
    let max = array[0];
    for(i of array)
        {
            if(i > max)
                {
                    max = i;
                }    
        }
    return max;
}
let array2 = document.getElementById('input2');
let result2 = document.querySelector(".result2");
function bai2()
{
    let arr = array2.value.split(',');
    let length = Max(arr);
    let countArr = [];
    countArr.length = ++length;
    countArr.fill(0);
    for(let i of arr)
        {
            countArr[i] += 1;
        }
    if (Max(countArr) <= 1)
        {
            result2.innerText = "Khong co so nao lap lai"
        }
    else
        {
            result2.innerText = countArr.indexOf(Max(countArr)).toString();
        }

}

//bai3
let array3 = document.getElementById('input3');
let result3 = document.querySelector(".result3");
function bai3()
{
    let arr = array3.value.split(',');
    for (let i = 0; i < arr.length; i++)
        {
            for (let j = arr.length; j > i; j--)
                {
                    if (arr[j] === arr[i])
                        {
                            arr.splice(j,1);
                            console.log(arr);   
                        }
                }
        }
    result3.innerText = "Result " + arr;
}

//Bai 4 + 5
function timMaxLength(array)
{
    let arrResult = array[0];
    for(var i = 1; i < array.length; i++)
        {
            if (array[i].length > array[i-1].length)
                {
                    arrResult = array[i];
                }
            }
    return arrResult;
}
//bai 4
let resultb4 = document.querySelector(".result4");
let array4 = document.querySelector('#input4')
let arrResult ;
function bai4(){
    let arr =array4.value.split(',');
    resultb4.innerText = timMaxLength(arr).toString();
}

//bai 5
let array5 = document.querySelector('#input5')
let resultb5 = document.querySelector(".result5");
function bai5()
{
    let arr5 = array5.value.split(',');
    const Index = arr5.indexOf(timMaxLength(arr5));
    console.log(Index);
    arr5.splice(Index, 1)
    console.log(arr5)
    resultb5.innerText = timMaxLength(arr5).toString();
}

//bai6
let array6 = document.querySelector('#input6')
let resultb6 = document.querySelector(".result6");
function bai6()
{
    let arr6 = array6.value.split(',');
    console.log(arr6);
    let result = arr6.reduce((acc, curr) =>
        {
            if(curr%2 === 0)
                {
                    return acc + parseInt(curr);
                }
            else
            {
                return acc;
            }
        },0)
    resultb6.innerText = "Result = " + result;
}

//bai 7
let array7 = document.querySelector('#input7')
let resultb7 = document.querySelector(".result7");
function bai7()
{
    let arr7 = array7.value.split('');
    for (let i = 0; i < arr7.length; i++)
        {
            if(arr7[i] >= 'a' && arr7[i] <= 'z' || arr7[i] >= 'A' && arr7[i] <= 'Z')
                {
                    let temp = arr7[i].charCodeAt() + 1;
                    arr7[i] = String.fromCharCode(temp);
                }
            else
            {
                resultb7.innerText = "Khong hop le";
                return false;
            }
        }
    resultb7.innerText = arr7;
}

//bai 8
let array8 = document.querySelector('#input8')
let resultb8 = document.querySelector(".result8");

function bai8()
{
    let arr8 = array8.value.split('');
    if(arr8.length < 3)
        {
            resultb8.innerText = "Vui long nhap chuoi co do dai lon hon hoac bang 3"    
        }
    else
        {
            if(arr8.length % 2 !== 0)
                {
                    let midIndex = parseInt(arr8.length/2);
                    let result = arr8.splice(midIndex - 1, 3);
                    resultb8.innerText = result;
                }
            else
                {
                    resultb8.innerText = "Vui long nhap chuoi co do dai le"
                }
        }  
}

//bai 11
let array111 = document.querySelector('#input111')
let array112 = document.querySelector('#input112')
let resultb11 = document.querySelector(".result8");
function bai11()
{
    arr111 = array111.value.split();
    arr112 = array112.value.split();
    let resutl ={};
    for(i in arr111)
        {

        }
}



