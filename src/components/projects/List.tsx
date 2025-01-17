import React, { useState, useRef } from "react";
import { Clipboard, Check } from "lucide-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import data from "../../data/projects";

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
                <span className="text-sm">Mern Stack</span>

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
    const handleVercelFront = () => {
        mainRef.current?.scroll({
            top: 450,
            left: 200,
            behavior: "smooth",
        });
    };
    const handleVercelBack = () => {
        mainRef.current?.scroll({
            top: 800,
            left: 200,
            behavior: "smooth",
        });
    };
    const handlePackage = () => {
        mainRef.current?.scroll({
            top: 1500,
            left: 200,
            behavior: "smooth",
        });
    };
    const handleNetlify = () => {
        mainRef.current?.scroll({
            top: 2000,
            left: 200,
            behavior: "smooth",
        });
    };

    return (
        <div className="flex min-h-screen bg-indigo-950 text-white">
            {/* Sidebar */}
            <aside className="w-64 border-r border-indigo-500 p-6  ">
                <nav className="space-y-1">
                    <div className="mb-6">
                        <h3 className="mb-3 font-medium">Getting Started</h3>
                        <ul className="space-y-2 cursor-pointer">
                            <li className="text-zinc-400 hover:text-white " onClick={handleScrollCreate}>Deploy in github</li>
                            <li className="text-zinc-400 hover:text-white" onClick={handleVercelFront}>Vercel Frontend</li>
                            <li className="text-zinc-400 hover:text-white" onClick={handleVercelBack}>
                                Vercel Backend
                            </li>
                            <li className="text-zinc-400 hover:text-white" onClick={handlePackage}>
                                Package.json
                            </li>
                            <li className="text-zinc-400 hover:text-white" onClick={handleNetlify}>
                                Netlify
                            </li>

                        </ul>
                    </div>

                </nav>
            </aside>

            {/* Main content */}
            <main ref={mainRef} className="flex-1 p-8 h-[100vh] overflow-auto">
                <div className="mb-6">
                    <h1 className="mb-4 text-4xl font-bold">Projects</h1>
                    <p className="text-zinc-400">My work</p>
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
                                <p className="mt-4 text-white">
                                    {x.title}
                                    {
                                        x.tags.map((x, i) => (<code className="rounded bg-indigo-800 px-1.5 py-0.5 ml-2 hover:bg-indigo-950 transition-all duration-300 cursor-pointer " key={i}>{x}</code>))
                                    }

                                </p>
                                <CodeBlock >

                                    <span className="px-1.5 py-0.5">

                                        {x.link}
                                    </span>
                                    <img src={x.image} className="w-32 h-32 px-1.5 py-0.5 rounded-xl hover:translate-x-10 transition-all duration-300 cursor-pointer shadow-xl border-2 border-indigo-700" />
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
