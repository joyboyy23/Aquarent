// Get modal element
const modal = document.getElementById('bookModal');
const btn = document.getElementById('bookBtn');
const span = document.getElementsByClassName('close')[0];

// Open modal when button is clicked
if (btn) {
    btn.onclick = function() {
        modal.style.display = 'block';
    }
}

// Close modal when X is clicked
if (span) {
    span.onclick = function() {
        modal.style.display = 'none';
    }
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}