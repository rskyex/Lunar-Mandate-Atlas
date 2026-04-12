import { COUNTRIES, HUMANITY_REFERENTS } from '../data';
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
  const referentInfo = HUMANITY_REFERENTS[doc.humanityReferent];
  const isArtemis = doc.coalition === 'artemis';
  const tagClass = isArtemis ? 'tag-cyan' : 'tag-amber';

  return (
    <div className="fixed inset-0 z-50 overlay-backdrop flex items-center justify-center p-6" onClick={onClose}>
      <div
        className="bg-bg-card border border-border-bright rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
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
            <div className={`data-mono text-[10px] ${isArtemis ? 'text-accent-cyan' : 'text-accent-amber'} uppercase tracking-wider mb-2`}>
              Characteristic Formulation
            </div>
            <blockquote className="text-sm text-text-primary italic leading-relaxed">
              {doc.characteristicFormulation}
            </blockquote>
          </div>

          {/* ═══ STAGE 1: Humanity Construction ═══ */}
          <div className="border border-accent-cyan/20 rounded-lg overflow-hidden">
            <div className="bg-accent-cyan/5 px-4 py-2 border-b border-accent-cyan/20 flex items-center gap-2">
              <span className="data-mono text-accent-cyan text-[10px] font-semibold bg-accent-cyan/10 px-2 py-0.5 rounded">STAGE 1</span>
              <span className="data-mono text-[10px] text-accent-cyan uppercase tracking-wider">Humanity Construction</span>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <div className="data-mono text-[10px] text-text-muted uppercase mb-1">Referent — Who does this document represent?</div>
                <p className="text-sm text-text-primary">{doc.stage1.referent}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="data-mono text-[10px] text-text-muted uppercase mb-1">Referent Category</div>
                  <span className="tag tag-cyan">{referentInfo.label}</span>
                  <p className="text-xs text-text-muted mt-1">{referentInfo.description}</p>
                </div>
                <div>
                  <div className="data-mono text-[10px] text-text-muted uppercase mb-1">Audience Target</div>
                  <p className="text-xs text-text-secondary">{doc.stage1.audienceTarget}</p>
                </div>
              </div>
            </div>
          </div>

          {/* ═══ STAGE 2: Legitimacy Production ═══ */}
          <div className="border border-accent-amber/20 rounded-lg overflow-hidden">
            <div className="bg-accent-amber/5 px-4 py-2 border-b border-accent-amber/20 flex items-center gap-2">
              <span className="data-mono text-accent-amber text-[10px] font-semibold bg-accent-amber/10 px-2 py-0.5 rounded">STAGE 2</span>
              <span className="data-mono text-[10px] text-accent-amber uppercase tracking-wider">Legitimacy Production</span>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <div className="data-mono text-[10px] text-text-muted uppercase mb-1">Justificatory Vocabulary — The &ldquo;magic words&rdquo;</div>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {doc.stage2.justificatoryVocabulary.map((word) => (
                    <span key={word} className="tag tag-amber">{word}</span>
                  ))}
                </div>
              </div>
              <div>
                <div className="data-mono text-[10px] text-text-muted uppercase mb-1">Translation Device</div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`tag tag-${translationType.color}`}>{translationType.label}</span>
                  <span className="text-xs text-text-muted">{translationType.description}</span>
                </div>
              </div>
              <div>
                <div className="data-mono text-[10px] text-text-muted uppercase mb-1">Legitimation Narrative</div>
                <p className="text-sm text-text-secondary leading-relaxed">{doc.stage2.legitimationNarrative}</p>
              </div>
            </div>
          </div>

          {/* ═══ STAGE 3: Authority Architecture ═══ */}
          <div className="border border-accent-red/20 rounded-lg overflow-hidden">
            <div className="bg-accent-red/5 px-4 py-2 border-b border-accent-red/20 flex items-center gap-2">
              <span className="data-mono text-accent-red text-[10px] font-semibold bg-accent-red/10 px-2 py-0.5 rounded">STAGE 3</span>
              <span className="data-mono text-[10px] text-accent-red uppercase tracking-wider">Authority Architecture</span>
            </div>
            <div className="p-4 space-y-3">
              <div>
                <div className="data-mono text-[10px] text-accent-red uppercase mb-1">Interpretive Control — Who defines the ambiguous terms?</div>
                <p className="text-sm text-text-primary font-medium">{doc.stage3.interpretiveControl}</p>
              </div>
              <div>
                <div className="data-mono text-[10px] text-text-muted uppercase mb-1">Discretion Mechanism</div>
                <p className="text-sm text-text-secondary leading-relaxed">{doc.stage3.discretionMechanism}</p>
              </div>
              <div className="border-l-2 border-accent-red/50 pl-3">
                <div className="data-mono text-[10px] text-accent-red uppercase mb-1">Power Effect</div>
                <p className="text-sm text-text-secondary leading-relaxed">{doc.stage3.powerEffect}</p>
              </div>
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
