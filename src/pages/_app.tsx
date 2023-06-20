import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "@/aws-exports";
import "../styles/globals.css";
Amplify.configure(awsExports);

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withAuthenticator(App);
