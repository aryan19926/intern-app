import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import SkillTest from '../components/SkillTest';
import SyllabusWiseAnalysis from '../components/SyllabusWiseAnalysis';
import ComparisonGraph from '../components/ComparisonGraph';
import PieChart from '../components/PieChart';
import Navbar from "../components/Navbar" // Import the Navbar component
import { useState } from 'react';

export default function Home() {
  const [graphData, setGraphData] = useState({
    labels: ['Your Percentile'],
    datasets: [
      {
        label: 'Score',
        data: [30],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  });

  const [marks, setMarks] = useState(10);

  const handleMarksChange = (newMarks) => {
    setMarks(newMarks);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar /> {/* Add the Navbar component */}
      <div className="flex flex-1">
        <Sidebar />
        <MainContent>
          <div className="order-1 md:order-1">
            <SkillTest onMarksChange={handleMarksChange} />
            <ComparisonGraph data={graphData} />
          </div>
          <div className="order-2 md:order-2">
            <SyllabusWiseAnalysis />
            <PieChart marks={marks} />
          </div>
        </MainContent>
      </div>
    </div>
  );
}
