'use client';

import { ArchDataGenerator } from '@/data/generator';
import { Graph } from '@antv/g6';
import { useEffect, useRef } from 'react';

export default () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const data = new ArchDataGenerator().generate();

        const graph = new Graph({
            container: containerRef.current!,
            autoFit: {
                type: 'view',
            },
            layout: {
                type: 'dagre',
                rankdir: 'LR',
                align: 'UR',
                nodesep: 100,
                ranksep: 150,
            },
            // layout: { type: 'random' },
            data: data,
        });

        graph.render();
        // graph.fitCenter();
    }, []);

    return (<div ref={containerRef} style={{ width: '100%', height: '100vh' }}
    />
    );
};