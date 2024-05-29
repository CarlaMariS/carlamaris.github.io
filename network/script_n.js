const s = new sigma({
    container: 'container',
    settings: {
        defaultNodeColor: '#ec5148',
        defaultEdgeColor: '#c0c0c0',
        edgeColor: 'default'
    }
});

s.graph.read({
    nodes: [
        { id: 'n0', label: 'Node 0', x: 0, y: 0, size: 1 },
        { id: 'n1', label: 'Node 1', x: 1, y: 1, size: 1 },
        { id: 'n2', label: 'Node 2', x: 1, y: 0, size: 1 },
        { id: 'n3', label: 'Node 3', x: 0, y: 1, size: 1 }
    ],
    edges: [
        { id: 'e0', source: 'n0', target: 'n1' },
        { id: 'e1', source: 'n1', target: 'n2' },
        { id: 'e2', source: 'n2', target: 'n3' },
        { id: 'e3', source: 'n3', target: 'n0' }
    ]
});

s.refresh();

s.bind('clickNode', function(e) {
    alert(`Node clicked: ${e.data.node.label}`);
});
