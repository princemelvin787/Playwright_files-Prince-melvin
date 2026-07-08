import { test, expect } from '@playwright/test';
import fs from 'fs';

test('Serialization Example', async ({}) => {


    const employee = {
        id: 104,
        name: "Melvin",
        mobileno: 9876543210,
        secondarymobno: 9123456789,
        skillset: ["Playwright", "API", "JavaScript"]
    };

    const employee1 ={
         id: 106,
        name: "Cristiano",
        mobileno: 9876558479,
        secondarymobno: 91234874489,
        skillset: ["Playwright", "API", "JavaScript","C","C++"]
    };

    
    const jsonData = JSON.stringify(employee, null , 4);  // obj to json
    const jsondata1 = JSON.stringify(employee1, null, 4);  //NULL means dont use custom replacer.. //4 for spaces for making readable

    fs.writeFileSync('employee.JSON', jsonData);
    fs.writeFileSync('employee1.JSON', jsondata1 );

    console.log("Serialized JSON:");
    console.log(jsonData);
    console.log(jsondata1);

});

