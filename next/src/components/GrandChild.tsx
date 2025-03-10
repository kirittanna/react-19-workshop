import { FC, PropsWithChildren } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import os from 'node:os'

const GrandChild: FC<PropsWithChildren> = ({ children }) => {
    const isServer = typeof window === 'undefined'
    return (
        <Card>
            <CardHeader>
            <CardTitle>{`Rendered on ${isServer ? 'server' : 'client'}`}</CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                {isServer ? `${os.cpus().length} cores ${os.totalmem()/(1024 * 1024 * 1024)} gb memory` : window.location.hostname}
            </CardFooter>
        </Card>
    )
}

export default GrandChild