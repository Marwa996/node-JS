let arr = [
    {
        name: "marwa",
        grade: 95,
    },
    {
        name: "Dina",
        grade: 40,
    }
];

function add(name,grade){
    let obj={name,grade};
    arr.push(obj);
    console.log(arr);
}

function display(){
    console.log(arr);
}

function edit(data, id){
    const intData=parseInt(data);
    arr[id].grade=intData;
    console.log(arr);
}

function del(id){
    arr.splice(id,1);
    console.log(arr);
}
function sum(){
    let total =0;
    arr.forEach(element => {
        for(let key in element){
            if(key == "grade")
                total +=element[key];
        }
    });
    console.log(total);
}

module.exports={add,display,edit,del,sum};