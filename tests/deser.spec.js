/*ONLY MOBILE NUMBER
import { test } from '@playwright/test';
import employeeData from '../emp.json';
test('Print Mobile Numbers', async () => {

    for (const employee of employeeData.employees) {

        console.log(employee.mobileno);

    }

});
*/

/*
import { test } from '@playwright/test';
import employeeData from '../emp.json';

test('Print Name and Secondary Mobile Number', async () => {

    for (const employee of employeeData.employees) {

        console.log(employee.name + " : " + employee.secondarymobno);

    }

});
*/

/*
import { test } from '@playwright/test';
import employeeData from '../emp.json';

test('Check API Skill', async () => {

    for (const employee of employeeData.employees) {

        if (employee.skillset.includes("API")) {

            console.log(`${employee.name} has API skill`);

        } else {

            console.log(`${employee.name} does not have API skill`);

        }

    }

});
*/


// import { test } from '@playwright/test';
// import studentdata from '../students.json';

// test("student data details", async () =>
// {
//      for(const students of studentdata.students)
//      {
//         if(students.skillset.includes("Api testing"))
//         {
//             console.log(students.Name + students.id + " " + "Has Api skills");
//         }
//         else
//             console.log(students.Name + students.id + " "  + "Dont have API skills");
//      }
// });


import { test } from '@playwright/test';
import studentdata from '../students.json';
import { ifError } from 'node:assert/strict';
 let count;

test("students data details" , async () =>
{
        for (const details of studentdata.students)   //details varaiable name. //
        {
            if(details.skillset.includes("selenium"))
            {
           console.log(details.Name + " " + "Has selenium skillset");
            }
            else
            {
                console.log(details.Name + " " + "Has no selenium skillset");
            }
        }
});
