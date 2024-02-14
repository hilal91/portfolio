let student = {
    name: 'fahad kamran',
    roll: 'JS-124387',
    courseName: 'JS-CRASH-COURSE',
    age: 24,
    qualification: 'graduate',
    mentor: 'Ishaq Bhojani',
    cnic: 'xxxxx-xxxxxxx-x'
}

// QUESTION # 01
// **********
function myClosures(num1) {
    return function (num2) {
        return num1 + num2;
    }
}
let sum = myClosures(5);
console.log('Q # 1 ===>', sum(6));
// **********

// QUESTION # 02
// **********
let dummyArr = ['faizan', 'shayan', 'anas', 'zubair', 'fahad', 'hilal', 'junai', 'asad', 'ishaq', 'bhojani'];
let count = 0;
function findFunction(str) {
    //  debugger
    if (count < dummyArr.length) {
        if (dummyArr[count] == str) {
            return true;
        }
        else {
            count ++
            return findFunction(str)
        }
    }
    else {
        return false;
    }
}
console.log('Q # 2',findFunction('bhojani'));
// **********

// QUESTION # 03
// **********
const addPara = (str) => {
    // create new element <p></p>
    let newPara = document.createElement('p');
    let newParaText = document.createTextNode(str);
    newPara.appendChild(newParaText);

    document.body.appendChild(newPara)
}
// pass argument paragraph text
addPara('Add this paragraph from DOM manipulation');
// **********

// QUESTION # 04
// **********
const unorderList = (str) => {
    let myUl = document.getElementById('unorderList');  // get unordered-list
    let myLi = document.createElement('li');   // create li
    let liText = document.createTextNode(str); // create textNode
    myLi.appendChild(liText);                  // asign textNode on li
    myUl.appendChild(myLi)
}
unorderList('Lorem ipsum, dolor sit amet consectetur adipisicing elit.');  // call function and pass string argument
// **********

// QUESTION # 05
// **********
const changeBgColor = (id, color) => {
    document.getElementById(id).style.backgroundColor = color;
};
changeBgColor('body', 'green');
// **********

// QUESTION # 06
// **********
const setLocalStorage = (key, obj) => {
    localStorage.setItem(key, JSON.stringify(obj));
}
setLocalStorage('student', student);
// **********

// QUESTION # 07
// **********
const getLocalStorage = (key) => {
    console.log('Q # 7 ==>', localStorage.getItem(key));
}
getLocalStorage('student');
// **********

// QUESTION # 08
// **********
const setLocalData = (data) => { // create function
    Object.keys(data).forEach(function (key) {
        localStorage.setItem(key, data[key]);
    });
    let newObj = new Object(); // create new object
    Object.keys(data).forEach(function (key) {
        newObj[key] = localStorage.getItem(key)
    });
    return newObj;  // return object
}
let getNewObject = setLocalData(student); // call function and pass object as an argument
console.log('Q # 8 ==>', getNewObject);
// **********