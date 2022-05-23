import { motion } from "framer-motion";
import React from "react";
import { useBox } from "../../contexts/BoxContext";
import Button from "../../components/Button";
import Swal from "sweetalert2";

function Cart() {
  const { box, clearBox } = useBox();
  const completeOrder = () => {
    clearBox();
    Swal.fire({
      title: "Success",
      text: "We are preparing your order",
      icon: "success",
      confirmButtonText: "Cool",
      confirmButtonColor: "#316b83",
    });
  };
  return (
    <div className="cart">
      <article>
        <h3>e-Commerce Agreement</h3>
        <p>
          Electronic commerce offers new opportunities to improve the efficiency
          of business operations and to reduce costs associated with trade
          procedures, providing increased competitive advantages to the
          commercial actors ready to embrace new methods of work and trade.
          Emerging electronic commerce platforms and the use of the Internet
          provides users with a combination of technologies to communicate data,
          to contract electronically as well as to manage new business processes
          leading to new business models. The legal framework, which
          traditionally relies on paper-based business procedures and
          requirements such as hand-written signatures, is in the process of
          being adapted to these new technologies. At the global level, the
          availability of the United Nations Commission on International Trade
          Law (UNCITRAL) Model Law on electronic commerce adopted in 1996
          provides a framework to adapt legislation. International organisations
          such as the World Trade Organization (WTO), UNCITRAL, the Organization
          for Economic Co-operation and Development (OECD), the United Nations
          Conference on Trade and Development (UNCTAD), and the International
          Chamber of Commerce (ICC) are actively involved in discussions with
          governments and businesses to address a number of key legal issues
          raised by the emergence of a global marketplace for electronic
          commerce. At regional or local level, new laws are being proposed or
          enacted to address a number of these issues. Though the emerging legal
          framework of the global marketplace for electronic commerce, once
          completed, will contribute to the building of trust required for its
          further development, the use of electronic commerce still raises a
          number of issues which can be better addressed through a contractual
          process. II. Objectives With the objective of contributing to the
          building of trust between business entities and taking advantage of
          the experience gained with the EDI Interchange Agreement (UN/ECE
          Recommendation No. 26), UN/CEFACT adopted the following Recommendation
          at its sixth session in March 2000. The list of countries and
          organizations present at the session can be found in the Annex .
          UN/CEFACT is proposing with this Recommendation a model for a
          contractual approach of electronic commerce operations. This approach
          takes into consideration the need for a framework of basic provisions
          to be agreed by business entities combined with the flexibility
          required to conduct dayto-day commercial transactions. The Electronic
          Commerce Agreement, hereinafter referred to as the "E-Agreement", is
          intended to serve the commercial requirements of business to business
          electronic commerce partners. It contains a basic set of provisions
          which can ensure that one or more electronic commercial transactions,
          hereinafter referred to as "E-Transactions", may subsequently be
          concluded by commercial partners within a sound legal framework. The
          E-Agreement aims at addressing all forms of electronic communications
          available to conclude ETransactions. Commercial partners engaged into
          contractual relations based exclusively on EDI are recommended to
          continue to use the EDI Interchange Agreement. Commercial partners
          engaged in contractual relations based on the use of a combination of
          electronic commerce technologies including EDI are recommended to use
          the EAgreement and, to the extent necessary, replace the use of an EDI
          Interchange Agreement by the EAgreement. Limitations Though the
          E-Agreement could be used in relationships between businesses and
          consumers, it does not incorporate any provisions relating to consumer
          protection. Consumer protection law is generally mandatory and in most
          cases the consumer's national and local consumer protection law will
          be applicable when a consumer concludes a transaction. Businesses
          wishing to use the EAgreement for entering into contractual
          relationships with consumers must therefore recognize the need for
          compliance with national and local consumer protection laws.
          Furthermore, appropriate revisions will be required if the E-Agreement
          is to be used with administrative or official agencies.
        </p>
        <Button primary>I agree</Button>
      </article>
      <section className="cartItems">
        <h3>Cart</h3>
        {box.map((item) => (
          <motion.div key={item.id}>
            <span>{item.title}</span> -
            <span className="price"> ${item.price}</span>
          </motion.div>
        ))}
        <hr />
        {box.length > 0 && (
          <>
            <h4>
              Total:{" "}
              <span className="totalPrice">
                {" "}
                ${box.reduce((acc, obj) => acc + parseInt(obj.price), 0)}{" "}
              </span>
            </h4>

            <Button onClick={completeOrder} primary>
              {" "}
              Complete order{" "}
            </Button>
          </>
        )}
      </section>
    </div>
  );
}

export default Cart;
