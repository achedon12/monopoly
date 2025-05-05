const NotFoundPage = () => {
    return (
        <div>
            <h1>404</h1>
            <p>La page que vous recherchez n'existe pas.</p>
            <a href={import.meta.env.BASE_URL || '/'}>Retour à l'accueil</a>
        </div>
    );
}

export default NotFoundPage;