const stockChart = new Chart(
    document.getElementById("stockChart"),
    {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [{
                label: "Stock Units",
                data: [12000, 14500, 13200, 16800, 17500, 18540],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    }
);

const categoryChart = new Chart(
    document.getElementById("categoryChart"),
    {
        type: "doughnut",
        data: {
            labels: ["Electronics", "Furniture", "Accessories", "Clothing"],
            datasets: [{
                data: [40, 25, 20, 15],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    }
);

function searchProducts() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const rows = document.querySelectorAll("#inventoryTable tr");

    rows.forEach(function(row) {
        const text = row.textContent.toLowerCase();

        if (text.includes(filter)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

function generateReport() {
    const report = `
SMART INVENTORY REPORT

Total Products: 1,248
Total Stock: 18,540
Low Stock Items: 42
Active Suppliers: 86

Report generated successfully.
`;

    const file = new Blob([report], {
        type: "text/plain"
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = "inventory-report.txt";
    link.click();
}