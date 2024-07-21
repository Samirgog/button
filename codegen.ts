import type { CodegenConfig } from "@graphql-codegen/cli";
import * as dotenv from "dotenv";

dotenv.config();

const config: CodegenConfig = {
  overwrite: true,
  schema: import.meta.env.VITE_PUBLIC_API_URL,
  documents: ["src/**/queries.{ts, graphql}"],
  generates: {
    "src/shared/generated/index.ts": {
      plugins: ["typescript", "typescript-react-query", "typescript-operations"],
      config: {
        interfacePrefix: "T",
        typesPrefix: "T",
        skipTypename: true,
        declarationKind: "type",
        noNamespaces: true,
        pureMagicComment: true,
        exposeQueryKeys: true,
        exposeFetcher: true,
        withHooks: true,
        dedupeFragments: true,
        fetcher: "graphql-request"
      }
    },
    "src/shared/generated/schema.graphql": {
      plugins: ["schema-ast"]
    }
  }
};

export default config;
