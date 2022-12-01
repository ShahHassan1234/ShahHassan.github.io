var names = new Array();
names[0] = "Thomas";
names[1] = "Shelbe";
names[2] = "Jhon";
names[3] = "Abraham";
names[4] = "Joe";
names[5] = "jerry";
names[6] = "Stafen";
names[7] = "jim";
names[8] = "aida";
names[9] = "Sunny";

for (var i = 0; i < names.length; i++) {
    if(names[i].charAt(0)==='J' || names[i].charAt(0)==='j')(
        console.log("Goodbye " + names[i])
    )
    else{
        console.log("Hello " + names[i])
    }
}