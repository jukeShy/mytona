import DefaultLayout from '../layouts/DefaultLayout';

import '../public/css/style.css';

const App = ({ Component, pageProps }) => {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  );
};

export default App;
