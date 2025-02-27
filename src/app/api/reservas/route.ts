import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

// Método GET: Buscar todas as reservas
export async function GET() {
  try {
    const reservasRef = collection(db, "reservas");
    const reservasSnapshot = await getDocs(reservasRef);
    
    const reservas = reservasSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json(reservas);
  } catch (error) {
    return NextResponse.json({ error: "Erro ao buscar reservas" }, { status: 500 });
  }
}

// Método POST: Criar nova reserva
export async function POST(req: Request) {
  try {
    const { nome, email, data } = await req.json();

    if (!nome || !email || !data) {
      return NextResponse.json({ error: "Faltam dados!" }, { status: 400 });
    }

    // Criar referência à coleção
    const reservasRef = collection(db, "reservas");

    // Verificar se a data já está reservada
    const reservaQuery = query(reservasRef, where("data", "==", data));
    const reservaExistente = await getDocs(reservaQuery);

    if (!reservaExistente.empty) {
      return NextResponse.json({ error: "Data já reservada!" }, { status: 400 });
    }

    // Criar nova reserva
    await addDoc(reservasRef, { nome, email, data });

    return NextResponse.json({ message: "Reserva criada com sucesso!" }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: "Erro ao criar reserva" }, { status: 500 });
  }
}
