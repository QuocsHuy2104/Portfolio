import './assets/styles/main.sass'
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import ScrollSmootherSetup from "./components/GSAP/ScrollSmootherSetup.tsx";
import Skill from "./pages/Skill";
import Service from "./pages/Service/Service.tsx";
import MyProject from "./pages/Project";

function App() {

    return (
        <>
            <Header/>
            <div id="smooth-wrapper">
                <div id="smooth-content">

                    <Home/>
                    <About/>
                    <Service />
                    <Skill />
                    <MyProject />
                    <Footer/>
                    <ScrollSmootherSetup/>
                </div>
            </div>
        </>
    )
}

export default App
