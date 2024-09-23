// Task 1: Create an Employees Array of Employee Objects
const employees = [
    { name: 'John', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Wednesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Thursday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Monday', hours: 8 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 8 }] }
];

// Task 2: Create a Function to Display Employee Shift Details 
function displayEmployeeShifts(employee) {
    console.log(`Employee: ${employee.name}`);
    employee.shifts.forEach(shift => {
        console.log(`Day: ${shift.day}, Hours: ${shift.hours}`);
    });
}
 
// Task 3: Create a Function to Assign a New Shift
function assignShift(employeeName, day, hours) {
    const employee = employees.find(emp => emp.name === employeeName);

    if (!employee) {
        console.log(`Employee ${employeeName} not found.`);
        return;
    }

    const shiftAlready = employee.shifts.some(shift => shift.day === day);

    if (shiftAlready) {
        console.log(`Error, ${employeeName} already has a shift on ${day}.`);
    } else {
        employee.shifts.push({day, hours});
        console.log(`${employeeName} has ${hours} hours on ${day}.`);
    }   
    
}

// Task 4: Create a Function to Calculate Total Hours Worked 
function calculateTotalHours(employeeName) {
    const employee = employees.find(emp => emp.name === employeeName);

    if (!employee) {
        console.log(`${employeeName} not found.`);
        return 0;
    }

    const totalHours = employee.shifts.reduce((total, shifts) => total + shift.hours, 0);
    console.log(`This week ${employeeName} has worked ${totalHours} this week.`);
    return totalHours;
}

// Task 5: Create a Function to List Employees with Free Days 
function listAvailableEmployees(day) {
    const availableEmployees = employees. filter(emp => 
        !emp. shifts.some(shift => shift.day === day)
    );

    if (availableEmployees.length > 0) {
        console.log(`${day}, are the days employees are avaliable.`);
        availableEmployees.forEach(emp => console.log(emp.name));
    
    } else {
        console.log(`${days}, no employees are avaliable`);
    }
}