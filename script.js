function generateResume() {
    document.getElementById("resumeOutput").classList.remove("hidden");

    document.getElementById("outputName").innerText =
        document.getElementById("name").value;

    document.getElementById("outputEmail").innerText =
        document.getElementById("email").value;

    document.getElementById("outputPhone").innerText =
        document.getElementById("phone").value;

    document.getElementById("outputSummary").innerText =
        document.getElementById("summary").value;

    document.getElementById("outputWork").innerText =
        document.getElementById("work").value;

    document.getElementById("outputSkills").innerText =
        document.getElementById("skills").value;

    document.getElementById("outputCourses").innerText =
        document.getElementById("courses").value;

    document.getElementById("outputAchievements").innerText =
        document.getElementById("achievements").value;

    document.getElementById("outputHobbies").innerText =
        document.getElementById("hobbies").value;
}

function printResume() {
    window.print();
}