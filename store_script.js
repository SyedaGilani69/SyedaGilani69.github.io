function process() {
    console.log("Processing information!");

    // get information from form
    const cname = document.getElementById("cname").value;
    const amount = document.getElementById("amt").value;
    const item = document.getElementById("item").value;
    const curr_date = new Date();

    // set arrival date to 7 days after their order
    curr_date.setDate(curr_date.getDate() + 7);

    const timeofday = curr_date.getHours() >= 12 ? 'Afternoon' : "Morning";

    // display information on HTML

    document.getElementById('Greeting').innerText = "Good " + timeofday + ", " + cname + " you have purchased " + amount + " of " + item;
    document.getElementById('Arrival').innerText = "Your item will come at " + curr_date;
}