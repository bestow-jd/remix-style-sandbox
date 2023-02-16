import { Button } from "~/components/button/Button";
import { LoadingIcon } from "~/components/LoadingIcon/LoadingIcon";

export default function Index() {
  return (
    <main>
      <h1> Hello World </h1>
      <Button variant="primary">Primary</Button>
      <Button variant="outline">Outline</Button>
      <LoadingIcon />
    </main>
  );
}
