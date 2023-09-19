interface Params {
    params: {
        name: string
    }
}

export default function Information({params}: Params) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            Information about {params.name}
        </main>
    )
}
