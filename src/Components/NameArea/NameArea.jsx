import PropTypes from "prop-types";

const NameArea = ({ course }) => {
  return (
    <div className="w-full min-h-0 p-2 bg-gray-400 rounded-lg font-[600] mt-3 text-white">
      <h1>{course}</h1>
    </div>
  );
};

NameArea.propTypes = {
  course: PropTypes.string,
};

export default NameArea;
