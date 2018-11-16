var doughnutChart = document.getElementById("currentService").getContext('2d');
  var currentService = new Chart(doughnutChart, {
      type: 'doughnut',
      data: {
          labels: ["Google Drive", "Dropbox", "iCloud", "Pinterest", "One Drive", "Trello"],
          datasets: [{
              data: [60, 15, 10, 5, 5, 5],
              backgroundColor: [
                  'rgba(16, 154, 245, 1)',
                  'rgba(157, 197, 209, 1)',
                  'rgba(255, 119, 119, 1)',
                  'rgba(255, 214, 67, 1)',
                  'rgba(118, 114, 115, 1)',
                  'rgba(193, 189, 188, 1)'

              ],
              borderColor: [
                  'rgba(16, 154, 245, 1)',
                  'rgba(157, 197, 209, 1)',
                  'rgba(255, 119, 119, 1)',
                  'rgba(255, 214, 67, 1)',
                  'rgba(118, 114, 115, 1)',
                  'rgba(193, 189, 188, 1)'
              ],
              borderWidth: 0
        }]
    },
    options: {
      legend: {
        display: false
      },
      responsive: true,
      title: {
            display: false,
            // fontColor: '#414141',
            // fontFamily: "'Halyard Display', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
            // fontSize: 18,
            // fontStyle: '500',
            // text: 'Currently Used Services'
        }
    }
});

var barChart = document.getElementById("mostUseful").getContext('2d');
  var mostUseful = new Chart(barChart, {
      type: 'horizontalBar',
      data: {
          labels: [ "Organizing content", "Saving Content", "Uploading Files", "Creating Files", "Scanning"],
          datasets: [{
              label: "Features",
              data: [60, 30, 81, 55, 10],
              backgroundColor: [
                'rgba(16, 154, 245, 1)',
                'rgba(157, 197, 209, 1)',
                'rgba(255, 119, 119, 1)',
                'rgba(255, 214, 67, 1)',
                'rgba(118, 114, 115, 1)',
                'rgba(193, 189, 188, 1)'
              ],
              borderColor: [
                  'rgba(16, 154, 245, 1)',
                  'rgba(157, 197, 209, 1)',
                  'rgba(255, 119, 119, 1)',
                  'rgba(255, 214, 67, 1)',
                  'rgba(118, 114, 115, 1)',
                  'rgba(193, 189, 188, 1)'
              ],
              borderWidth: 0
        }]
    },
    options: {
      legend: {
        display: false
      },
      responsive: true,
       scales: {
           xAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       },

       title: {
             display: false,
             // fontColor: '#414141',
             // fontFamily: "'Halyard Display', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
             // fontSize: 18,
             // fontStyle: '500',
             // text: 'Most Useful Features'
         }
   }
});
