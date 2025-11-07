import DashboardGrid from "./DashboardGrid";
import Footer from "./Footer";
import Navbar from "./Navbar"

const Home = () => {

    return(
        <div>
            <Navbar user="Thapelo Lebea"/>
            <DashboardGrid/>
            <Footer/>
        </div>
    );

};
export default Home;