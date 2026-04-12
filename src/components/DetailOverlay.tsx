import { COUNTRIES } from '../data';
import { TRANSLATION_DEVICE_TYPES, INFRASTRUCTURE_TYPES } from '../data';
import type { GovernanceDocument, Country } from '../data';

interface DetailOverlayProps {
  documentId: string | null;
  onClose: () => void;
}

function findDocument(docId: string): { document: GovernanceDocument; country: Country } | null {
  for (const country of COUNTRIES) {
    const doc = country.documents.find(d => d.id === docId);
    if (doc) return { document: doc, country };
  }
  return null;
}

export function DetailOverlay({ documentId, onClose }: DetailOverlayProps) {
  if (!documentId) return null;

  const result = findDocument(documentId);
  if (!result) return null;

  const { document: doc, country } = result;
  const translationType = TRANSLATION_DEVICE_TYPES[doc.translationType];
  const isArtemis = doc.coalition === 'artemis';
  const accentColor = isArtemis ? 'accent-cyan' : 'accent-amber';
  const tagClass = isArtemis ? 'tag-cyan' : 'tag-amber';

  return (
    <div className="fixed inset-0 z-50 overlay-backdrop flex items-center justify-center p-6" onClick={onClose}>
      <div
        className="bg-bg-card border border-border-bright rounded-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`border-b border-border p-6 ${isArtemis ? 'border-l-4 border-l-accent-cyan' : 'border-l-4 border-l-accent-amber'}`}>
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`tag ${tagClass}`}>{doc.coalition.toUpperCase()}</span>
                <span className="data-mono text-[10px] text-text-muted">{doc.year}</span>
              </div>
              <h2 className="text-lg font-semibold text-text-primary">{doc.title}</h2>
              <p className="text-sm text-text-secondary mt-1">{country.name} ({country.code})</p>
            </div>
            <button
              onClick={onClose}
              className="text-text-muted hover:text-text-primary transition-colors text-xl leading-none p-1"
            >
              ×
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          {/* Characteristic Formulation — the core quote */}
          <div className={`border-l-4 ${isArtemis ? 'border-l-accent-cyan' : 'border-l-accent-amber'} bg-bg-primary rounded-r-lg p-4`}>
            <div className={`data-mono text-[10px] text-${accentColor} uppercase tracking-wider mb-2`}>
              Characteristic Formulation
            </div>
            <blockquote className="text-sm text-text-primary italic leading-relaxed">
              {doc.characteristicFormulation}
            </blockquote>
          </div>

          {/* Authority Mechanism */}
          <div className="bg-bg-primary border border-border rounded-lg p-4">
            <div className="data-mono text-[10px] text-accent-red uppercase tracking-wider mb-2">
              Authority Mechanism
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">{doc.authorityMechanism}</p>
          </div>

          {/* Translation Device */}
          <div className="grid grid-cols-2 gap-4">
            <div className="border border-border rounded-lg p-3">
              <div className="data-mono text-[10px] text-text-muted uppercase tracking-wider mb-1">
                Translation Device
              </div>
              <div className={`flex items-center gap-2`}>
                <span className={`tag tag-${translationType.color}`}>
                  {translationType.label}
                </span>
              </div>
              <p className="text-xs text-text-muted mt-2">{translationType.description}</p>
            </div>
            <div className="border border-border rounded-lg p-3">
              <div className="data-mono text-[10px] text-text-muted uppercase tracking-wider mb-1">
                Humanity Referent
              </div>
              <div className="text-sm text-text-primary capitalize">
                {doc.humanityReferent.replace('_', ' ')}
              </div>
              <p className="text-xs text-text-muted mt-2">
                {isArtemis
                  ? 'Artemis emphasizes "Safety and Standards" (Proceduralism)'
                  : 'ILRS emphasizes appeal to "all countries" (Inclusivity)'}
              </p>
            </div>
          </div>

          {/* Infrastructure Links */}
          <div className="border border-border rounded-lg p-3">
            <div className="data-mono text-[10px] text-text-muted uppercase tracking-wider mb-2">
              Infrastructure Links
            </div>
            <div className="flex flex-wrap gap-2">
              {doc.infrastructureLink.map(infra => (
                <span key={infra} className="data-mono text-xs px-2 py-1 rounded bg-bg-elevated border border-border text-text-secondary">
                  {INFRASTRUCTURE_TYPES[infra]?.label || infra}
                </span>
              ))}
            </div>
          </div>

          {/* The Double Movement for this country */}
          <div className="border-t border-border pt-4">
            <div className="data-mono text-[10px] text-text-muted uppercase tracking-wider mb-3">
              The Double Movement — {country.name}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-bg-primary rounded p-3 border border-accent-cyan/20">
                <div className="data-mono text-[10px] text-accent-cyan mb-1">UNIVERSAL CLAIM</div>
                <p className="text-xs text-text-secondary">{country.universalistClaim}</p>
              </div>
              <div className="bg-bg-primary rounded p-3 border border-accent-red/20">
                <div className="data-mono text-[10px] text-accent-red mb-1">SPECIFIC AUTHORITY</div>
                <p className="text-xs text-text-secondary">{country.specificAuthority}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
