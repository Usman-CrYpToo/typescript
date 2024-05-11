var role;
(function (role) {
    role[role["Manger"] = 0] = "Manger";
    role[role["Worker"] = 1] = "Worker";
    role[role["players"] = 2] = "players";
})(role || (role = {}));
console.log("print the full", role);
console.log("the 1 in role enum :: ", role.Manger);
