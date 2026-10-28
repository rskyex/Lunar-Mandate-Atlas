import {
  DATASET_VERSION,
  DATASET_LAST_UPDATED,
  DISCRETION_COLUMNS,
  discretionMeta,
  discretionCsv,
  discretionJson,
  downloadText,
} from '../lib/datasetExport';

const BASE_NAME = `lunar-discretion-points-v${DATASET_VERSION}`;

export function DataView() {
  const stats = [
    { label: 'Version', value: DATASET_VERSION, id: 'lun-version' },
    { label: 'Last updated', value: DATASET_LAST_UPDATED, id: 'lun-updated' },
    { label: 'Records', value: String(discretionMeta.recordCount), id: 'lun-count' },
  ];
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-text-primary">Data</h2>
        <p className="text-sm text-text-secondary mt-1 max-w-2xl leading-relaxed">
          Download the discretion point registry. The files are generated in your browser from
          the same records the Discretion Registry view uses.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.id} data-testid={s.id} className="bg-bg-card border border-border rounded-lg px-4 py-3">
            <div className="data-mono text-[10px] text-text-secondary uppercase tracking-wider mb-1">{s.label}</div>
            <div className="data-mono text-lg text-text-primary">{s.value}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => downloadText(`${BASE_NAME}.csv`, discretionCsv(), 'text/csv')}
          className="px-4 py-2 rounded text-sm font-medium border border-accent-cyan/60 bg-accent-cyan/10 text-accent-cyan hover:bg-accent-cyan/20 transition-colors"
        >
          Download CSV
        </button>
        <button
          type="button"
          onClick={() => downloadText(`${BASE_NAME}.json`, discretionJson(), 'application/json')}
          className="px-4 py-2 rounded text-sm font-medium border border-border-bright text-text-primary hover:bg-bg-elevated transition-colors"
        >
          Download JSON
        </button>
      </div>

      <div className="text-xs text-text-secondary leading-relaxed space-y-2 max-w-3xl">
        <p>
          Both files carry the dataset version, last-updated date and record count. In the JSON
          they sit under <span className="data-mono text-accent-cyan">meta</span> with the records
          under <span className="data-mono text-accent-cyan">records</span>. In the CSV they are
          comment lines starting with <span className="data-mono text-accent-cyan">#</span> at the
          top (in pandas, read with <span className="data-mono text-accent-cyan">comment="#"</span>).
        </p>
        <p>
          The holder and implication fields are researcher coding. The characteristic formulation
          should be checked against the governing document named in each record.
        </p>
      </div>

      <div>
        <h3 className="data-mono text-[11px] text-text-secondary uppercase tracking-wider mb-2">CSV columns</h3>
        <div className="overflow-x-auto border border-border rounded-lg">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-bg-card">
                <th className="text-left px-3 py-2 data-mono text-[10px] text-text-secondary uppercase tracking-wider">Column</th>
                <th className="text-left px-3 py-2 data-mono text-[10px] text-text-secondary uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody>
              {DISCRETION_COLUMNS.map((c) => (
                <tr key={c.key} className="border-t border-border">
                  <td className="px-3 py-2 data-mono text-accent-cyan whitespace-nowrap align-top">{c.key}</td>
                  <td className="px-3 py-2 text-text-secondary">{c.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
