import { useQuery } from "react-query";
import { getOrderFromId } from "../services/api/order";
import { useParams } from "react-router-dom";
import React, { Suspense } from "react";
import Loader from "../components/atoms/Loader";
import ErrorTypo from "../components/atoms/ErrorTypo";

const OrderCompleteTemplate = React.lazy(() =>
  import("../components/templates/OrderCompleteTemplate")
);

const OrderCompletePage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useQuery("order-check", () => {
    return getOrderFromId(id);
  });
  return !error ? (
    <Suspense fallback={<Loader />}>
      <OrderCompleteTemplate data={data} />
    </Suspense>
  ) : (
    <ErrorTypo />
  );
};
export default OrderCompletePage;
