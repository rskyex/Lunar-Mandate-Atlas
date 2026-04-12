import { COUNTRIES, DISCRETION_POINTS, TIMELINE_EVENTS } from '../data';

interface HomeViewProps {
  onNavigate: (view: string) => void;
}

export function HomeView({ onNavigate }: HomeViewProps) {
  // Compute metrics
  const totalDocuments = COUNTRIES.reduce((sum, c) => sum + c.documents.length, 0);
  const totalDiscretionPoints = DISCRETION_POINTS.length;
  const artemisCount = COUNTRIES.filter(c => c.coalition === 'artemis').length;
  const ilrsCount = COUNTRIES.filter(c => c.coalition === 'ilrs').length;
  const dualCount = COUNTRIES.filter(c => c.coalition === 'dual' || c.coalition === 'independent').length;
  const latestArtemisMembers = [...TIMELINE_EVENTS].reverse().find(e => e.coalition === 'artemis' && e.memberCount)?.memberCount || 0;
  const latestILRSMembers = [...TIMELINE_EVENTS].reverse().find(e => e.coalition === 'ilrs' && e.memberCount)?.memberCount || 0;

  return (
    <div className="space-y-8">
      {/* Hero Title */}
      <div className="text-center pt-8 pb-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-accent-amber animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="w-2 h-2 rounded-full bg-accent-red animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        <h1 className="text-[2.5rem] font-semibold text-text-primary leading-tight tracking-tight">
          Lunar Governance Authority Tracker
        </h1>
        <p className="text-[0.9rem] text-text-secondary mt-3 max-w-2xl mx-auto leading-relaxed">
          A forensic analysis of how universalist language allocates institutional authority in cislunar space.
        </p>
      </div>

      {/* Summary Metrics Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-light text-text-primary">{totalDocuments}</div>
          <div className="data-mono text-[10px] text-text-muted uppercase tracking-wider mt-1">Documents Indexed</div>
        </div>
        <div className="bg-bg-card border border-border rounded-lg p-4 text-center">
          <div className="text-2xl font-light text-accent-red">{totalDiscretionPoints}</div>
          <div className="data-mono text-[10px] text-text-muted uppercase tracking-wider mt-1">Discretion Points Identified</div>
        </div>
        <div className="bg-bg-card border border-accent-cyan/30 rounded-lg p-4 text-center">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-2xl font-light text-accent-cyan">{latestArtemisMembers}+</span>
          </div>
          <div className="data-mono text-[10px] text-accent-cyan/70 uppercase tracking-wider mt-1">Artemis Signatories</div>
        </div>
        <div className="bg-bg-card border border-accent-amber/30 rounded-lg p-4 text-center">
          <div className="flex items-baseline justify-center gap-1">
            <span className="text-2xl font-light text-accent-amber">{latestILRSMembers}+</span>
          </div>
          <div className="data-mono text-[10px] text-accent-amber/70 uppercase tracking-wider mt-1">ILRS Partners</div>
        </div>
      </div>

      {/* Coalition Alignment Row */}
      <div className="bg-bg-card border border-border rounded-lg p-4">
        <div className="data-mono text-[10px] text-text-muted uppercase tracking-wider mb-3">
          Coalition Alignment — Tier 1 Countries Tracked
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent-cyan" />
            <span className="text-sm text-text-secondary">Artemis <span className="text-text-primary font-medium">{artemisCount}</span></span>
          </div>
          <div className="text-text-muted">|</div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent-amber" />
            <span className="text-sm text-text-secondary">ILRS <span className="text-text-primary font-medium">{ilrsCount}</span></span>
          </div>
          <div className="text-text-muted">|</div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-text-muted" />
            <span className="text-sm text-text-secondary">Dual / Non-aligned <span className="text-text-primary font-medium">{dualCount}</span></span>
          </div>
        </div>
      </div>

      {/* Concept Note — The Double Movement */}
      <div className="bg-bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-5 bg-accent-red rounded" />
          <h2 className="data-mono text-accent-red text-sm">THE DOUBLE MOVEMENT</h2>
        </div>
        <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
          <p>
            This module dissects how each nation&apos;s governance documents construct a{' '}
            <span className="text-accent-cyan">universal referent</span> (&ldquo;who represents Humanity&rdquo;), deploy a{' '}
            <span className="text-accent-amber">translation device</span> (&ldquo;which vocabulary legitimises action&rdquo;), and thereby vest{' '}
            <span className="text-accent-red">discretionary authority</span> (&ldquo;who holds the power to define ambiguous terms&rdquo;) in specific institutional actors.
          </p>
          <p>
            The core finding of the Beetham-Koyanagi Legitimation Triad: invoking a universal subject (&ldquo;Humanity,&rdquo;
            &ldquo;All countries,&rdquo; &ldquo;Future generations&rdquo;) simultaneously produces institutional control.
            The broader the claim, the greater the authority accumulated by the claimant. This is not a failure of
            cooperation — it is the mechanism through which cooperation allocates power.
          </p>
        </div>
      </div>

      {/* Three-Stage Framework Explanation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-bg-card border border-accent-cyan/20 rounded-lg p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="data-mono text-accent-cyan text-xs font-semibold bg-accent-cyan/10 px-2 py-0.5 rounded">STAGE 1</span>
          </div>
          <h3 className="text-sm font-medium text-text-primary mb-2">Humanity Construction</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            Who does the document claim to represent? What is the <em>referent</em> for &ldquo;humanity&rdquo; — scientific
            communities, future generations, the Global South, or civilisation itself? The choice of referent shapes
            which actors can claim to act on humanity&apos;s behalf.
          </p>
        </div>
        <div className="bg-bg-card border border-accent-amber/20 rounded-lg p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="data-mono text-accent-amber text-xs font-semibold bg-accent-amber/10 px-2 py-0.5 rounded">STAGE 2</span>
          </div>
          <h3 className="text-sm font-medium text-text-primary mb-2">Legitimacy Production</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            What &ldquo;magic words&rdquo; does the document use? The <em>justificatory vocabulary</em> — Safety, Sustainability,
            Equality, Inclusivity — is the translation device that converts a universal claim into acceptance
            of specific institutional arrangements.
          </p>
        </div>
        <div className="bg-bg-card border border-accent-red/20 rounded-lg p-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="data-mono text-accent-red text-xs font-semibold bg-accent-red/10 px-2 py-0.5 rounded">STAGE 3</span>
          </div>
          <h3 className="text-sm font-medium text-text-primary mb-2">Authority Architecture</h3>
          <p className="text-xs text-text-secondary leading-relaxed">
            Who ultimately defines ambiguous terms like &ldquo;harmful interference,&rdquo; &ldquo;due regard,&rdquo; or
            &ldquo;national interest&rdquo;? The <em>interpretive control</em> over these terms is where real power resides.
            This is the most important stage — the forensic core of LGAT.
          </p>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <button onClick={() => onNavigate('authority-map')} className="bg-bg-card border border-border rounded-lg p-4 text-left hover:border-accent-cyan/50 transition-colors group cursor-pointer">
          <div className="data-mono text-[10px] text-accent-cyan uppercase tracking-wider mb-1 group-hover:text-accent-cyan">VIEW 1</div>
          <div className="text-sm font-medium text-text-primary">Authority Map</div>
          <div className="text-xs text-text-muted mt-1">Universal Claims vs. Specific Authority</div>
        </button>
        <button onClick={() => onNavigate('discretion-registry')} className="bg-bg-card border border-border rounded-lg p-4 text-left hover:border-accent-red/50 transition-colors group cursor-pointer">
          <div className="data-mono text-[10px] text-accent-red uppercase tracking-wider mb-1 group-hover:text-accent-red">VIEW 2</div>
          <div className="text-sm font-medium text-text-primary">Discretion Registry</div>
          <div className="text-xs text-text-muted mt-1">Ambiguous terms and who defines them</div>
        </button>
        <button onClick={() => onNavigate('infrastructure-nexus')} className="bg-bg-card border border-border rounded-lg p-4 text-left hover:border-accent-cyan/50 transition-colors group cursor-pointer">
          <div className="data-mono text-[10px] text-accent-cyan uppercase tracking-wider mb-1 group-hover:text-accent-cyan">VIEW 3</div>
          <div className="text-sm font-medium text-text-primary">Infrastructure Nexus</div>
          <div className="text-xs text-text-muted mt-1">Infrastructure as governance instrument</div>
        </button>
        <button onClick={() => onNavigate('coalition-tracker')} className="bg-bg-card border border-border rounded-lg p-4 text-left hover:border-accent-amber/50 transition-colors group cursor-pointer">
          <div className="data-mono text-[10px] text-accent-amber uppercase tracking-wider mb-1 group-hover:text-accent-amber">VIEW 4</div>
          <div className="text-sm font-medium text-text-primary">Coalition Tracker</div>
          <div className="text-xs text-text-muted mt-1">Artemis vs. ILRS timeline</div>
        </button>
      </div>
    </div>
  );
}
