'use client'

import { useState } from "react";
import { Card } from "./ui/Card";
import { Form } from "./ui/Form";


export default function Home() {
  const [textResponse, setTextResponse] = useState<string>('');

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-center py-8 text-2xl">Audio a texto</h1>
      <Card>
        <h1 className="text-center py-8 text-2xl">Archivo de audio</h1>
        <Form textResponse={setTextResponse}  />
      </Card>
      {textResponse && (
        <Card className="mt-4">
          <h1 className="text-center py-8 text-2xl">Resultado</h1>
          <p>{textResponse}</p>
        </Card>
      )}
    </main>
  );
}
