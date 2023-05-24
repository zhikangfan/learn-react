import Header from "../components/Header";
import Footer from "../components/Footer";
function DefaultLayout(props) {
    return <>
        <h1>Default Layout</h1>
        <Header/>
        <div>{props.children}</div>
        <Footer/>
    </>
}

export default DefaultLayout;