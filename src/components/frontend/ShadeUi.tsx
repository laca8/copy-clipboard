import React, { useState, useRef } from "react";
import { Clipboard, Check } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import data from "../../data/front";

const DocsTemplate = () => {
    const mainRef = useRef<HTMLDivElement>(null)
    const [copiedCode, setCopiedCode] = useState("");

    const handleCopy = (text: string) => {
        setCopiedCode(text);
        setTimeout(() => setCopiedCode(""), 2000); // Reset after 2 seconds
    };

    const CodeBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
        <div className="relative mt-4 rounded-lg bg-zinc-900 p-4">
            <div className="flex items-center space-x-2 text-zinc-400">
                <span className="text-sm">npm</span>

                <CopyToClipboard
                    text={children as string}
                    onCopy={() => handleCopy(children as string)}>
                    <button
                        className="absolute right-4 top-4 p-1 hover:text-white"
                        aria-label="Copy to clipboard">
                        {copiedCode === children ? (
                            <Check className="h-4 w-4 text-green-500" />
                        ) : (
                            <Clipboard className="h-4 w-4" />
                        )}
                    </button>
                </CopyToClipboard>
            </div>
            <pre className="mt-3 overflow-x-auto text-sm text-white">{children}</pre>
        </div>
    );
    const handleScrollCreate = () => {
        console.log(mainRef);

        mainRef.current?.scroll({
            top: 0,
            left: 200,
            behavior: "smooth",
        });
    };
    const handleScrollTailwind = () => {
        mainRef.current?.scroll({
            top: 300,
            left: 200,
            behavior: "smooth",
        });
    };
    const handleScrollPackages = () => {
        mainRef.current?.scroll({
            top: 3200,
            left: 200,
            behavior: "smooth",
        });
    };
    const handleScrollStore = () => {
        mainRef.current?.scroll({
            top: 5400,
            left: 200,
            behavior: "smooth",
        });
    };
    return (
        <div className="flex min-h-screen bg-black text-white">
            {/* Sidebar */}
            <aside className="w-64 border-r border-zinc-800 p-6  ">
                <nav className="space-y-1">
                    <div className="mb-6">
                        <h3 className="mb-3 font-medium">Getting Started</h3>
                        <ul className="space-y-2 cursor-pointer">
                            <li className="text-zinc-400 hover:text-white" onClick={handleScrollCreate}>Create Vite app</li>
                            <li className="text-zinc-400 hover:text-white" onClick={handleScrollTailwind}>Installation Tailwindcss</li>
                            <li className="text-zinc-400 hover:text-white" onClick={handleScrollPackages}>
                                Installation Dependancies
                            </li>
                            <li className="text-zinc-400 hover:text-white" onClick={handleScrollStore}>
                                Store.ts
                            </li>
                        </ul>
                    </div>

                </nav>
            </aside>

            {/* Main content */}
            <main ref={mainRef} className="flex-1 p-8 h-[100vh] overflow-auto">
                <div className="mb-6">
                    <h1 className="mb-4 text-4xl font-bold">Vite</h1>
                    <p className="text-zinc-400">Install and configure Vite.</p>
                </div>

                <div className="mt-8 space-y-8">
                    {
                        data?.map((x, i) => (
                            <section key={i}>
                                <h2 className="flex items-center text-xl font-semibold">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-700 mr-4">
                                        {i + 1}
                                    </span>

                                </h2>
                                <p className="mt-4 text-zinc-400">
                                    {x.title}
                                    <code className="rounded bg-zinc-800 px-1.5 py-0.5">{x.feature}</code>:
                                </p>
                                <CodeBlock>
                                    {x.desc}
                                </CodeBlock>
                            </section>
                        ))
                    }


                </div>
            </main>
        </div>
    );
};

export default DocsTemplate;
