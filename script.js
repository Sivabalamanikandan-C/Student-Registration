const maindiv=document.getElementById("maincontainer");

const newTable=document.createElement("table");
maindiv.append(newTable);
newTable.style.border="1px solid black";

const tr1=document.createElement("tr");
newTable.append(tr1);

const caption=["SNAME","SAGE","SGENDER","SCOURSE","SEMAIL","ACTION"];

caption.forEach((ele,index)=>{
    const th=document.createElement("th");
    th.textContent=ele;
    tr1.append(th);
    th.style.border="1px solid black";
    th.style.padding="3px";
})

const sBtn=document.getElementById("sbtn");
const sName=document.getElementById("sname");
const sAge=document.getElementById("sage");
const sGender=document.getElementsByName("gender");
const sCourse=document.getElementById("scourse");
const eMail=document.getElementById("email");

sBtn.addEventListener("click",()=>{
    const tr=document.createElement("tr");
    newTable.append(tr);

    const td1=document.createElement("td");
    tr.append(td1);
    td1.textContent=sName.value;
    td1.style.border="1px solid black";
    
    const td2=document.createElement("td");
    td2.textContent=sAge.value;
    tr.append(td2);
    td2.style.border="1px solid black";

    const td3=document.createElement("td");
    for (let count=0;count<2;count++){
            if(sGender[count].checked){
                td3.textContent=sGender[count].value;
            }
        }

    tr.append(td3);
    td3.style.border="1px solid black";

    const td4=document.createElement("td");
    td4.textContent=sCourse.value;
    tr.append(td4);
    td4.style.border="1px solid black";

    const td5=document.createElement("td");
    td5.textContent=eMail.value;
    tr.append(td5);
    td5.style.border="1px solid black";

    const delBtn=document.createElement("button");
    delBtn.textContent="Delete";
    const td6=document.createElement("td");
    tr.append(td6);
    td6.append(delBtn);
    td6.style.border="1px solid black";
    delBtn.setAttribute("id","delbtn");

    delBtn.addEventListener("click",()=>{
        tr.remove();
    })
})

