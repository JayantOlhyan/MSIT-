import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(_error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="p-8 bg-surface dark:bg-[#131c31] border-l-4 border-accent text-title dark:text-white font-mono rounded-xl shadow-card my-4 border border-slate-200 dark:border-slate-800">
                    <h2 className="text-xl font-bold mb-4 tracking-tight">Something went wrong in this component.</h2>
                    <details className="whitespace-pre-wrap text-sm text-muted dark:text-slate-300 bg-white/50 dark:bg-[#0c1322] p-4 rounded-lg border border-slate-100 dark:border-slate-800">
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
