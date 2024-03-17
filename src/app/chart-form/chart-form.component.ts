// import { Component } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { Chart } from 'chart.js';

// // import { Chart } from 'chart.js';
// @Component({
//   selector: 'app-chart-form',
//   templateUrl: './chart-form.component.html',
//   styleUrls: ['./chart-form.component.css']
// })
// export class ChartFormComponent{

//   value1:any;
//   value2:any;
//   select:any;
//   chart :any;
  

//   // title = 'dk-mock';
//   loginForm= new FormGroup({
//         name:new  FormControl(''),
//         email:new  FormControl(''),
//         phone:new  FormControl(''),
//         select:new  FormControl(''),
//       })
//       items: any[] =[];
//       constructor(){}
//       formLogin(){
//         console.log(this.loginForm.value);
//       }
//       onChangeValue(){
//         if(this.value1){
//           this.value2 = 100 - this.value1;
//           }
//         }
//         onChangeValues(){
//           if(this.value2){
//           this.value1 = 100 -this.value2
//           }}
//           ngOnInit(){
//             this.addItem(0);
//             // this.select()
//           }
//           // addVeg(){
//           //   this.select()
//           // }

//       addItem(newItem:any) {
//         this.items.push(newItem);
//         const canvas = <HTMLCanvasElement>document.getElementById('circleChart');
//         if(!canvas){
//           console.error("Canvas context not found");
//           return;
//         }
//         const ctx = canvas.getContext('2d');
//         if(!ctx){
//           console.error("Canvas context not found");
//           return;
//         }
//         this.chart = new Chart (canvas,{
//           type: 'doughnut',
//           data:{
//             labels:['Veg','Nonveg'],
//             datasets:[{
//               data:[this.value1,this.value2],
//               backgroundColor:[
//                 '#191970',
//                 '#36A2EB',
//                 '#FFC0CB'
//               ]
//             }]
//           }
//         })
//       }
//     }
        
      
      
        




  



// // export class ChartFormComponent implements OnInit {
// //   Value1:any;
// //   value2:any;
// //   chart :any;
  
// //   onChangeValue(){
// //     if(this.Value1){
// //       this.value2 = 100 - this.Value1;
// //     }

// //   }
// //   onChangeValues(){
// //     if(this.value2){
// //       this.Value1 = 100 -this.value2
// //     }
// //   }
// //   ngOnInit(){
// //     this.onChange();
// //   }
// //   onChange(){
// //     const canvas = <HTMLCanvasElement>document.getElementById('circleChart');

// //     if(!canvas){
// //       console.error("Canvas context not found");
// //       return;
// //     }
// //     const ctx = canvas.getContext('2d');
// //     if(!ctx){
// //       console.error("Canvas context not found");
// //       return;
// //     }
// //     this.chart = new Chart (canvas,{
// //           type: 'doughnut',
// //           data:{
// //             labels:['value1','value2'],
// //             datasets:[{
// //               data:[this.Value1,this.value2],
// //               backgroundColor:[
// //                 '#191970',
// //                 '#36A2EB',
// //                 '#FFC0CB'
// //               ]
// //             }]
// //           }
// //     })
// //   }
// // }
