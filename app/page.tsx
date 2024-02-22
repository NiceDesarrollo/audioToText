import { Card } from "./ui/Card";
import Form from "./ui/Form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <h1 className="text-center py-8 text-2xl">Archivo de audio</h1>
        <Form/>
      </Card>
    </main>
  );
}
