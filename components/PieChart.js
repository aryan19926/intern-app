import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ marks }) => {
  const totalQuestions = 15;
  const correctAnswers = marks;
  const incorrectAnswers = totalQuestions - correctAnswers;

  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        data: [correctAnswers, incorrectAnswers],
        backgroundColor: ['#4CAF50', '#F44336'],
        hoverBackgroundColor: ['#66BB6A', '#E57373'],
        cutout: '70%', // This makes it a donut chart
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-bold mb-4">Performance Breakdown</h3>
      <Doughnut data={data} />
    </div>
  );
};

export default PieChart;
