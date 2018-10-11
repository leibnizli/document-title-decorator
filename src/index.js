const DocumentTitle = (title) => {
    const nextTitle = title || '';
    if (nextTitle !== document.title) {
        document.title = nextTitle;
    }
    return (target) => target;
}

export default DocumentTitle();
