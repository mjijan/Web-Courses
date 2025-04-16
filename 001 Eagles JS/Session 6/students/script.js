    
    var students_names = ["Ahmad" , "Wissam" , "Ata" , "Housam" ,"Lina" , "Nikola" , "Jawad" , "Lama", "jawad" , "Abd" , "Adnan" , "Tarek" , "basel"];
    var students_genders = ["male" , "male" ,"male" ,"male" ,"female" ,"male" ,"male" ,"female" ,"male" ,"male" ,"male" ,"male" ,"male" ];
    var students_avgs = [100,56,89,100,48,78,52,17,39,94,85,99,48];
    
    document.querySelector("body").innerHTML += `<div class="container" id="container"></div>`;

    document.querySelector("body").innerHTML +=
        `<div class="stu_form" id="stu_form">
            <div class="title">Add a new student</div>
            <input class="new_name" type="text" id="new_name" placeholder="Student Name" />
            <select class="new_gender" id="new_gender">
                <option>Gender</option>
                <option>male</option>
                <option>female</option>
            </select>
            <input class="new_avg" type="number" id="new_avg" placeholder="Student Average" min="0" max="100" />
            <input type="button" class="new_btn" value="Add Student" onclick="add_student()" />
            <div class="close" onclick="close_new_form()">X</div>
        </div>`;

    document.querySelector("body").innerHTML +=
        `<div class="stu_form_edit" id="stu_form_edit">
            <div class="title">Edit a student</div>
            <input class="new_name" type="text" id="edit_name" placeholder="Student Name" />
            <select class="new_gender" id="edit_gender">
                <option>Gender</option>
                <option>male</option>
                <option>female</option>
            </select>
            <input class="new_avg" type="number" id="edit_avg" placeholder="Student Average" min="0" max="100" />
            <input type="button" class="new_btn" value="Edit Student" onclick="edit_student()" />
            <div class="close" onclick="close_edit_form()">X</div>
        </div>`;

show_students();

// -------------------------------------------------------------------------------------
var editing_id = "";
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
                            <button class="btn_delete" onclick="delete_student(${i})">Delete</button>
                            <button class="btn_edit" onclick="show_edit_student(${i})">Edit</button>
                        </div>`;
        document.getElementById("container").innerHTML += content;
    }

    var content = `<div class="card "><div class="plus" onclick="show_new_student()">+</div></div>`;
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
// -------------------------------------------------------------------------------------
function close_new_form()
{
    document.getElementById("stu_form").style.display = "none";
}
// -------------------------------------------------------------------------------------
function close_edit_form()
{
    document.getElementById("stu_form_edit").style.display = "none";
}
// -------------------------------------------------------------------------------------
function delete_student( id )
{
    if (!confirm("Are you sure?"))
        return;

        students_names.splice(id,1);
        students_genders.splice(id,1);
        students_avgs.splice(id,1);
        show_students();
}
// -------------------------------------------------------------------------------------
function show_edit_student( id )
{
    document.getElementById("stu_form_edit").style.display = "block";
    document.getElementById("edit_name").value = students_names[id];
    document.getElementById("edit_avg").value = students_avgs[id];
    if (students_genders[id] == "male")
        document.getElementById("edit_gender").selectedIndex = 1;
    else
        document.getElementById("edit_gender").selectedIndex = 2;
    editing_id = id;
}
// -------------------------------------------------------------------------------------
function edit_student()
{
    students_names[editing_id] = document.getElementById("edit_name").value ;
    students_avgs[editing_id] = document.getElementById("edit_avg").value ;
    students_genders[editing_id] = document.getElementById("edit_gender").value ;
    alert("Edited Successfully.");
    document.getElementById("stu_form_edit").style.display = "none";
    show_students();
}