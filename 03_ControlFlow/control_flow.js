let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;
let userType = "subscriber";
let userCategory;
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
let employeeType = "enrroled-member";
let isEligible;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "Manager"){
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

if (isLoggedIn) {
    if (userRole === "admin"){
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access to the system.";
}
// console.log("User Type", userType);
switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unkwown";
}

switch (employeeType) {
    case "employee":
        isEligible = "Access granted";
        break;
    case "enrroled-member":
        isEligible = "Access granted and one-on-one interaction with a dietician";
        break;
    case "subscriber":
        isEligible = "Partial access to facilitate Dietary Services only";
        break;
    case "non-subscriber":
        isEligible = "Sorry, you need to enroll or at least subscribe first to avail this facility";
        break;
    default:
        isEligible = "You don't have access";
}

console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);
console.log("User Category:", userCategory);
console.log("Authentication Status:", authenticationStatus);
console.log("Dietary Services:", isEligible);
