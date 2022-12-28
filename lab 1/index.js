const student=require('./list');
switch(process.argv[2])
{
   case "add":
        student.add(process.argv[3],process.argv[4]);
      break;
   case "display":
        student.display();
      break;
   case "edit":
        student.edit(process.argv[3],process.argv[4])
    break;
    case "delete":
        student.del(process.argv[3]);
    break;
    case "sum":
        student.sum(process.argv[3]);
    break;

}
console.log(process.argv);