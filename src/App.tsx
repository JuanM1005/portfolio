import {
  Badge,
  Button,
  Card,
  Container,
  SectionContainer,
} from './components/ui';

const App = () => {
  return (
    <main className="min-h-svh bg-background py-16 text-neutral-900">
      <Container>
        {/* SectionHeader */}
        <section className="mb-10">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
            SectionHeader
          </h3>
          <SectionContainer
            eyebrowNumber="01"
            eyebrowLabel="Sobre mí"
            title="Desarrollador Frontend con pasión por el diseño."
            description="Me especializo en crear interfaces modernas, accesibles y bien estructuradas."
          />
        </section>

        {/* Cards */}
        <section className="mb-10">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Card
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Card variant="default">
              <p className="text-sm font-medium">Card — default</p>
              <p className="mt-1 text-xs text-neutral-500">
                Variante con fondo y sombra sutil.
              </p>
            </Card>
            <Card variant="ghost">
              <p className="text-sm font-medium">Card — ghost</p>
              <p className="mt-1 text-xs text-neutral-500">
                Variante con fondo apagado y borde suave.
              </p>
            </Card>
          </div>
        </section>

        {/* Badges */}
        <section className="mb-10">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Badge
          </h3>
          <div className="flex flex-wrap gap-3">
            <Badge variant="available" withDot>
              Disponible
            </Badge>
            <Badge variant="progress" withDot>
              En progreso
            </Badge>
            <Badge variant="upcoming">Próximamente</Badge>
            <Badge variant="neutral">Neutral</Badge>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-10">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Button
          </h3>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="primary" leftIcon="→">
              Con ícono
            </Button>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default App;
