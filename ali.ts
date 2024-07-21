import inquirer from "inquirer";
const answer: {
    Curr1: string
    Curr2: string
    Amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "Curr1",
        choices:["PKR", "USD" , "Euro"],
        message: "Please Choose The Currency You Want To Convert",    
    },

    {
        type: "list",
        name: "Curr2",
        choices:["PKR", "USD" , "Euro"],
        message: "Please Choose The Currency You Want To Covert Into",    
    },
    {
        type: "number",
        name: "Amount",
        message: "Please Enter The Amount",    
    }
])
 const { Curr1, Curr2, Amount } = answer
 if ( Curr1 && Curr2 && Amount ){
    let result: number = 0
    if ( Curr1 === "PKR" && Curr2 === "USD"){ 
        result = Amount / 250;
    }
    else if ( Curr1 === "PKR" && Curr2 === "Euro"){ 
        result = Amount / 350;
    }
    else if ( Curr1 === "USD" && Curr2 === "PKR" ){ 
        result = Amount * 250;
    }
    else if ( Curr1 === "USD" && Curr2 === "Euro" ){ 
        result = Amount / 2
    }
    else if ( Curr1 === "Euro" && Curr2 === "USD" ){ 
        result = Amount * 2
    }
    else if ( Curr1 === "Euro" && Curr2 === "PKR" ){ 
        result = Amount * 350
    }
    
    console.log(" Your Result is ", result);
 }
 else {
    console.log(  "Error! Please Enter The Valid Input" );
 } 
 