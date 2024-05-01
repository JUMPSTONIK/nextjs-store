"use client";
import { Description } from "app/components/home/Description";
import { Hero } from "app/components/home/Hero";
import { useEffect } from "react";

// el layout solo se genera 1 vez y no monta el resto de componentes, pero este 
// no efectuara ningun tipo de animacion o accion, como el envio de metrics

// los templates montan los componentes nuevamente, por lo que implican hacer 
// rendenring de todos los componentes, mas si no permite tener animacion o ejecucion 
// de algun proceso que se necesite al montar dicha pagina

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log("envio de metricas");
  }, []);

  console.log("HomeLayout");
  return (
    <div>
      <Hero />
      <Description />
      {children}
    </div>
  );
}
