'use client'

import { FC, PropsWithChildren, useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

const Child: FC<PropsWithChildren> = ({ children }) => {
    const [count, setCount] = useState(50);
    
    return (
        <Card className="bg-blue-100">
            <CardHeader>
            <CardTitle>Rendered on server and hydrated on client</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter className="gap-4">
                <Button onClick={() => setCount(count-10)}>-</Button>
                <Progress value={count} />
                <Button onClick={() => setCount(count+10)}>+</Button>
            </CardFooter>
        </Card>
    )
}

export default Child