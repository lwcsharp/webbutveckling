import './pageTitle.css';

const PageTitle = ({ title, onButtonClick }) => {
  // logik delen...


  // jsx/presenations delen
  return (
    <>
      <h1 className='page-title'>{title}</h1>
      <button onClick={onButtonClick}>Submit</button>
    </>
  );
};

export default PageTitle;