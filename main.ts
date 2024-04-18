import inquirer from "inquirer";
import chalk from "chalk";


let todosList:string[] = [];
let condition = true;
//printing message
console.log(chalk.magentaBright.bold(`\n\t\t<<< ======================================================================================= >>>`));
console.log(chalk.magentaBright.bold(`\t\t\t\t<---< =========" Wellcome To Todo-Application "======== >--->`));
console.log(chalk.magentaBright.bold(`\t\t<<< ======================================================================================== >>>\n`));


let main = async ()=>{
  while(condition){
    let option = await inquirer.prompt([
      {
        name:"choice",
        type:"list",
        message:"Select an Option You Want To Do: ",
        choices:["Add Task","Delete Task","Update Task","View Todo-List","Exit"],
      }
    ]);
    if(option.choice === "Add Task"){
      await addTask()
    }
    else if(option.choice === "Delete Task"){
      await deleteTask()
    }
    else if(option.choice === "Update Task"){
      await updateTask()
    }
    else if(option.choice === "View Todo-List" ){
      await viewTask ()
    }
    else if(option.choice === "Exit"){
      condition = false;
    }
    
  }
}
//function to add task
let addTask = async ()=>{
  let newTask = await inquirer.prompt([
    {
      name:"task",
      type:"input",
      message:"Enter Yuor New Task: "
    }
  ]);
  todosList.push(newTask.task);
  console.log(`\n "${newTask.task}" Task Added Successfully In Your Todo-List. `);
}
//function to view task
let viewTask = ()=>{
  console.log(`\n Your Todo-List: \n`);
  todosList.forEach((task,index) =>{
    console.log(` ${index+1}: ${task}`);
    
  })
}
//function to delet task

let deleteTask = async ()=>{
  await viewTask();
  let taskIndex = await inquirer.prompt([
    {
      name:"index",
      type:"number",
      message:"Enter The 'Index no.' Of The Task You Want To Delete: ",
    }
  ]);
  let deleteTask = todosList.splice(taskIndex.index-1,1);
  console.log(`\n "${deleteTask}" This Task Has Been Delete Successflly From Your Todo-List\n `);
}
//function to update task
let updateTask = async ()=>{
  await viewTask();
  let update_task_index = await inquirer.prompt([
    {
      name:"index",
      type:"number",
      message:"Enter The 'Index no'Of Task You Want To Update: "
    },
    {
      name:"new_task",
      type:"input",
      message:"Now Enter New Task Name: "
    }
  ]);
  todosList[update_task_index.index-1] = update_task_index.new_task
  console.log(`\ Task At Idex No. "${update_task_index.index-1}" Updated Successfully [For Updated List Check Option: "View Todo-List"]`);
  
}


main();