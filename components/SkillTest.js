import React, { useState } from 'react';
import UpdateModal from './UpdateModal';

const SkillTest = ({ onMarksChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState(10);

  const handleUpdate = ({ rank, percentile, score }) => {
    setRank(rank);
    setPercentile(percentile);
    setScore(score);
    onMarksChange(score);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Hyper Text Markup Language</h2>
      <div className="flex justify-between items-center">
        <div>
          <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
        </div>
        <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
          Update
        </button>
      </div>
      <div className="mt-4">
        <h3 className="font-bold">Quick Statistics</h3>
        <div className="flex justify-between mt-2">
          <div>{rank} <br /> Your Rank</div>
          <div>{percentile}% <br /> Percentile</div>
          <div>{score} / 15 <br /> Correct Answers</div>
        </div>
      </div>
      <UpdateModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onSave={handleUpdate}
      />
    </div>
  );
};

export default SkillTest;
