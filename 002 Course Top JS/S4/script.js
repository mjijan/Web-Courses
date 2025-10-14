
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
        <button class="add-btn" >Add</button>
    </div>`;

var container = document.getElementById("container");

var students_names = ["Hala" , "Melhem" , "Mazen" , "Abood" , "Royda"];
var students_genders = ["female" , "male" , "male" , "male" , "female"];
var students_averages = [91 , 94 , 8 , 36 , 100];
// -----------------------------------------------------
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
                </div>`;

    container.innerHTML += card;
}

container.innerHTML += `<div class="card plus" onclick="show_new_student()">+</div>`;

// -----------------------------------------------------
function show_new_student()
{
    container.style.display = "none";
    document.getElementById("add_student").style.display = "block";
}