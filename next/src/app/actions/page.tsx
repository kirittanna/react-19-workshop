"use client"

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { create } from "@/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Page() {
    const [state, formAction] = useActionState(create, null);

    return (
        <main className="h-full overflow-y-auto">
            <Card>
                <CardHeader>
                    <CardTitle>useOptimistic Hook</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={formAction} className="flex gap-4">
                        <Input type="text" name="message" className="flex-1" />
                        <Submit />
                    </form>
                    {state?.message && <p>{state.message}</p>}
                </CardContent>
                <CardFooter>

                </CardFooter>
            </Card>
        </main>
    )
}

function Submit() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            className={pending ? "text-gray-500" : "text-gray-300"}
        >
            Submit
        </Button>
    );
}