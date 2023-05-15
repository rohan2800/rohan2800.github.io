var names=new Array();
names[0]="Rohan";
names[1]="Nagesh";
names[2]="Sager";
names[3]="Yash";
names[4]="Ankita";
names[5]="Renu";
names[6]="Rutuja";
names[7]="Niks";
names[8]="Namdev";
names[9]="Rohini";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
