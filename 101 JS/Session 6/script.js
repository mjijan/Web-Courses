
var students = ["Israa", "Khodor", "Pierre", "Abd Allah", "Mohammad", "Mozaher", "Zoher", "Qusay", "Ali"];
var averages = [55, 99, 89, 68, 75, 78, 100, 96, 56];
var max_avg = 0;
var max_stu;
var found_index = -1;


print_all();

for (var i = 0; i < students.length; i++)
    console.log(students[i] + " : " + averages[i]);

function max() {
    for (var i = 0; i < students.length; i++) {
        if (averages[i] > max_avg) {
            max_avg = averages[i];
            max_stu = students[i];
        }
    }
    document.getElementById("result2").innerHTML = max_stu + " : " + max_avg;
}

function print_all() {
    document.getElementById("result1").innerHTML = "";
    document.getElementById("elements").innerHTML = "";
    for (var i = 0; i < students.length; i++) {
        document.getElementById("result1").innerHTML += students[i] + ":" + averages[i] + ", ";
    }

    for (var i = 0; i < students.length; i++) {
        if (i == found_index)
            document.getElementById("elements").innerHTML += "<div class='elem found'>" + students[i] + "</div>";
        else
            document.getElementById("elements").innerHTML += "<div class='elem'>" + students[i] + "</div>";
    }

}

function add_stu() {
    var stu_name = document.getElementById("stu_name").value;
    var stu_avg = document.getElementById("stu_avg").value;
    if (stu_name == "" || stu_avg == "") {
        alert("Empty data");
        return;
    }

    students.push(stu_name);
    averages.push(stu_avg);

    document.getElementById("stu_name").value = "";
    document.getElementById("stu_avg").value = "";

    print_all();
}


function search_stu() {
    found_index = -1;
    var search_name = document.getElementById("search_name").value;
    for (var i = 0; i <= students.length; i++) {
        if (students[i] == search_name) {
            found_index = i;
            break;
        }
    }
    print_all();
}
