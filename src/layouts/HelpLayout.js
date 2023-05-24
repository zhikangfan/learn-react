import Header from "../components/Header";
import Footer from "../components/Footer";
function HelpLayout(props) {
    return <>
        <h1>HelpLayout</h1>
        <Header/>
        {props.children}
        <Footer/>
    </>
}

export default HelpLayout;