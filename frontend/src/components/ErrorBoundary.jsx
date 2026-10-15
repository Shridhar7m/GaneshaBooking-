import React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-festival-cream flex items-center justify-center p-6">
          <div className="max-w-md w-full bg-white rounded-3xl p-8 border border-festival-creamDark shadow-xl text-center space-y-5">
            <div className="w-16 h-16 bg-red-50 text-red-600 rounded-full flex items-center justify-center mx-auto border-2 border-red-200">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-serif font-black text-festival-maroon">
                Something went wrong
              </h2>
              <p className="text-xs text-festival-darkLight/70 leading-relaxed">
                An unexpected error occurred while rendering this page. You can reload or return to the catalog.
              </p>
              {this.state.error?.message && (
                <div className="p-3 bg-red-50/60 rounded-xl text-[11px] font-mono text-red-700 text-left overflow-x-auto">
                  {this.state.error.message}
                </div>
              )}
            </div>
            <div className="flex gap-3 pt-2">
              <button
                onClick={this.handleReset}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-festival-maroon hover:bg-festival-maroonDark text-white font-bold rounded-xl text-xs transition-all cursor-pointer shadow-sm"
              >
                <RefreshCw className="w-4 h-4" /> Reload Page
              </button>
              <a
                href="/"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-festival-cream hover:bg-festival-creamDark text-festival-maroon border border-festival-maroon/20 font-bold rounded-xl text-xs transition-all cursor-pointer"
              >
                <Home className="w-4 h-4" /> Go to Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
