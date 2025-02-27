import ReservaCalendario from "@/app/components/ReservaCalendario";
import FormReserva from "@/app/components/FormReserva";

export default function Reservar() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8 p-10">
      <ReservaCalendario />
      <FormReserva />
    </div>
  );
}
