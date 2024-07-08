import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';

Chart.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const ComparisonGraph = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6">
      <h3 className="text-xl font-bold mb-4">Comparison Graph</h3>
      <Line data={data} />
    </div>
  );
};

export default ComparisonGraph;
