import FormField from './components/FormField.jsx';
import ItemList from './components/ItemList.jsx';
function App() {

  return (
    <div className='min-h-screen items-center xl:bg-primary-color flex justify-center'>
    <div className="md:px-6 md:py-6 max-w-6xl h-full border-text-color rounded-3xl bg-text-color flex-col-reverse flex md:flex-row justify-center text-primary-color">
      <div className="p-4 w-full justify-center 2xl:mr-16 md:m-12 md:max-w-lg flex flex-col">
        <h1 className="font-bold text-5xl md:text-6xl mb-8">Stay updated!</h1>
        <span className="md:text-xl mb-8"> Join 60,000+ product managers receiving monthly updates on:</span>
        <ItemList />
          <FormField />
      </div>
      <div className=''>
        <img className='hidden md:block w-full h-full' src="/images/illustration-sign-up-desktop.svg" alt="Desktop Illustration Sign Up" />
        <img className='md:hidden flex mb-12 w-full' src="/images/illustration-sign-up-mobile.svg" alt="Mobile Illustration Sign Up " />
      </div>
    </div>
    </div>
  );
}

export default App;
