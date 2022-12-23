metric_name = window.location.href.split("/")[5]; // Get the metric name from the URL and use for setting unique value for input

// Set the values for the inputs
all_inputs = document.querySelectorAll("input");
for(let index = 1; index < all_inputs.length; index++) {
    all_inputs[index].value = 'aws_testing_for_' + metric_name + '_' + all_inputs[index].name;
}

// Set the values for the dropdowns
all_dropdowns = document.querySelectorAll("select");
all_dropdowns.forEach(ele => {
    ele.value = ele.options[1].value;
});

// Set the values for the timepickers
document.querySelectorAll('.hasTimepicker').forEach((ele)=> ele.value = '00:00')
// Set the values for the datepickers
document.querySelectorAll('.hasDatepicker').forEach((ele)=> ele.value = '2020-01-01')
// Set the values for the checkboxes
document.querySelectorAll('input[type=checkbox]').forEach((ele)=> ele.checked = false)

//set the values for the multiplier and batch size (number was manadatory)
document.querySelector('input[name=multiplier]').value = 1
document.querySelector('input[name=batch_size]').value = 1

document.querySelectorAll('input[step=any]').forEach((ele)=>{ele.value = 0})
// Click the submit button
document.querySelector('input[type=submit]').click()