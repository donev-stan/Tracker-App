import { Component } from '@angular/core';

@Component({
  selector: 'tracker-food-create',
  templateUrl: './food-create.component.html',
  styleUrls: ['./food-create.component.scss'],
})
export class FoodCreateComponent {
  data: any;

  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    // const textColor = documentStyle.getPropertyValue('--text-color');
    const textColor = 'green';

    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [540, 1025, 702],
          backgroundColor: [
            documentStyle.getPropertyValue('--blue-500'),
            documentStyle.getPropertyValue('--yellow-500'),
            documentStyle.getPropertyValue('--green-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
            documentStyle.getPropertyValue('--green-400'),
          ],
        },
      ],
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            // usePointStyle: true,
            // visibility: true,
            color: textColor,
          },
        },
      },
      title: {
        display: true,
        text: 'Sample Chart Title',
        fontSize: 18,
        fontFamily: 'Arial',
      },
      datalabels: {
        display: true,
        color: 'black', // Label text color
        anchor: 'end', // Position of the label relative to the data point
        align: 'top', // Alignment of the label relative to the data point
        font: {
          size: 12, // Label font size
        },
        formatter: (value: any, context: any) => {
          return value; // You can customize the label text here
        },
      },
    };
  }
}
