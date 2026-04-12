import { useState } from 'react';
import { DISCRETION_POINTS, DISCRETION_TYPE_LABELS } from '../data';
import type { DiscretionPoint, DiscretionType } from '../data';

interface DiscretionRegistryProps {
  onSelectDocument: (docId: string) => void;
}

function getCoalitionStyle(coalition: string) {
  switch (coalition) {
    case 'artemis': return { tag: 'tag-cyan', text: 'text-accent-cyan' };
    case 'ilrs': return { tag: 'tag-amber', text: 'text-accent-amber' };
    case 'national': return { tag: 'tag-red', text: 'text-accent-red' };
    default: return { tag: 'tag-cyan', text: 'text-text-secondary' };
  }
}

function TypeBadge({ type }: { type: DiscretionType }) {
  const colors: Record<DiscretionType, string> = {
    open_ended_qualifier: 'border-accent-red/40 text-accent-red bg-accent-red/5',
    procedural_deferral: 'border-accent-cyan/40 text-accent-cyan bg-accent-cyan/5',
    definitional_gap: 'border-accent-amber/40 text-accent-amber bg-accent-amber/5',
    interpretive_monopoly: 'border-accent-red/60 text-accent-red bg-accent-red/10',
    carve_out: 'border-text-muted/40 text-text-secondary bg-bg-primary',
  };
  return (
    <span className={`data-mono text-[10px] px-2 py-0.5 rounded border ${colors[type]}`}>
      {DISCRETION_TYPE_LABELS[type]}
    </span>
  );
}

function ExpandedRow({ point }: { point: DiscretionPoint }) {
  const style = getCoalitionStyle(point.coalition);
  return (
    <div className="bg-bg-primary border border-border-bright rounded-lg p-4 mt-2 space-y-3">
      {/* Characteristic Formulation */}
      <div className="border-l-2 border-accent-red pl-3">
        <div className="data-mono text-[10px] text-accent-red uppercase tracking-wider mb-1">
          Characteristic Formulation
        </div>
        <p className="text-sm text-text-primary italic leading-relaxed">
          {point.characteristicFormulation}
        </p>
      </div>

      {/* Implication */}
      <div>
        <div className="data-mono text-[10px] text-text-muted uppercase tracking-wider mb-1">
          Implication for Authority
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">{point.implication}</p>
      </div>

      {/* Metadata row */}
      <div className="flex items-center gap-4 pt-2 border-t border-border">
        <div>
          <span className="data-mono text-[10px] text-text-muted">DOCUMENT: </span>
          <span className="data-mono text-xs text-text-primary">{point.documentId}</span>
        </div>
        <div>
          <span className="data-mono text-[10px] text-text-muted">SECTION: </span>
          <span className="data-mono text-xs text-text-primary">{point.section}</span>
        </div>
        <div>
          <span className="data-mono text-[10px] text-text-muted">COALITION: </span>
          <span className={`data-mono text-xs ${style.text}`}>{point.coalition.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
}

export function DiscretionRegistry(_props: DiscretionRegistryProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<DiscretionType | 'all'>('all');
  const [filterCoalition, setFilterCoalition] = useState<string>('all');

  const filtered = DISCRETION_POINTS.filter(p => {
    if (filterType !== 'all' && p.type !== filterType) return false;
    if (filterCoalition !== 'all' && p.coalition !== filterCoalition) return false;
    return true;
  });

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="border-b border-border pb-4">
        <h2 className="text-xl font-semibold text-text-primary mb-1">Discretion Point Registry</h2>
        <p className="text-sm text-text-secondary">
          Forensic analysis of terms where <span className="text-accent-red">power is deferred</span> — ambiguous language that concentrates interpretive authority
        </p>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="data-mono text-[10px] text-text-muted uppercase">Type:</span>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value as DiscretionType | 'all')}
            className="bg-bg-card border border-border rounded px-2 py-1 text-xs text-text-primary"
          >
            <option value="all">All Types</option>
            {Object.entries(DISCRETION_TYPE_LABELS).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <span className="data-mono text-[10px] text-text-muted uppercase">Coalition:</span>
          <select
            value={filterCoalition}
            onChange={(e) => setFilterCoalition(e.target.value)}
            className="bg-bg-card border border-border rounded px-2 py-1 text-xs text-text-primary"
          >
            <option value="all">All</option>
            <option value="artemis">Artemis</option>
            <option value="ilrs">ILRS</option>
            <option value="national">National</option>
            <option value="ost">OST</option>
          </select>
        </div>
        <span className="text-text-muted data-mono text-[10px] ml-auto">
          {filtered.length} DISCRETION POINTS
        </span>
      </div>

      {/* Table */}
      <div className="space-y-2">
        {/* Header Row */}
        <div className="grid grid-cols-[200px_1fr_180px_200px] gap-3 px-3 py-2 text-[10px] data-mono text-text-muted uppercase tracking-wider border-b border-border">
          <span>Term</span>
          <span>Document</span>
          <span>Type</span>
          <span>Discretion Holder</span>
        </div>

        {/* Data Rows */}
        {filtered.map((point) => {
          const style = getCoalitionStyle(point.coalition);
          const isExpanded = expandedId === point.id;
          return (
            <div key={point.id}>
              <div
                className={`grid grid-cols-[200px_1fr_180px_200px] gap-3 px-3 py-3 rounded-lg cursor-pointer transition-all ${
                  isExpanded
                    ? 'bg-bg-elevated border border-border-bright'
                    : 'hover:bg-bg-card border border-transparent'
                }`}
                onClick={() => setExpandedId(isExpanded ? null : point.id)}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-sm font-medium ${style.text}`}>
                    {point.term}
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="data-mono text-xs text-text-secondary truncate">
                    {point.document} — {point.section}
                  </span>
                </div>
                <div className="flex items-center">
                  <TypeBadge type={point.type} />
                </div>
                <div className="flex items-center">
                  <span className="text-xs text-text-secondary truncate">{point.holder}</span>
                </div>
              </div>
              {isExpanded && <ExpandedRow point={point} />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
