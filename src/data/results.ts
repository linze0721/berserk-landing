export interface PrResult {
  repo: string;
  stars: string;
  issueTitle: string;
  prUrl: string;
  prNumber: number;
}

export const results: PrResult[] = [
  {
    repo: "supabase/supabase",
    stars: "72K",
    issueTitle: "Studio misclassifies http:// auth hooks as Postgres hooks",
    prUrl: "https://github.com/supabase/supabase/pull/47153",
    prNumber: 47153,
  },
  {
    repo: "hoppscotch/hoppscotch",
    stars: "80K",
    issueTitle: "Environment variables not applied on collection level auth",
    prUrl: "https://github.com/hoppscotch/hoppscotch/pull/6458",
    prNumber: 6458,
  },
  {
    repo: "langchain-ai/langchainjs",
    stars: "18K",
    issueTitle: "Streaming text + tool call collide on content block indexes",
    prUrl: "https://github.com/langchain-ai/langchainjs/pull/11091",
    prNumber: 11091,
  },
  {
    repo: "misskey-dev/misskey",
    stars: "11K",
    issueTitle: "TOTP authentication failure returns 500 instead of client error",
    prUrl: "https://github.com/misskey-dev/misskey/pull/17594",
    prNumber: 17594,
  },
];
