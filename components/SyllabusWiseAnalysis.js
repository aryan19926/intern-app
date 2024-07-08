const SyllabusWiseAnalysis = () => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mt-4">
        <h3 className="font-bold">Syllabus Wise Analysis</h3>
        <div className="mt-2">
          <p>HTML Tools, Forms, History <span className="float-right">80%</span></p>
          <div className="w-full bg-gray-200 h-2 mb-4">
            <div className="bg-blue-500 h-2" style={{ width: '80%' }}></div>
          </div>
          <p>Tags & References in HTML <span className="float-right">60%</span></p>
          <div className="w-full bg-gray-200 h-2 mb-4">
            <div className="bg-orange-500 h-2" style={{ width: '60%' }}></div>
          </div>
          <p>Tables & References in HTML <span className="float-right">24%</span></p>
          <div className="w-full bg-gray-200 h-2 mb-4">
            <div className="bg-red-500 h-2" style={{ width: '24%' }}></div>
          </div>
          <p>Tables & CSS Basics <span className="float-right">96%</span></p>
          <div className="w-full bg-gray-200 h-2 mb-4">
            <div className="bg-green-500 h-2" style={{ width: '96%' }}></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SyllabusWiseAnalysis;
  