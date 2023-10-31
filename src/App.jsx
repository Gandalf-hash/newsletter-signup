import FormField from './components/FormField.jsx';
import ItemList from './components/ItemList.jsx';
import PrimaryButton from './components/PrimaryButton.jsx';
function App() {

  return (
    <div className="p-4 w-full h-full md:m-12 flex md:flex-row  justify-center text-primary-color">
      <div className="w-full justify-center md:mr-16 md:max-w-lg flex flex-col">
        <h1 className="font-bold text-5xl md:text-6xl mb-8">Stay updated!</h1>
        <span className="md:text-xl mb-8"> Join 60,000+ product managers receiving monthly updates on:</span>
        <ItemList />
        <div className="w-full flex flex-col mt-10">
          <FormField />
          <PrimaryButton />
        </div>
      </div>
      <div className=''>
        <img src="/images/illustration-sign-up-desktop.svg" alt="Illustration Sign Up" />
      </div>
    </div>
  );
}

export default App;
