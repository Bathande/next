import { Amplify, API } from "aws-amplify";
import awsExports from "../src/aws-exports";
Amplify.configure({ ...awsExports, ssr: true });

export default function Home() {
  return (
    <div >
      <main>
       Tuman
      </main>

    </div>
  );
}
