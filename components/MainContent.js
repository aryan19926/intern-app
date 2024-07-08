const MainContent = ({ children }) => {
  return (
    <div className="flex-1 p-6 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {children}
      </div>
    </div>
  );
};

export default MainContent;
