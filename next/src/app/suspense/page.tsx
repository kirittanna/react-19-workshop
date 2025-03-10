import { Suspense } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
    return (
        <main className="h-full overflow-y-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Suspense</CardTitle>
                </CardHeader>
                <CardContent>
                    <Suspense fallback={<span>Loading...</span>}>
                        <AsyncOperation />
                    </Suspense>
                </CardContent>
                <CardFooter>
                </CardFooter>
            </Card>
        </main>
    );
}

async function AsyncOperation() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return <span>loaded!</span>;
}