import Overview from 'pages/profile';
import Footer from '../src/components/footer/Footer';
import Header from '../src/components/header/Header';
import '@fontsource/inter/400.css'; /* For regular weight */
import '@fontsource/inter/700.css'; /* For bold weight */
const App = () => {
    return (
        <>
            <Header />
            <Overview/>
            <Footer />
        </>
    );
};

export default App;
