import React, { Component } from 'react';
function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
export default (title) => {
    return (WrappedComponent) => {
        return class DocumentTitle extends Component {
            static displayName = `DocumentTitle(${getDisplayName(WrappedComponent)})`;
            render() {
                const nextTitle = title || '';
                if (nextTitle !== document.title) {
                    document.title = nextTitle;
                }
                return <WrappedComponent {...this.props}/>;
            }
        }
    };
}