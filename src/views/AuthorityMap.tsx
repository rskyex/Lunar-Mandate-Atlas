import { COUNTRIES } from '../data';
import type { Country } from '../data';

interface AuthorityMapProps {
  onSelectDocument: (docId: string) => void;
}

function getCoalitionTag(coalition: string) {
  switch (coalition) {
    case 'artemis': return 'tag-cyan';
    case 'ilrs': return 'tag-amber';
    default: return 'tag-cyan';
  }
}

function RulesDensityBar({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 h-2 bg-bg-primary rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${value * 10}%`,
            background: value > 6
              ? 'var(--color-accent-cyan)'
              : value > 4
              ? 'var(--color-accent-amber)'
              : 'var(--color-text-muted)',
          }}
        />
      </div>
      <span className="data-mono text-text-secondary w-5 text-right">{value}</span>
    </div>
  );
}

function CountryRow({ country, onSelectDocument }: { country: Country; onSelectDocument: (id: string) => void }) {
  return (
    <div className="border border-border rounded-lg p-4 hover:border-border-bright transition-colors bg-bg-card">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <span className="data-mono text-text-muted">{country.code}</span>
          <h3 className="font-medium text-text-primary">{country.name}</h3>
          <span className={`tag ${getCoalitionTag(country.coalition)}`}>
            {country.coalition === 'dual' ? 'DUAL' : country.coalition.toUpperCase()}
          </span>
        </div>
        <div className="w-32">
          <RulesDensityBar value={country.rulesDensity} />
        </div>
      </div>

      {/* The Double Movement */}
      <div className="grid grid-cols-2 gap-4 mb-3">
        <div className="bg-bg-primary rounded p-3 border border-border">
          <div className="data-mono text-accent-cyan text-[10px] uppercase tracking-wider mb-1">Universal Claim</div>
          <p className="text-sm text-text-secondary leading-relaxed">{country.universalistClaim}</p>
        </div>
        <div className="bg-bg-primary rounded p-3 border border-border">
          <div className="data-mono text-accent-red text-[10px] uppercase tracking-wider mb-1">Specific Authority</div>
          <p className="text-sm text-text-secondary leading-relaxed">{country.specificAuthority}</p>
        </div>
      </div>

      {/* Legitimation Strategy */}
      <p className="text-xs text-text-muted mb-3 leading-relaxed">{country.legitimationStrategy}</p>

      {/* Documents */}
      <div className="flex flex-wrap gap-2">
        {country.documents.map((doc) => (
          <button
            key={doc.id}
            onClick={() => onSelectDocument(doc.id)}
            className={`text-xs px-2 py-1 rounded border cursor-pointer transition-all hover:scale-[1.02] ${
              doc.coalition === 'artemis'
                ? 'border-accent-cyan/30 text-accent-cyan hover:bg-accent-cyan/10'
                : doc.coalition === 'ilrs'
                ? 'border-accent-amber/30 text-accent-amber hover:bg-accent-amber/10'
                : 'border-border-bright text-text-secondary hover:bg-bg-elevated'
            }`}
          >
            <span className="data-mono">{doc.title} ({doc.year})</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function AuthorityMap({ onSelectDocument }: AuthorityMapProps) {
  const artemisCountries = COUNTRIES.filter(c => c.coalition === 'artemis');
  const ilrsCountries = COUNTRIES.filter(c => c.coalition === 'ilrs');
  const dualCountries = COUNTRIES.filter(c => c.coalition === 'dual' || c.coalition === 'independent');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-border pb-4">
        <h2 className="text-xl font-semibold text-text-primary mb-1">Authority Map</h2>
        <p className="text-sm text-text-secondary">
          The "Double Movement": how invoking <span className="text-accent-cyan">"Humanity"</span> leads to{' '}
          <span className="text-accent-red">"Institutional Control"</span>
        </p>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent-cyan" />
          <span className="text-text-secondary">Artemis — Functional / Procedural</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent-amber" />
          <span className="text-text-secondary">ILRS — Normative / Value-based</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent-red" />
          <span className="text-text-secondary">Discretion Points — Unilateral Power</span>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-text-muted data-mono text-[10px]">RULES DENSITY →</span>
        </div>
      </div>

      {/* Artemis Coalition */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-5 bg-accent-cyan rounded" />
          <h3 className="data-mono text-accent-cyan text-sm">ARTEMIS COALITION</h3>
          <span className="text-text-muted text-xs ml-2">Procedural commitment — Safety & Standards</span>
        </div>
        <div className="space-y-3">
          {artemisCountries.map(c => (
            <CountryRow key={c.id} country={c} onSelectDocument={onSelectDocument} />
          ))}
        </div>
      </section>

      {/* ILRS Coalition */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-5 bg-accent-amber rounded" />
          <h3 className="data-mono text-accent-amber text-sm">ILRS COALITION</h3>
          <span className="text-text-muted text-xs ml-2">Iterative partnership — Equality & Inclusivity</span>
        </div>
        <div className="space-y-3">
          {ilrsCountries.map(c => (
            <CountryRow key={c.id} country={c} onSelectDocument={onSelectDocument} />
          ))}
        </div>
      </section>

      {/* Dual / Independent */}
      {dualCountries.length > 0 && (
        <section>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-5 bg-text-muted rounded" />
            <h3 className="data-mono text-text-secondary text-sm">DUAL-ALIGNED / INDEPENDENT</h3>
          </div>
          <div className="space-y-3">
            {dualCountries.map(c => (
              <CountryRow key={c.id} country={c} onSelectDocument={onSelectDocument} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
