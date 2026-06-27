export interface PrResult {
  repo: string;
  stars: string;
  issueTitle: string;
  prUrl: string;
  prNumber: number;
}

export const results: PrResult[] = [
  {
    repo: "esengine/DeepSeek-Reasonix",
    stars: "25K",
    issueTitle: "兼容 PowerShell 7",
    prUrl: "https://github.com/esengine/DeepSeek-Reasonix/pull/4957",
    prNumber: 4957,
  },
  {
    repo: "DeusData/codebase-memory-mcp",
    stars: "16.6K",
    issueTitle: "fix: get_architecture should honor path scope",
    prUrl: "https://github.com/DeusData/codebase-memory-mcp/pull/614",
    prNumber: 614,
  },
  {
    repo: "codedogQBY/ReadAny",
    stars: "1.9K",
    issueTitle: "fix(chat): enable AI response text selection",
    prUrl: "https://github.com/codedogQBY/ReadAny/pull/486",
    prNumber: 486,
  },
  {
    repo: "HongShi2333/jmcomic-next",
    stars: "171",
    issueTitle: "支持图标伪装",
    prUrl: "https://github.com/HongShi2333/jmcomic-next/pull/7",
    prNumber: 7,
  },
];
