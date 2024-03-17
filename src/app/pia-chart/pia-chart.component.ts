import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Chart } from 'chart.js';
// import { ChartEvent } from 'chart.js';





@Component({
  selector: 'app-pia-chart',
  templateUrl: './pia-chart.component.html',
  styleUrls: ['./pia-chart.component.css']
})

// export class PiaChartComponent implements OnInit{
//   loginForm!: FormGroup; 
//   value1: any;
//   value2: any;

//   constructor(private formBuilder: FormBuilder){}
//   onChangeValue(){

//   }
//   addItem(){

//   }
//   ngOnInit(): void {
//     this.loginForm = this.formBuilder.group({
//       name: [''], // Initialize form controls here
//       email: [''],
//       phone: [''],
//       select: ['']
//     });  
//   }
//   formLogin(): void {
//     // Handle form submission here
//     // For example, you can access form values using this.loginForm.value
//     console.log(this.loginForm.value);
//   }
//   generatePieChart(): void {
//     const canvas: any = document.getElementById('circleChart');
//     const ctx = canvas.getContext('2d');
//     new Chart(ctx, {
//       type: 'pie',
//       data: {
//         labels: ['Veg', 'Non-Veg'],
//         datasets: [{
//           label: 'Preferences',
//           data: [this.value1, this.value2], // Values from your form
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.6)', // Red color for 'Veg'
//             'rgba(54, 162, 235, 0.6)'   // Blue color for 'Non-Veg'
//           ],
//           borderWidth: 1
//         }]
//       },
//       options: {
//         responsive: true
//       }
//     });
//   }
// }
export class PiaChartComponent implements OnInit {
  loginForm!: FormGroup; 
  value1: any;
  value2: any;
  items: any[] = [];
  pieChart: any;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      select: ['']
    });
  }

  addItem(formValues: any): void {
    const newItem = {
      name: formValues.name,
      email: formValues.email,
      phone: formValues.phone,
      select: formValues.select
    };
    this.items.push(newItem);
    this.generatePieChart();
  }
  formLogin(): void {
    // logic for form submission
  }

  generatePieChart(): void {
    const counts = this.items.reduce((acc, item) => {
      acc[item.select] = (acc[item.select] || 0) + 1;
      return acc;
    }, {});
    const labels = Object.keys(counts);
    const data = labels.map(label => counts[label]);

    if (this.pieChart) {
      this.pieChart.destroy();
    }

    const ctx = document.getElementById('circleChart') as HTMLCanvasElement;
    this.pieChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)'
          ]
        }]
      }
    });
  }

  onChangeValue(): void {
    // Implement your logic here
  }
}
