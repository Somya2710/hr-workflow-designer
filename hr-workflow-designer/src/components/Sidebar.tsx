export const Sidebar = () => {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  const nodeTypes = ['start', 'task', 'approval', 'auto', 'end'];

  return (
    <aside className="sidebar">
      <h3>Nodes</h3>
      {nodeTypes.map(type => (
        <div 
          key={type}
          onDragStart={(e) => onDragStart(e, type)} 
          draggable 
          className="dnd-node"
        >
          {type.toUpperCase()}
        </div>
      ))}
    </aside>
  );
};