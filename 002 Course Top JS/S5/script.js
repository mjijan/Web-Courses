
document.querySelector("body").innerHTML += `<div class="container" id="container"></div>`;
document.querySelector("body").innerHTML += ` 
    <div class="add_student" id="add_student">
        <div class="title">Add a new student</div>
        <input type="text" placeholder="Enter Student Name" class="inp1" id="new_stu_name" />
        <select class="inp1" id="new_stu_gender">
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
        <input type="number" min="0" max="100" placeholder="Enter Student Average" class="inp1" id="new_stu_avg" />
        <button class="add-btn" onclick="add_new_student()">Add</button>
        <div class="close-new-student" onclick="close_add_student()">x</div>
    </div>`;

document.querySelector("body").innerHTML += ` 
    <div class="edit_student" id="edit_student">
        <div class="title">Edit a student</div>
        <input type="text" placeholder="Enter Student Name" class="inp1" id="edited_stu_name" />
        <select class="inp1" id="edited_stu_gender">
            <option value="male">male</option>
            <option value="female">female</option>
        </select>
        <input type="number" min="0" max="100" placeholder="Enter Student Average" class="inp1" id="edited_stu_avg" />
        <button class="edit-btn" onclick="edit_student()">Edit</button>
        <div class="close-edited-student" onclick="close_edited_student()">x</div>
    </div>`;


var students_names = ["Hala" , "Melhem" , "Mazen" , "Abood" , "Royda"];
var students_genders = ["female" , "male" , "male" , "male" , "female"];
var students_averages = [91 , 94 , 8 , 36 , 100];

var container = document.getElementById("container");

show_students();
// -----------------------------------------------------
function show_students()
{
    container.innerHTML = "";

    for (var i= 0 ; i<students_names.length ; i++)
    {
        var img_name = "male.png";
        if (students_genders[i] == "female")
            img_name = "female.png";

        var avg_class = "succeed";
        if (students_averages[i] < 60)
            avg_class = "failed";

        var card = `<div class="card ${avg_class}">
                        <div class="stu-name">${students_names[i]}</div>
                        <img class="stu-img" src="imgs/${img_name}" />
                        <div class="stu-avg">${students_averages[i]}</div>
                        <div>
                            <button class="edit" onclick="show_edit_student(${i})">Edit</button>
                            <button class="delete" onclick="delete_student(${i})">Del</button>
                        </div>
                    </div>`;

        container.innerHTML += card;
    }

    container.innerHTML += `<div class="card plus" onclick="show_new_student()">+</div>`;
}
// -----------------------------------------------------
function show_new_student()
{
    container.style.display = "none";
    document.getElementById("add_student").style.display = "block";
}
// -----------------------------------------------------
var edited_student_index ;

function show_edit_student( stu_index )
{
    container.style.display = "none";
    document.getElementById("edit_student").style.display = "block";

    document.getElementById("edited_stu_name").value = students_names[stu_index];
    if(students_genders[stu_index] == "male")
        document.getElementById("edited_stu_gender").selectedIndex  = 0;
    else
        document.getElementById("edited_stu_gender").selectedIndex  = 1;

    document.getElementById("edited_stu_avg").value = students_averages[stu_index];

    edited_student_index = stu_index;
}
// -----------------------------------------------------
function close_add_student()
{
    container.style.display = "block";
    document.getElementById("add_student").style.display = "none";
}
// -----------------------------------------------------
function close_edited_student()
{
    container.style.display = "block";
    document.getElementById("edit_student").style.display = "none";
}
// -----------------------------------------------------
function add_new_student()
{
    var new_name = document.getElementById("new_stu_name").value;
    var new_gender = document.getElementById("new_stu_gender").value;
    var new_avg = document.getElementById("new_stu_avg").value;

    students_names.push(new_name);
    students_genders.push(new_gender);
    students_averages.push(new_avg);
    alert("Done Successfully.");

    close_add_student();
    show_students();

    document.getElementById("new_stu_name").value = "";
    document.getElementById("new_stu_avg").value = "";
}
// -----------------------------------------------------
function delete_student( stu_index )
{
    if (confirm("Are you sure?"))
    {
        students_names.splice(stu_index , 1);
        students_genders.splice(stu_index , 1);
        students_averages.splice(stu_index , 1);

        show_students();
    }
}
// -----------------------------------------------------
function edit_student()
{
    students_names[edited_student_index] = document.getElementById("edited_stu_name").value;
    students_genders[edited_student_index] = document.getElementById("edited_stu_gender").value;
    students_averages[edited_student_index] = document.getElementById("edited_stu_avg").value;
    close_edited_student();
    show_students();
}
// -----------------------------------------------------
