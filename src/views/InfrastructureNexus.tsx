import { INFRA_GOVERNANCE_LINKS } from '../data';
import { INFRASTRUCTURE_TYPES } from '../data';
import type { InfraGovernanceLink } from '../data';

interface InfrastructureNexusProps {
  onSelectDocument: (docId: string) => void;
}

function InfraCard({ link }: { link: InfraGovernanceLink }) {
  const isArtemis = link.coalition === 'artemis';
  const borderColor = isArtemis ? 'border-accent-cyan/30' : 'border-accent-amber/30';
  const glowClass = isArtemis ? 'hover:glow-cyan' : 'hover:glow-amber';
  const accentColor = isArtemis ? 'text-accent-cyan' : 'text-accent-amber';
  const tagClass = isArtemis ? 'tag-cyan' : 'tag-amber';
  const infraLabel = INFRASTRUCTURE_TYPES[link.infrastructure]?.label || link.infrastructure;

  return (
    <div className={`border ${borderColor} rounded-lg p-4 bg-bg-card ${glowClass} transition-all`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className={`tag ${tagClass}`}>{infraLabel}</span>
            <span className="data-mono text-[10px] text-text-muted">{link.id.toUpperCase()}</span>
          </div>
          <h3 className={`font-medium ${accentColor}`}>{link.governanceFunction}</h3>
        </div>
        <div className="text-right">
          <div className="data-mono text-[10px] text-text-muted uppercase">Controller</div>
          <div className="text-sm text-text-primary">{link.controller}</div>
        </div>
      </div>

      {/* Translation Mechanism */}
      <div className="bg-bg-primary rounded p-3 border border-border mb-3">
        <div className="data-mono text-[10px] text-text-muted uppercase tracking-wider mb-1">
          Translation Mechanism: Infrastructure → Authority
        </div>
        <p className="text-sm text-text-secondary leading-relaxed">{link.translationMechanism}</p>
      </div>

      {/* Dependency */}
      <div className="border-l-2 border-accent-red/50 pl-3 mb-3">
        <div className="data-mono text-[10px] text-accent-red uppercase tracking-wider mb-1">
          Dependency Created
        </div>
        <p className="text-xs text-text-secondary leading-relaxed">{link.dependencyCreated}</p>
      </div>

      {/* Example */}
      <div className="flex items-center gap-2">
        <span className="data-mono text-[10px] text-text-muted">EXAMPLE:</span>
        <span className="data-mono text-xs text-text-secondary">{link.example}</span>
      </div>
    </div>
  );
}

export function InfrastructureNexus(_props: InfrastructureNexusProps) {
  const artemisLinks = INFRA_GOVERNANCE_LINKS.filter(l => l.coalition === 'artemis');
  const ilrsLinks = INFRA_GOVERNANCE_LINKS.filter(l => l.coalition === 'ilrs');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-border pb-4">
        <h2 className="text-xl font-semibold text-text-primary mb-1">Infrastructure-Governance Nexus</h2>
        <p className="text-sm text-text-secondary">
          How infrastructure operates as a <span className="text-accent-cyan">"Translation Device"</span> — converting operational capability into{' '}
          <span className="text-accent-red">Functional Legitimacy</span>
        </p>
      </div>

      {/* Conceptual note */}
      <div className="bg-bg-card border border-border rounded-lg p-4">
        <div className="data-mono text-[10px] text-text-muted uppercase tracking-wider mb-2">Analytic Framework</div>
        <p className="text-sm text-text-secondary leading-relaxed">
          Infrastructure creates governance through dependency. When Actor A provides a capability that Actor B cannot replicate
          (navigation, power, communications), Actor A gains <em>functional authority</em> — the power to set rules not through
          legal mandate but through architectural necessity. This is the mechanism by which "technical standards" become "political authority."
        </p>
      </div>

      {/* Flow diagram representation */}
      <div className="flex items-center justify-center gap-2 py-3">
        <div className="bg-bg-card border border-border rounded px-3 py-2">
          <span className="data-mono text-xs text-text-secondary">Infrastructure</span>
        </div>
        <div className="text-accent-cyan">→</div>
        <div className="bg-bg-card border border-border rounded px-3 py-2">
          <span className="data-mono text-xs text-text-secondary">Dependency</span>
        </div>
        <div className="text-accent-amber">→</div>
        <div className="bg-bg-card border border-border rounded px-3 py-2">
          <span className="data-mono text-xs text-text-secondary">Standards</span>
        </div>
        <div className="text-accent-red">→</div>
        <div className="bg-bg-card border border-accent-red/30 rounded px-3 py-2">
          <span className="data-mono text-xs text-accent-red">Authority</span>
        </div>
      </div>

      {/* Artemis Infrastructure */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-5 bg-accent-cyan rounded" />
          <h3 className="data-mono text-accent-cyan text-sm">ARTEMIS INFRASTRUCTURE</h3>
          <span className="text-text-muted text-xs ml-2">Functional legitimacy through capability provision</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {artemisLinks.map(link => (
            <InfraCard key={link.id} link={link} />
          ))}
        </div>
      </section>

      {/* ILRS Infrastructure */}
      <section>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-5 bg-accent-amber rounded" />
          <h3 className="data-mono text-accent-amber text-sm">ILRS INFRASTRUCTURE</h3>
          <span className="text-text-muted text-xs ml-2">Normative legitimacy through shared access promises</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {ilrsLinks.map(link => (
            <InfraCard key={link.id} link={link} />
          ))}
        </div>
      </section>
    </div>
  );
}
