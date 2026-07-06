import { Separator } from "../ui/separator";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-hankenGrotesk mx-auto max-w-3xl px-4 py-10">
      <Separator />
      <p className="text-muted-foreground mt-4 text-center">
        © {currentYear}{" "}
        <span className="text-foreground font-medium">Milan Koradiya</span>. All
        rights reserved.
      </p>
    </footer>
  );
}
