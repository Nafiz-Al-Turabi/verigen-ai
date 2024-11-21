document.getElementById('toggleBtnBars').addEventListener('click', () => {
    document.querySelector('.dropdown').classList.toggle('open'); // Your dropdown logic
    document.getElementById('toggleBtnBars').style.display = 'none';  // Hide the 'bars' icon
    document.getElementById('toggleBtnTimes').style.display = 'inline';  // Show the 'times' icon
});

document.getElementById('toggleBtnTimes').addEventListener('click', () => {
    document.querySelector('.dropdown').classList.toggle('open'); // Your dropdown logic
    document.getElementById('toggleBtnTimes').style.display = 'none';  // Hide the 'times' icon
    document.getElementById('toggleBtnBars').style.display = 'inline';  // Show the 'bars' icon
});
