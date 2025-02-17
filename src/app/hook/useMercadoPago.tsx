import { useEffect } from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { useRouter } from "next/navigation";

const useMercadoPago = () => {
  const router = useRouter();
    debugger
  useEffect(() => {
    initMercadoPago(process.env.NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY!);
  }, []);

  async function createMercadoPagoCheckout(checkoutData: any) {
    debugger
    try {
      const response = await fetch("/api/mercadopago/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(checkoutData),
      });

      const data = await response.json();

      router.push(data.initPoint);
    } catch (error) {
      console.log(error);
    }
  }

  return { createMercadoPagoCheckout };
};

export default useMercadoPago;