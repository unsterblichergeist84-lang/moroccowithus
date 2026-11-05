import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-accent-600">
        404
      </p>
      <h1 className="mt-2 text-3xl font-semibold text-dune-900">
        This page has drifted off the map
      </h1>
      <p className="mt-3 max-w-md text-dune-600">
        The page you are looking for does not exist. Try the tours, or get in
        touch and we will point you the right way.
      </p>
      <div className="mt-6 flex gap-4">
        <Link
          href="/tours"
          className="btn-primary"
        >
          Browse tours
        </Link>
        <Link
          href="/"
          className="btn-outline"
        >
          Home
        </Link>
      </div>
    </Container>
  );
}
