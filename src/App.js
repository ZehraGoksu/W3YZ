import Layout from "./Layout";
import Content from "./components/Content";
import SlideGallery from "./components/SlideGallery";
import FormOfVisit from "./components/FormOfVisit";
import ApiGallery from "./components/ApiGallery";

function App() {
 

  return (
    <Layout>
      <Content /> 
      <SlideGallery />
      <ApiGallery  />
      <FormOfVisit />
    </Layout>
  );
}

export default App;
