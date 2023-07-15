import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import { Table, Paper } from "@mantine/core";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import axios from "axios";
import { formatDate } from "@/utils/util";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
export default function PaymentPreview() {
  const [groupInfo, setGroupInfo] = useState({});
  const router = useRouter();
  const { userId, groupId } = router.query;

  useEffect(() => {
    if (groupId) {
      axios
        .get(`/api/group/getGroupInfo/${groupId}`)
        .then((response) => {
          setGroupInfo(response.data.group);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [groupId]);

  return (
    <>
      <Header />
      <Paper shadow="xs" p="md" className="payment-preview">
        <Table verticalSpacing="xs">
          <thead>
            <tr>
              <th>Produktas</th>
              <th>Kaina</th>
              <th>Pradžios data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kursai</td>
              <td>130.00€</td>
              <td>{formatDate(groupInfo.startDate)}</td>
            </tr>
          </tbody>
        </Table>
        <form action="/api/checkout_sessions" method="POST">
          <input type="hidden" name="userId" value={userId} />
          <input type="hidden" name="groupId" value={groupId} />
          <section>
            <button type="submit" role="link">
              Susismokėti
            </button>
          </section>
          <style jsx>
            {`
              section {
                background: #ffffff;
                display: flex;
                flex-direction: column;
                width: 400px;
                height: 112px;
                border-radius: 6px;
                justify-content: space-between;
              }
              button {
                height: 36px;
                background: #556cd6;
                border-radius: 4px;
                color: white;
                border: 0;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
                box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
              }
              button:hover {
                opacity: 0.8;
              }
            `}
          </style>
        </form>
      </Paper>

      <Footer />
    </>
  );
}
