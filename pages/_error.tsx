function Error({statusCode}) {
    return (
        <p>
            {statusCode
                ? `An error ${statusCode} orrcured on server`
                : 'An error occured on client'
            }
        </p>
    );
}

Error.getInitailProps = (({res, err}) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {statusCode};
})

export default Error;
