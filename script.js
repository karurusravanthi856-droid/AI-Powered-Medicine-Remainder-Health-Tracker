function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username !== "" && password !== "") {
        document.querySelector(".login-box").style.display = "none";
        document.getElementById("dashboard").style.display = "block";
    } else {
        alert("Please enter username and password");
    }
}

function addMedicine() {
    let medicine = document.getElementById("medicine").value;
    let dosage = document.getElementById("dosage").value;
    let time = document.getElementById("time").value;
    let days = document.getElementById("days").values;

    if (medicine === "" || dosage === "" || time === ""|| days=== "") {
        alert("Please fill all fields");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <b>${medicine}</b><br>
        Dosage: ${dosage}<br>
        Time: ${time}<br><br>
        Days:${days}<br><br>
        <button onclick="markTaken(this)">Taken</button>
    `;

    document.getElementById("medicineList").appendChild(li);

    document.getElementById("medicine").value = "";
    document.getElementById("dosage").value = "";
    document.getElementById("time").value = "";
    document.getElementById("days").value = "";
}

function markTaken(button) {

    button.innerHTML = "✅ Taken";
    button.disabled = true;

    let medicineItem = button.parentElement;

    let historyItem = document.createElement("li");

    let today = new Date().toLocaleString();

    historyItem.innerHTML = "✅ " + medicineItem.innerHTML + "<br><small>" + today + "</small>";

    document.getElementById("historyList").appendChild(historyItem);

    alert("Medicine marked as Taken!");
}
function callEmergency() {

    let name = document.getElementById("emergencyName").value;
    let number = document.getElementById("emergencyNumber").value;

    if (name === "" || number === "") {
        alert("Please enter emergency contact details.");
        return;
    }

    let confirmCall = confirm(
        "🚨 Emergency!\n\nCall " + name + "?\n📞 " + number
    );

    if (confirmCall) {
        window.location.href = "tel:" + number;
    }
}
