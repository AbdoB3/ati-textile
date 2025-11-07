export default function StatsSection() {
    return (
        <section>
            <div className="pb-24">
                <div className="mx-auto max-w-5xl px-6">
                    <h2 className="sr-only">Tailark in stats</h2>
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                        <div className="space-y-0.5 md:text-center">
                            <div className="text-primary text-4xl font-bold">15+</div>
                            <p className="text-muted-foreground">Ans dans l’industrie textile</p>
                        </div>
                        <div className="space-y-0.5 md:text-center">
                            <div className="text-primary text-4xl font-bold"> 1 500+</div>
                            <p className="text-muted-foreground">Références matières & tissus</p>
                        </div>
                        <div className="col-span-2 border-t pt-4 md:border-l md:border-t-0 md:pl-12 md:pt-0">
                            <p className="text-muted-foreground text-balance text-lg">Votre partenaire textile de référence pour projets industriels et production professionnelle.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}