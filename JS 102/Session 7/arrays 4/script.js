
var students = ["Aisha" , "Yara"   , "Maya"   , "Myriam" , "Fakher" , "Hiba"   ,"Leen"    , "Abd"  , "Ayham" ];
var genders  = ["female" , "female" , "female" , "female" , "male"   , "female" , "female" , "male" , "male" ];
var averages = [55,60,58,69,99,100,58,48,71];

// var students = [];
// var genders = [];
// var averages = [];

//---------------------------------------------------------------------------------
show_Array();
//---------------------------------------------------------------------------------
function show_Array()
{
    document.getElementById("students").innerHTML = "";

    for (var i=0 ; i<students.length ; i++)
    {
        if (genders[i] == "male")
            document.getElementById("students").innerHTML += "<div id='stu_" + i + "' class='stu male'>" + students[i] + "<div class='avg'> (" + averages[i] + ")</div></div>";
        else
            document.getElementById("students").innerHTML += `<div id='stu_${i}' class='stu female'>` + students[i]  + "<div class='avg'> (" + averages[i] + ")</div></div>";

    }
}
//---------------------------------------------------------------------------------
function add_stu()
{
    var s_name = document.getElementById("stu_name").value;
    var s_avg = document.getElementById("stu_avg").value;
    var s_gender = document.getElementById("stu_gender").value;

    if (s_name == "" || s_avg == "" )
    {
        alert("empty data");
        return;
    }
    students.push(s_name);
    averages.push(s_avg);
    genders.push(s_gender);

    show_Array();
}
//---------------------------------------------------------------------------------
function search_stu()
{
    show_Array();
    var stu_search = document.getElementById("stu_search").value;
    
    for (var i=0 ; i< students.length ; i++)
    {
        if (students[i].toUpperCase() == stu_search.toUpperCase().trim())
        {
            document.getElementById("stu_"+i).style.background = "rgb(0,200,0)";
            break;
        }
    }
}
//---------------------------------------------------------------------------------

function delete_stu()
{
    var stu_for_delete = document.getElementById("stu_delete").value;

    for (var i=0 ; i<students.length ; i++)
    {
        if (  ( students[i].toUpperCase() == stu_for_delete.toUpperCase().trim() ) || (averages[i] == stu_for_delete) || (genders[i] == stu_for_delete) )
        {
            // document.getElementById(`stu_${i}`)
            //document.getElementById("stu_" + i).remove();
            
            // students = students.filter(function(item) {
            //     return item !== stu_for_delete
            // })

            students.splice(i,1);
            averages.splice(i,1);
            genders.splice(i,1);

        }
        
    }
    show_Array();
}

//---------------------------------------------------------------------------------