import ClientComponent from "@/components/Child";
import GrandChild from "@/components/GrandChild";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import os from 'node:os'

export default function Home() {
  const isServer = typeof window === 'undefined'
  return (
    <main className="h-full overflow-y-auto">
      <Card>
        <CardHeader>
          <CardTitle>{`Rendered on ${isServer ? 'server' : 'client'}`}</CardTitle>
        </CardHeader>
        <CardContent>
          <ClientComponent>
            <GrandChild />
          </ClientComponent>
        </CardContent>
        <CardFooter>
          {isServer ? `Platform ${os.platform()}, Host ${os.hostname()}` : window.location.hostname}
        </CardFooter>
      </Card>
    </main>
  );
}
