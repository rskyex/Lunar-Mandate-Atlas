import { useState } from 'react';
import { HomeView } from './views/HomeView';
import { AuthorityMap } from './views/AuthorityMap';
import { DiscretionRegistry } from './views/DiscretionRegistry';
import { InfrastructureNexus } from './views/InfrastructureNexus';
import { CoalitionTracker } from './views/CoalitionTracker';
import { DetailOverlay } from './components/DetailOverlay';

type View = 'home' | 'authority-map' | 'discretion-registry' | 'infrastructure-nexus' | 'coalition-tracker';

const NAV_ITEMS: { id: View; label: string; shortLabel: string }[] = [
  { id: 'home', label: 'Home', shortLabel: 'Home' },
  { id: 'authority-map', label: 'Authority Map', shortLabel: 'Map' },
  { id: 'discretion-registry', label: 'Discretion Registry', shortLabel: 'Registry' },
  { id: 'infrastructure-nexus', label: 'Infrastructure Nexus', shortLabel: 'Infra' },
  { id: 'coalition-tracker', label: 'Coalition Tracker', shortLabel: 'Timeline' },
];

function App() {
  const [activeView, setActiveView] = useState<View>('home');
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);

  const navigateTo = (view: string) => setActiveView(view as View);

  const renderView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView onNavigate={navigateTo} />;
      case 'authority-map':
        return <AuthorityMap onSelectDocument={setSelectedDocId} />;
      case 'discretion-registry':
        return <DiscretionRegistry onSelectDocument={setSelectedDocId} />;
      case 'infrastructure-nexus':
        return <InfrastructureNexus onSelectDocument={setSelectedDocId} />;
      case 'coalition-tracker':
        return <CoalitionTracker onSelectDocument={setSelectedDocId} />;
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Top Bar */}
      <header className="border-b border-border bg-bg-card/80 backdrop-blur-sm sticky top-0 z-40 lunar-horizon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo / Title */}
            <button onClick={() => setActiveView('home')} className="flex items-center gap-3 cursor-pointer">
              <div className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              <h1 className="text-sm font-semibold text-text-primary tracking-tight">
                <span className="data-mono text-accent-cyan">LGAT</span>
                <span className="text-text-muted mx-2">|</span>
                <span className="hidden sm:inline text-text-secondary font-normal">Lunar Governance Authority Tracker</span>
              </h1>
            </button>

            {/* Navigation */}
            <nav className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveView(item.id)}
                  className={`px-3 py-1.5 rounded text-xs transition-all ${
                    activeView === item.id
                      ? 'bg-bg-elevated text-text-primary border border-border-bright'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated/50'
                  }`}
                >
                  <span className="hidden md:inline">{item.label}</span>
                  <span className="md:hidden">{item.shortLabel}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Subheader — Core Thesis (hidden on home) */}
      {activeView !== 'home' && (
        <div className="border-b border-border bg-bg-card/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <p className="text-xs text-text-muted leading-relaxed">
              <span className="data-mono text-accent-red">CORE THESIS:</span>{' '}
              Governance is not cooperation — it is{' '}
              <span className="text-text-secondary">who holds Interpretive Control</span> over ambiguous terms.
              Artemis and ILRS are parallel{' '}
              <span className="text-accent-red">authority-accumulation engines</span> that translate{' '}
              <span className="text-accent-cyan">universalist language</span> into{' '}
              <span className="text-accent-amber">concrete political authority</span>.
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {renderView()}
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between text-[10px] data-mono text-text-muted">
            <span>All rights reserved Risa Koyanagi</span>
            <span>
              Part of{' '}
              <a href="https://faultline-nqmm.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-accent-cyan hover:text-accent-cyan/80 transition-colors">
                Faultline
              </a>
              {' '}Research Platform
            </span>
          </div>
        </div>
      </footer>

      {/* Detail Overlay */}
      <DetailOverlay documentId={selectedDocId} onClose={() => setSelectedDocId(null)} />
    </div>
  );
}

export default App;
