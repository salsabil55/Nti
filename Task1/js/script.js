
const addForm = document.querySelector('#addForm')
employeeHeads = ['name', 'dept', 'age', 'salary']

employess = []
let employee = {}

addForm.addEventListener('submit', function(e){
    e.preventDefault()
    employeeHeads.forEach(cHead => {
        employee[cHead] = this.elements[cHead].value});

  const valid=validateFields(employee);
    if(valid) {
        employess.push(employee);
        col3Div = createNewElement("div", "", "col-3", rowDiv,[])
        single = createNewElement("div", "","m-2 p-2 border border-1 bg-primary text-center text-white", col3Div,[])

        createNewElement('h4', employee.name, "", single,[])
        createNewElement('h6', employee.dept, "", single,[])
        createNewElement('p', employee.age, "", single,[])
        createNewElement('p', employee.salary, "", single,[])
        const button=createNewElement('button', 'delete', "btn btn-danger", single,[])
        button.addEventListener('click',function(e){
            employess.splice(employess.indexOf(employee),1)
            this.parentElement.parentElement.remove()
            console.log('students: after delete',employess)
        });
    }
})

addForm.addEventListener('keyup',()=>{
   document.querySelector(".alert-danger").remove();
})

mainWrap = document.querySelector('#mainWrapper');

let createNewElement = (elementTag, elementTxt, elementClasses,parent, attributes) =>{
    myNewEl = document.createElement(elementTag)
    if(elementTxt!='') myNewEl.innerText = elementTxt
    if(elementClasses!="") myNewEl.className =elementClasses
    parent.appendChild(myNewEl)  

    attributes.forEach(attr=>{
            myNewEl.setAttribute(attr.attrName, attr.attrVal)
        })
    return myNewEl  
}

let createForm=(studentHeads)=>{
    employeeHeads.forEach(sHead=>{
        const div=createNewElement('div',"","mb-3",addForm,[{attrName:'id',attrVal:sHead}])
        createNewElement('input',"","form-control",div,[{attrName:'name',attrVal:sHead}, {attrName:'placeholder',attrVal:sHead}])
    })
   createNewElement('input',"","btn btn-primary",addForm,[{attrName:'type',attrVal:'submit'}, {attrName:'value',attrVal:'Add Student'}])
}

createForm(employeeHeads);

rowDiv = createNewElement("div", "", "row", mainWrap,[])

function validateFields(employee){
    let noErr=true
    employeeHeads.forEach(cHead=>{
        myErr = document.createElement('div')

        if(!employee[cHead]){
            noErr=false
        myErr.className = 'alert alert-danger mt-2'
        myErr.innerText = `please add ${cHead}`
        document.querySelector(`#${cHead}`).appendChild(myErr)
        
        }
        else{
            myErr.remove()
        }
    })
    return noErr
}