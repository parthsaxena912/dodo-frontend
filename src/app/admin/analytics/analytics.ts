import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsService, AnalyticsData } from '../../analytics';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './analytics.html',
  styleUrls: ['./analytics.css'],
})
export class AnalyticsComponent implements OnInit {
  analytics?: AnalyticsData;
  loading = false;
  error = '';

  // Chart Data
  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Total Paid', 'Remaining', 'Average'],
    datasets: [
      {
        data: [0, 0, 0],
        label: 'Pension Summary',
        backgroundColor: ['#4caf50', '#f44336', '#2196f3'],
        borderRadius: 10,
      },
    ],
  };

  barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: 'Pension Summary Overview' },
    },
  };

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit(): void {
    this.loadAnalytics();
  }

  loadAnalytics() {
    this.loading = true;
    this.error = '';
    this.analyticsService.getAnalytics().subscribe({
      next: (data) => {
        this.analytics = data;
        this.loading = false;

        // Update chart data dynamically
        this.barChartData.datasets[0].data = [
          data.totalPensionPaid,
          data.remainingPensioners,
          data.averagePension,
        ];
      },
      error: (err) => {
        this.loading = false;
        this.error = 'Failed to load analytics data. Please try again.';
        console.error(err);
      },
    });
  }
}
