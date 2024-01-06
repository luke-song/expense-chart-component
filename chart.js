async function createChart() {
  try {
    // Fetch the data from the JSON file
    const response = await fetch("data.json");
    const data = await response.json();

    // Extract the xValues and yValues from the data
    const xValues = data.map((item) => item.day);
    const yValues = data.map((item) => item.amount);

    // Create the chart
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [
          {
            backgroundColor: "#ec775f",
            hoverBackgroundColor: "#76b5bc",
            data: yValues,
            borderRadius: 2,
          },
        ],
      },
      options: {
        aspectRatio: 1.5,
        plugins: {
          legend: { display: false },
          title: {
            display: false,
            text: "Spending - Last 7 days",
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              display: true,
              font: {
                color: "gray",
              },
            },
            // Hide x-axis line
            border: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              display: false,
              beginAtZero: true,
              min: 0,
              max: 55,
            },
            // Hide y-axis line
            border: {
              display: false,
            },
          },
        },
      },
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

createChart();
