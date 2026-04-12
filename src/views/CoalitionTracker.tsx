import { TIMELINE_EVENTS } from '../data';
import type { TimelineEvent, ConfidenceLevel } from '../data';

interface CoalitionTrackerProps {
  onSelectDocument: (docId: string) => void;
}

const CONFIDENCE_LABELS: Record<ConfidenceLevel, { symbol: string; label: string }> = {
  confirmed: { symbol: '\u25CF', label: 'Confirmed (signed/ratified)' },
  stated_intent: { symbol: '\u25D0', label: 'Stated Intent (announced)' },
  reported: { symbol: '\u25CB', label: 'Reported (press/unconfirmed)' },
};

function ConfidenceDot({ level, coalition }: { level: ConfidenceLevel; coalition: string }) {
  const color = coalition === 'artemis' ? 'text-accent-cyan' : coalition === 'ilrs' ? 'text-accent-amber' : 'text-text-muted';
  return (
    <span className={`${color} text-sm`} title={CONFIDENCE_LABELS[level].label}>
      {CONFIDENCE_LABELS[level].symbol}
    </span>
  );
}

function TimelineNode({ event, index }: { event: TimelineEvent; index: number }) {
  const isArtemis = event.coalition === 'artemis';
  const isILRS = event.coalition === 'ilrs';
  const isDual = event.coalition === 'dual';

  const dotColor = isArtemis
    ? 'bg-accent-cyan'
    : isILRS
    ? 'bg-accent-amber'
    : 'bg-text-muted';

  const borderColor = isArtemis
    ? 'border-accent-cyan/30'
    : isILRS
    ? 'border-accent-amber/30'
    : 'border-border';

  const labelColor = isArtemis
    ? 'text-accent-cyan'
    : isILRS
    ? 'text-accent-amber'
    : 'text-text-secondary';

  // Confidence-based dot styles
  const isConfirmed = event.confidence === 'confirmed';
  const dotStyle = isConfirmed
    ? dotColor
    : event.confidence === 'stated_intent'
    ? `${dotColor} opacity-60`
    : `bg-transparent border-2 ${isArtemis ? 'border-accent-cyan' : isILRS ? 'border-accent-amber' : 'border-text-muted'}`;

  // Position: Artemis on left, ILRS on right, dual centered
  const alignment = isArtemis ? 'pr-[52%]' : isILRS ? 'pl-[52%]' : 'px-[20%]';

  return (
    <div className={`relative ${alignment}`}>
      {/* Timeline dot */}
      <div
        className={`absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${dotStyle} ring-4 ring-bg-primary z-10`}
      />

      {/* Connector line */}
      <div className={`absolute top-4 left-1/2 w-px bg-border ${
        index === TIMELINE_EVENTS.length - 1 ? 'h-0' : 'h-full'
      }`} />

      {/* Content card */}
      <div className={`border ${borderColor} rounded-lg p-4 bg-bg-card mb-4 relative ${!isConfirmed ? 'opacity-85' : ''}`}>
        <div className="flex items-start justify-between mb-2">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <ConfidenceDot level={event.confidence} coalition={event.coalition} />
              <span className="data-mono text-[10px] text-text-muted">{event.date}</span>
              {event.memberCount && (
                <span className={`data-mono text-[10px] ${labelColor}`}>
                  {event.memberCount} members
                </span>
              )}
            </div>
            <h3 className="text-sm font-medium text-text-primary">{event.title}</h3>
          </div>
          <span className={`tag ${isArtemis ? 'tag-cyan' : isILRS ? 'tag-amber' : 'tag-cyan'}`}>
            {isDual ? 'FOUNDATION' : event.coalition.toUpperCase()}
          </span>
        </div>

        <p className="text-xs text-text-secondary leading-relaxed mb-2">{event.significance}</p>

        {event.analyticNote && (
          <div className="border-l-2 border-accent-red/40 pl-2 mt-2">
            <span className="data-mono text-[10px] text-accent-red uppercase">Analytic Note: </span>
            <span className="text-xs text-text-muted italic">{event.analyticNote}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function CoalitionTracker(_props: CoalitionTrackerProps) {
  const artemisEvents = TIMELINE_EVENTS.filter(e => e.coalition === 'artemis');
  const ilrsEvents = TIMELINE_EVENTS.filter(e => e.coalition === 'ilrs');

  // Get latest member counts
  const latestArtemis = [...artemisEvents].reverse().find(e => e.memberCount)?.memberCount || 0;
  const latestILRS = [...ilrsEvents].reverse().find(e => e.memberCount)?.memberCount || 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-border pb-4">
        <h2 className="text-xl font-semibold text-text-primary mb-1">Coalition Tracker</h2>
        <p className="text-sm text-text-secondary">
          Two parallel <span className="text-accent-red">authority-accumulation engines</span> — different legitimation strategies, same structural outcome
        </p>
      </div>

      {/* Comparative Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-accent-cyan/30 rounded-lg p-4 bg-bg-card glow-cyan">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-accent-cyan" />
            <span className="data-mono text-accent-cyan text-sm">ARTEMIS ACCORDS</span>
          </div>
          <div className="text-3xl font-light text-text-primary mb-1">{latestArtemis}+</div>
          <div className="data-mono text-[10px] text-text-muted uppercase">Signatories</div>
          <div className="mt-3 border-t border-border pt-3">
            <div className="data-mono text-[10px] text-text-muted uppercase mb-1">Strategy</div>
            <p className="text-xs text-text-secondary">
              <span className="text-accent-cyan font-medium">Procedural commitment.</span> Sign once, bind to norms.
              Critical mass creates de facto international law. "Safety" and "interoperability" as legitimation vocabulary.
            </p>
          </div>
        </div>

        <div className="border border-accent-amber/30 rounded-lg p-4 bg-bg-card glow-amber">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-accent-amber" />
            <span className="data-mono text-accent-amber text-sm">ILRS PROGRAMME</span>
          </div>
          <div className="text-3xl font-light text-text-primary mb-1">{latestILRS}+</div>
          <div className="data-mono text-[10px] text-text-muted uppercase">Partners</div>
          <div className="mt-3 border-t border-border pt-3">
            <div className="data-mono text-[10px] text-text-muted uppercase mb-1">Strategy</div>
            <p className="text-xs text-text-secondary">
              <span className="text-accent-amber font-medium">Iterative partnership enumeration.</span> Join a phase, scope expands.
              "Equality" and "openness to all countries" as legitimation vocabulary.
            </p>
          </div>
        </div>
      </div>

      {/* Analytic comparison */}
      <div className="bg-bg-card border border-border rounded-lg p-4">
        <div className="data-mono text-[10px] text-text-muted uppercase tracking-wider mb-2">
          Structural Comparison: Legitimation Mechanisms
        </div>
        <div className="grid grid-cols-3 gap-4 text-xs">
          <div>
            <span className="data-mono text-[10px] text-text-muted block mb-1">DIMENSION</span>
          </div>
          <div>
            <span className="data-mono text-[10px] text-accent-cyan block mb-1">ARTEMIS</span>
          </div>
          <div>
            <span className="data-mono text-[10px] text-accent-amber block mb-1">ILRS</span>
          </div>

          <span className="text-text-secondary">Joining Mechanism</span>
          <span className="text-text-primary">Bilateral signature with US</span>
          <span className="text-text-primary">MoU with CNSA</span>

          <span className="text-text-secondary">Vocabulary</span>
          <span className="text-accent-cyan">Safety, Sustainability, Interoperability</span>
          <span className="text-accent-amber">Equality, Inclusivity, Mutual Benefit</span>

          <span className="text-text-secondary">Audience</span>
          <span className="text-text-primary">Implementers / Capable states</span>
          <span className="text-text-primary">Global South / Developing states</span>

          <span className="text-text-secondary">Authority Source</span>
          <span className="text-text-primary">Functional (capability → norms)</span>
          <span className="text-text-primary">Normative (values → participation)</span>

          <span className="text-text-secondary">Control Mechanism</span>
          <span className="text-accent-red">Interpretive monopoly over "safety"</span>
          <span className="text-accent-red">Architectural control over phases</span>

          <span className="text-text-secondary">Legitimation Device</span>
          <span className="text-text-primary">Momentum (critical mass)</span>
          <span className="text-text-primary">Openness (enumeration count)</span>
        </div>
      </div>

      {/* Timeline */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="data-mono text-sm text-text-secondary">TIMELINE</h3>
          <div className="flex items-center gap-4 text-[10px] data-mono">
            <span className="text-accent-cyan">&larr; ARTEMIS</span>
            <span className="text-text-muted">|</span>
            <span className="text-accent-amber">ILRS &rarr;</span>
          </div>
        </div>
        {/* Confidence Legend */}
        <div className="flex items-center gap-5 mb-4 text-[10px] data-mono text-text-muted">
          <span className="uppercase tracking-wider">Confidence:</span>
          <span className="flex items-center gap-1"><span className="text-text-secondary">{CONFIDENCE_LABELS.confirmed.symbol}</span> Confirmed</span>
          <span className="flex items-center gap-1"><span className="text-text-secondary">{CONFIDENCE_LABELS.stated_intent.symbol}</span> Stated Intent</span>
          <span className="flex items-center gap-1"><span className="text-text-secondary">{CONFIDENCE_LABELS.reported.symbol}</span> Reported</span>
        </div>

        {/* Central timeline */}
        <div className="relative">
          {/* Central axis */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {TIMELINE_EVENTS.map((event, i) => (
            <TimelineNode key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
