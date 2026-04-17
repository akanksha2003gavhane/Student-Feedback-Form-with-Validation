let form = document.getElementById("feedbackForm");
let table = document.getElementById("data");

function getData(){
    return JSON.parse(localStorage.getItem("feedbacks")) || [];
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let rating = document.getElementById("rate").value;
    let comment = document.getElementById("feedback").value.trim();

    // if(name=="" || email=="" || rating=="" || comment==""){
    //     alert("All fields are required!");
    //     return;
    // }


    let valid = true;

document.getElementById("nameError").innerText = "";
document.getElementById("emailError").innerText = "";
document.getElementById("rateError").innerText = "";
document.getElementById("feedbackError").innerText = "";

    if(name == ""){
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    }

    if(email == ""){
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    }

    if(rating == ""){
        document.getElementById("rateError").innerText = "Please select rating";
        valid = false;
    }

    if(comment == ""){
        document.getElementById("feedbackError").innerText = "Feedback is required";
        valid = false;
    }

    if(!valid){
        return;
    }

    let feedback = {name, email, rating, comment};
    let list = getData();

    list.push(feedback);
    localStorage.setItem("feedbacks", JSON.stringify(list));

    displayData();
    form.reset();
});

function displayData(){
    let list = getData();
    table.innerHTML = "";

    list.forEach((f, index) => {
        let row = `
        <tr>
            <td>${index+1}</td>
            <td>${f.name}</td>
            <td>${f.email}</td>
            <td>${f.rating}</td>
            <td>${f.comment}</td>
        </tr>`;
        
        table.insertAdjacentHTML("beforeend", row);
    });
}

displayData();