import React from 'react';

const UpdateModal = ({ isOpen, onRequestClose, onSave }) => {
  const [rank, setRank] = React.useState(1);
  const [percentile, setPercentile] = React.useState(30);
  const [score, setScore] = React.useState(10);

  const handleSave = () => {
    onSave({ rank, percentile, score });
    onRequestClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
        <h2 className="text-xl font-bold mb-4">Update scores</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Update your Rank</label>
          <input
            type="number"
            value={rank}
            onChange={(e) => setRank(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Update your Percentile</label>
          <input
            type="number"
            value={percentile}
            onChange={(e) => setPercentile(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Update your Current Score (out of 15)</label>
          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button onClick={onRequestClose} className="px-4 py-2 bg-gray-300 rounded-lg">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Save</button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
