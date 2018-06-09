import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  chart: Object = {};
  chartb: Object = {};
  chartc: Object = {};
  chartd: Object = {};
  dataset: any = [];

  constructor() { }

  ngAfterViewInit() {
    this.dataset = [{
          label: '# Entregas',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }];
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: ["1", "16", "101", "102", "104", "106"],
        datasets: this.dataset
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
    });
    this.chartb = new Chart('canvasb', {
      type: 'bar',
      data: {
        labels: ["1", "16", "101", "102", "104", "106"],
        datasets: this.dataset
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
    });
    this.chartc = new Chart('canvasc', {
      type: 'pie',
      data: {
        labels: ["1", "16", "101", "102", "104", "106"],
        datasets: this.dataset
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
    });
    this.chartd = new Chart('canvasd', {
      type: 'radar',
      data: {
        labels: ["1", "16", "101", "102", "104", "106"],
        datasets: this.dataset
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
    });
  }

}
