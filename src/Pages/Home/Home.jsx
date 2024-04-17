import { Helmet } from "react-helmet";
import Banner from "../../components/Banner/Banner";
import Estate from "../Estate/Estate";
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> Elite Residences Hub | Home </title>
            </Helmet>
            <Banner></Banner>
            <Estate></Estate>
        </div>
    );
};

export default Home;