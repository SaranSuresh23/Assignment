import { Component } from '@angular/core';

@Component({
  selector: 'app-employeetable',
  standalone: true,
  imports: [],
  templateUrl: './employeetable.component.html',
  styleUrl: './employeetable.component.css'
})
export class EmployeetableComponent {
  employeedetails:any;
  salary:boolean=true;
  hidebtn:boolean=true;
    constructor(){
      this.employeedetails=[
        {
          empID:"1",
          name:"Abishek",
          designation:"SL",
          Doj:"9/10/2019",
          address:"salem",
          salary:"66000"
        },
        {
          empID:"2",
          name:"kumar",
          designation:"SL",
          Doj:"5/5/2021",
          address:"chennai",
          salary:"100000"
        },
        {
          empID:"60",
          name:"Rahul",
          designation:"tech",
          Doj:"8/8/2016",
          address:"Thenkasi",
          salary:"68901"
        },
        {
          empID:"70",
          name:"Sanjay",
          designation:"Tes",
          Doj:"5/6/2017",
          address:"Pondicherry",
          salary:"50000"
        },
        {
          empID:"77",
          name:"Aravind",
          designation:"Dev",
          Doj:"4/6/2016",
          address:"salem",
          salary:"35678"
        },
        {
          empID:"89",
          name:"saran",
          designation:"De",
          Doj:"7/8/2015",
          address:"chennai",
          salary:"66666"
        },
        {
          empID:"99",
          name:"Ragu",
          designation:"SL",
          Doj:"10/11/2016",
          address:"coimbatore",
          salary:"77678"
        },
        {
          empID:"101",
          name:"mohan",
          designation:"Tes",
          Doj:"2/5/2012",
          address:"Bangalore",
          salary:"55676"
        },
        {
          empID:"121",
          name:"kannan",
          designation:"s",
          Doj:"6/5/2019",
          address:"chennai",
          salary:"67543"
        },
        {
          empID:"113",
          name:"gokul",
          Doj:"te",
          location:"5/10/2021",
          address:"salem",
          salary:"35000"
        }
      ]
    }

    hideSalary(){
      this.salary=false;
      this.hidebtn=false;
    }

    showbtn(){
      this.salary=true;
      this.hidebtn=true;
    }
}
