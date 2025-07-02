import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { executePayPalPayment } from "../../store/shop/order-slice/index.js";
import { useToast } from "../../components/ui/use-toast";

function PayPalReturn() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const paymentId = searchParams.get("paymentId");
    const payerId = searchParams.get("PayerID");

    if (paymentId && payerId) {
      dispatch(executePayPalPayment({ paymentId, payerId }))
        .then((res) => {
          if (res?.payload?.success) {
            toast({ title: "Payment successful. Order placed!", variant: "default" });
            navigate("/shop/account");
          } else {
            toast({ title: "Payment failed.", variant: "destructive" });
            navigate("/shop");
          }
        })
        .catch(() => {
          toast({ title: "Error executing payment.", variant: "destructive" });
          navigate("/shop");
        });
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-[400px]">
      <p className="text-lg font-semibold">Completing your payment...</p>
    </div>
  );
}

export default PayPalReturn;
