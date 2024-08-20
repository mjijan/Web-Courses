
var students = ["Aisha" , "Yara"   , "Maya"   , "Myriam" , "Fakher" , "Hiba"   ,"Leen"    , "Abd"  , "Ayham" ];
var genders  = ["female" , "female" , "female" , "female" , "male"   , "female" , "female" , "male" , "male" ];
var averages = [55,60,58,69,99,100,58,48,71];

for (var i=0 ; i<students.length ; i++)
{
    if (genders[i] == "male")
        document.getElementById("students").innerHTML += "<div class='stu male'>" + students[i] + "<div class='avg'> (" + averages[i] + ")</div></div>";
    else
        document.getElementById("students").innerHTML += "<div class='stu female'>" + students[i]  + "<div class='avg'> (" + averages[i] + ")</div></div>";

}