import "./globals.css";

export const metadata = {
  title: "郑佳乐 | AI 算法工程师",
  description: "专注大模型应用、NLP 与 Agentic RAG 的算法工程师个人网站。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
