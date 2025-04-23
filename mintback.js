document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('duesTable');
    const updateForm = document.getElementById('updateForm');

    // Fetch table data from backend
    fetch('http://localhost:3000/dues')
        .then(response => response.json())
        .then(data => {
            data.forEach(row => {
                const tr = `<tr>
                    <td>${row.resident_name}</td>
                    <td>${row.flat_no}</td>
                    <td>${row.due_amt}</td>
                    <td>${row.last_pd}</td>
                    <td>
                        <button onclick="editRow(${row.flat_no})">Edit</button>
                    </td>
                </tr>`;
                tableBody.innerHTML += tr;
            });
        });

    // Handle updates
    updateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const residentName = document.getElementById('residentName').value;
        const flatNumber = document.getElementById('flatNumber').value;
        const dueAmount = document.getElementById('dueAmount').value;
        const lastPaid = document.getElementById('lastPaid').value;

        fetch('http://localhost:3000/update-dues', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ residentName, flatNumber, dueAmount, lastPaid })
        })
        .then(response => response.text())
        .then(data => {
            alert(data); // Notify the user
            location.reload(); // Refresh data
        });
    });
});

// Edit function
function editRow(flatNumber) {
    const row = document.querySelector(`tr[data-flat-number="${flatNumber}"]`);
    document.getElementById('residentName').value = row.cells[0].textContent;
    document.getElementById('flatNumber').value = row.cells[1].textContent;
    document.getElementById('dueAmount').value = row.cells[2].textContent;
    document.getElementById('lastPaid').value = row.cells[3].textContent;
}