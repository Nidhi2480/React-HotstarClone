import './scrollbuttons.css'
    
export const SamplePrevArrow = (props) => {
    const { classname,onClick } = props;
    return (
      <button
        className={classname}
        onClick={onClick}
      >
        <i className="arrow left" />
      </button>
    );
  };

export const SampleNextArrow = (props) => {
    const { classname,onClick } = props;
    return (
      <button
        className={classname}
        onClick={onClick}
      >
        <i className="arrow right" />
      </button>
    );
  };
