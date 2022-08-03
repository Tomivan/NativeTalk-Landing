import React from "react";
import Confirm from "../../components/confirm/confirm.component";
import FAQs from "../../components/FAQs/FAQs.component";
import Footer from "../../components/footer/footer.component";

const ConfirmYourOrder = () => {
    return(
        <div>
            <Confirm />
            <FAQs />
            <Footer />
        </div>
    )
}

export default ConfirmYourOrder;