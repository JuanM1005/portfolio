const styles = {
  badgeVariants: {
    available:
      'border-status-available/20 bg-status-available/5 text-status-available',
    progress:
      'border-status-progress/20 bg-status-progress/10 text-status-progress',
    upcoming:
      'border-status-upcoming/20 bg-status-upcoming/10 text-status-upcoming',
    neutral: 'border-border-soft bg-surface-card text-ink-muted',
  },

  badgePingVariants: {
    available: {
      ping: 'bg-status-available',
      dot: 'bg-status-available',
    },
    progress: {
      ping: 'bg-status-progress',
      dot: 'bg-status-progress',
    },
    upcoming: {
      ping: 'bg-status-upcoming',
      dot: 'bg-status-upcoming',
    },
    neutral: {
      ping: 'bg-ink-muted',
      dot: 'bg-ink-muted',
    },
  },
};

export default styles;
