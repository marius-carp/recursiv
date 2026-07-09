function Sidebar({
  operations,
  setOperations,
  range,
  setRange,
  totalQuestions,
  setTotalQuestions,
  layoutMode,
  setLayoutMode,
  title,
  setTitle,
  includeNameDate,
  setIncludeNameDate,
  onGenerate,
}) {
  const toggleOperation = (op) => {
    if (operations.includes(op)) {
      setOperations(operations.filter((o) => o !== op));
    } else {
      setOperations([...operations, op]);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const resetDefaults = () => {
    setOperations(['+']);
    setRange({ min: 0, max: 30 });
    setTotalQuestions(20);
    setLayoutMode('full');
    setTitle('Friday Math Quiz');
    setIncludeNameDate(true);
  };

  return (
    <div className="w-sidebar bg-surface-container-low border-r border-surface-container-high flex-shrink-0 overflow-y-auto print-hidden flex flex-col">
      <div className="p-6 flex-1">
        {/* Logo/Title */}
        <div className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
            calculate
          </span>
          <h1 className="text-xl font-semibold">Recursiv</h1>
        </div>

        {/* Print Button */}
        <button
          onClick={handlePrint}
          className="w-full bg-primary-container text-on-primary-container py-3 px-4 rounded font-semibold text-sm hover:opacity-90 transition-opacity mb-6 flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>print</span>
          Print / Save PDF
        </button>

        {/* Operations */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold mb-3">Operations</h2>
          <div className="grid grid-cols-4 gap-3">
            {['+', '-', '×', '÷'].map((op) => (
              <button
                key={op}
                onClick={() => toggleOperation(op)}
                className={`aspect-square flex items-center justify-center text-2xl rounded border-2 transition-all ${
                  operations.includes(op)
                    ? 'bg-primary-container text-on-primary-container border-primary-container'
                    : 'bg-white text-on-surface border-outline-variant hover:border-outline'
                }`}
              >
                {op}
              </button>
            ))}
          </div>
        </div>

        {/* Range */}
        <div className="mb-6">
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-xs text-on-surface-variant mb-1">From</label>
              <input
                type="number"
                value={range.min}
                onChange={(e) => setRange({ ...range, min: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-outline-variant rounded bg-white text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs text-on-surface-variant mb-1">To</label>
              <input
                type="number"
                value={range.max}
                onChange={(e) => setRange({ ...range, max: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2 border border-outline-variant rounded bg-white text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
              />
            </div>
          </div>
        </div>

        {/* Total Questions */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm text-on-surface-variant">Total Questions</label>
            <span className="text-sm font-semibold text-on-surface">{totalQuestions}</span>
          </div>
          <input
            type="range"
            min="5"
            max="50"
            value={totalQuestions}
            onChange={(e) => setTotalQuestions(parseInt(e.target.value))}
            className="w-full h-2 bg-surface-container-high rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #0078d4 0%, #0078d4 ${((totalQuestions - 5) / 45) * 100}%, #ebe7e5 ${((totalQuestions - 5) / 45) * 100}%, #ebe7e5 100%)`
            }}
          />
        </div>

        {/* Layout Configuration */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold mb-3">Layout Configuration</h2>
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: 'full', icon: 'crop_portrait', title: 'Full Page' },
              { value: 'half', icon: 'view_agenda', title: 'Half Page Split' },
              { value: 'quarter', icon: 'grid_view', title: 'Four Quadrants' },
            ].map((layout) => (
              <button
                key={layout.value}
                onClick={() => setLayoutMode(layout.value)}
                title={layout.title}
                className={`py-3 px-2 rounded border-2 text-sm transition-all flex items-center justify-center ${
                  layoutMode === layout.value
                    ? 'bg-primary-container text-on-primary-container border-primary-container'
                    : 'bg-white text-on-surface border-outline-variant hover:border-outline'
                }`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                  {layout.icon}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Document Details */}
        <div className="mb-6">
          <h2 className="text-sm font-semibold mb-3">Document Details</h2>
          <div className="mb-3">
            <label className="block text-xs text-on-surface-variant mb-1">Worksheet Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-outline-variant rounded bg-white text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20"
            />
          </div>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeNameDate}
              onChange={(e) => setIncludeNameDate(e.target.checked)}
              className="w-4 h-4 text-primary-container border-outline-variant rounded focus:ring-2 focus:ring-primary-container/20"
            />
            <span className="text-sm text-on-surface">Include Name & Date lines</span>
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={onGenerate}
          className="w-full bg-primary text-on-primary py-3 px-4 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Generate New Problems
        </button>
      </div>

      {/* Reset - Pinned to bottom */}
      <div className="mt-auto p-6 pt-0">
        <button
          onClick={resetDefaults}
          className="w-full py-2 px-3 text-primary flex items-center justify-center gap-2 font-semibold text-sm hover:bg-surface-container transition-colors rounded"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>restart_alt</span>
          Reset Defaults
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
