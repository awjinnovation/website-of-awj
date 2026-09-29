import { Component, type ReactNode } from 'react';

type Props = { children: ReactNode };
type State = { hasError: boolean };

/**
 * Catches render/lifecycle errors anywhere below it and shows a friendly
 * fallback instead of unmounting the whole app to a blank screen. React already
 * logs the error to the console in development, so no extra logging is added.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="app-error" role="alert">
          <h1>Something went wrong</h1>
          <p>An unexpected error occurred. Please reload the page.</p>
          <button type="button" onClick={() => window.location.reload()}>
            Reload
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
