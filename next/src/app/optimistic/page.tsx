"use client"

import { useOptimistic, useRef, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Message, post } from "@/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type OptimisticMessage = Message & { sending: boolean };

export default function Page() {
    const ref = useRef<HTMLFormElement>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [optimisticMessages, addOptimisticMessage] = useOptimistic<
        OptimisticMessage[]
    >(
        messages,
        // @ts-expect-error type definition is wrong
        (state: Message[], newMessage: string) => [
            ...state,
            { message: newMessage, sending: true },
        ],
    );

    const onSubmit = async (formData: FormData) => {
        const message = formData.get("message");

        if (typeof message === "string" && message.length > 0) {
            addOptimisticMessage(message);
            setMessages((messages) => [...messages, { message }]);
            ref?.current?.reset();
            await post(message);
        }
    };

    return (
        <main className="h-full overflow-y-auto">
            <Card>
                <CardHeader>
                    <CardTitle>useOptimistic Hook</CardTitle>
                </CardHeader>
                <CardContent>
                    <form action={onSubmit} ref={ref} className="flex gap-4 mb-2">
                        <Input type="text" name="message" className="flex-1" />
                        <Button type="submit">Submit</Button>
                    </form>
                    {optimisticMessages.map(({ message, sending }, i) => (
                        // biome-ignore lint: i is key
                        <div key={`${message}_${i}`} className="relative m-8 max-w-80 rounded-lg bg-blue-500 p-4 text-white">
                            {message}
                            {sending && <small> (Sending...)</small>}
                            <div className="absolute z-10">
                                <div className="rounded-sm before:absolute before:-bottom-2.5 before:-left-5 before:h-4 before:w-4 before:-rotate-45 before:transform before:border-l-2 before:border-t-2 before:border-blue-500 before:bg-blue-500"> </div>
                            </div>
                        </div>
                    ))}
                </CardContent>
                <CardFooter>

                </CardFooter>
            </Card>
        </main>
    )
}