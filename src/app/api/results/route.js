export async function GET() {
  const fakeResults = {
    patientName: "Juan Pérez",
    score: 87,
    movements: 124,
    comment: "Mejoría significativa respecto a la sesión anterior ✅",
  };

  return Response.json(fakeResults);
}
