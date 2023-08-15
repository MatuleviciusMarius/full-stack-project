import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import { Table, Paper } from "@mantine/core";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import axios from "axios";
import { formatDate } from "@/utils/util";
import Loading from "@/components/atoms/Loading/Loading";

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

  function showLoading() {
    if (userId && groupId) {
      return (
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
            <button type="submit" role="link">
              Mokėti
            </button>
          </form>
        </Paper>
      );
    } else {
      return <Loading />;
    }
  }

  return (
    <>
      <Header />
      {showLoading()}

      <Footer />
    </>
  );
}
