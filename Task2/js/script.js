const empName= document.querySelector('#name');
const empNum = document.querySelector('#age');
const empDept = document.querySelector('#dept');
const submit = document.querySelector('#Save');
const toggle = document.querySelector('#toggle');
const showData = document.querySelector('#showData');
const dataList = document.getElementById('dataList');
var selectElement = null;
let dataForm = [empName.value,empNum.value,empDept.value]
let data = []
//local storage
const getData = () =>{
    dataForm = localStorage.getItem('dataForm') || '[]'
    return JSON.parse(dataForm)
}

const setData = (dataForm) =>{
localStorage.setItem('dataForm', JSON.stringify(dataForm));
}

submit.addEventListener('click', function(e) {
    e.preventDefault();
 
    //check validation
    let x = empName.value;
    let y = empNum.value;
    let z = empDept.value;
    if (x == "" || y =="" || z == "") {
      alert("Must fill All Form");
    }else{
    var formData = saveData();
    if(selectElement == null){
        addData(formData);
    }
    else{
        updateForm(formData);
    }
        resetForm();
    }
})

// toggle form
toggle.addEventListener('click', function() {
    showData.classList.toggle('none');
    toggle.innerText = 'Show Form';
    if(showData.classList.contains('none')){
        toggle.innerText = 'Show Form';
    }
    else{
        toggle.innerText = 'Hide Form';
    }
});

function saveData() {
    var formData = {};
    formData["name"] = empName.value;
    formData["age"] = empNum.value;
    formData["dept"] = empDept.value;

    return formData;
}

function resetForm() {
    empName.value = '';
    empNum.value='';
    empDept.value='';
    submit.innerText='Save';

}

function addData(data) {
    var table = dataList.getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cellName = newRow.insertCell(0);
    cellName.innerHTML = data.name;
    cellAge = newRow.insertCell(1);
    cellAge.innerHTML = data.age;
    cellDept = newRow.insertCell(2);
    cellDept.innerHTML = data.dept;
    cellBtn = newRow.insertCell(3);
    cellBtn.innerHTML = `<button class='btn btn-primary' onClick="editForm(this)">Edit</button>  <button class='btn btn-danger' onClick="deleteForm(this)">Delete</button>`
    dataForm = getData()
    dataForm.push(data);
    setData(dataForm)
}

function editForm(elem){
    selectElement = elem.parentElement.parentElement;
    empName.value = selectElement.cells[0].innerHTML;
    empNum.value = selectElement.cells[1].innerHTML;
    empDept.value = selectElement.cells[2].innerHTML;
    submit.innerText='Update';

}

function updateForm(formData) {
    selectElement.cells[0].innerHTML = formData.name;
    selectElement.cells[1].innerHTML = formData.age;
    selectElement.cells[2].innerHTML = formData.dept;
    submit.innerText='Save';

}

function deleteForm(elem) {
    deleteElement = elem.parentElement.parentElement;
    dataList.deleteRow(deleteElement.rowIndex);
    i = dataForm.findIndex(t=> t.id == elem.id)
    dataForm.splice(i,1)
    setData(dataForm)
}

function appearData(){
    dataForm= getData()
}
appearData()