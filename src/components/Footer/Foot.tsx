const Foot: React.FC<{ widthOfLayout: string }> = ({ widthOfLayout }) => {
  return (
    <div className={`border ${widthOfLayout} h-12  w-full`}>Foot</div>
  );
};

export default Foot;
