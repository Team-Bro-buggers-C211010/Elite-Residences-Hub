import Banner from "../../components/Banner/Banner";
import Estate from "../Estate/Estate";
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Estate></Estate>
        </div>
    );
};

export default Home;