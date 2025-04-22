import PageTitle from '../../components/PageTitle';

const GalleryPage = () => {

  const handleClick = () => {
    console.log("GalleryPage.jsx tog hand om klicket");
    
  }

  return <
    PageTitle title="bilar" 
    onButtonClick = {handleClick} 
    />;
};

export default GalleryPage;