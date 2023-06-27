import { Poppins } from "next/font/google";
import Footer from "./Footer";
import Navbar from "./Navbar";

const poppins = Poppins({
    weight: ["100", "200","300","400","500","600","700","800"],
    subsets: ['latin']
})

const Layout = ({ children }) => {
    return (
        <div className="max-w-[1440px] mx-auto">
        {/* Apply font in head */}
        <style jsx global>
            {`
                html {
                font-family: ${poppins.style.fontFamily};
                }
            `}
        </style>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;