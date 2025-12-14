'use client';

import { Graph } from '@antv/g6';
import { useEffect, useRef } from 'react';

export default () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const graph = new Graph({
            container: containerRef.current!,
            layout: { type: 'dagre' },
            width: 500,
            height: 500,
            data: {
                nodes: [
                    {
                        id: 'node-1',
                        // style: { x: 50, y: 100 },
                    },
                    {
                        id: 'node-2',
                        // style: { x: 150, y: 100 },
                    },
                    {
                        id: 'node-3',
                    }
                ],
                edges: [
                    { id: 'edge-1', source: 'node-1', target: 'node-2' },
                    { id: 'edge-2', source: 'node-1', target: 'node-3' },
                    { id: 'edge-3', source: 'node-1', target: 'node-3' }
                ],
            },
        });

        graph.render();
    }, []);

    return <div ref={containerRef} />;
};