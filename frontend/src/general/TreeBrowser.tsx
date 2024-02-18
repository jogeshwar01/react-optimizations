import { useState } from "react";

const files = {
    children: [
        {
            name: "node_modules",
            children: [
                {
                    name: "joi",
                    children: [
                        {
                            name: "joi_node_modules",
                        },
                        {
                            name: "joi_package.json",
                        },
                    ],
                },
            ],
        },
        {
            name: "package.json",
        },
        {
            name: "vite.config.ts",
        },
    ],
};

type TEntry = {
    name: string;
    children?: TEntry[];
};

function Entry({ entry, depth }: { entry: TEntry; depth: number }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div style={{ padding: "5px" }}>
            {entry.children && (
                <button onClick={() => setIsExpanded(!isExpanded)}>
                    <span>+ </span>
                </button>
            )}
            {"  "}
            {entry.name}

            {isExpanded && (
                <div style={{ paddingLeft: `${depth * 10}px` }}>
                    {entry.children?.map((child) => {
                        return <Entry entry={child} depth={depth + 1} />;
                    })}
                </div>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            {files.children.map((entry) => {
                return <Entry entry={entry} depth={1} />;
            })}
        </div>
    );
}

export default App;
