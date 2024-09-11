import { useEffect, useState } from "react";
import { trpc } from "../shared/trpc/client";

export function TestComponent() {
  const [response, setResponse] = useState<string | null>(null);

  useEffect(() => {
    trpc.getUser.query("id_bilbo").then((data) => {
      setResponse(JSON.stringify(data));
    });
  }, []);

  return (
    <div>
      Test component <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}
