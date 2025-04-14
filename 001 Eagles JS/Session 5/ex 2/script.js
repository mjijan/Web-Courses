    
    var students_names = ["Wissam" , "Ata" , "Housam" ,"Lina" , "Nikola" , "Jawad" , "Lama", "jawad" , "Abd" , "Adnan" , "Tarek" , "basel"];
    var students_genders = ["male" ,"male" ,"male" ,"female" ,"male" ,"male" ,"female" ,"male" ,"male" ,"male" ,"male" ,"male" ];
    var students_avgs = [56,89,100,48,78,52,17,39,94,85,99,48];
    
    document.querySelector("body").innerHTML += `<div class="container" id="container"></div>`;

show_students();

// -------------------------------------------------------------------------------------
function show_students()
{
    document.getElementById("container").innerHTML = "";
    
    for (var i = 0 ; i<students_names.length ; i++)
    {
        var card_bg = "failed";
        if (students_avgs[i] > 70)
            card_bg = "succeeded";

        var content =   `<div class="card ${card_bg}">
                            <div class="stu_name">${students_names[i]}</div>
                            <img class="stu_gender" src="imgs/${students_genders[i]}.png" />
                            <div class="stu_avg">${students_avgs[i]}</div>
                        </div>`;
        document.getElementById("container").innerHTML += content;
    }

    var content =   `<div class="card "><div class="plus" onclick="show_new_student()">+</div></div>`;
        document.getElementById("container").innerHTML += content;
}
// -------------------------------------------------------------------------------------
function show_new_student()
{
    document.getElementById("stu_form").style.display = "block";
}
// -------------------------------------------------------------------------------------
function add_student()
{
    var stu_name = document.getElementById("new_name").value;
    var stu_gender = document.getElementById("new_gender").value;
    var stu_avg = document.getElementById("new_avg").value;

    students_names.push(stu_name);
    students_genders.push(stu_gender);
    students_avgs.push(parseInt(stu_avg));

    alert("Done Successfully");
    document.getElementById("stu_form").style.display = "none";
    
    show_students();
}