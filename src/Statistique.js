import './Statistique.css'

function StatistiqueLignes() {
    return (
        <div className="statistique">
            <span className="stat-chiffre">10</span>
            <span className="stat-label">Lignes</span>
        </div>
    );
}

function StatistiqueArrets() {
    return (
        <div className="statistique">
            <span className="stat-chiffre">150</span>
            <span className="stat-label">Arrêts</span>
        </div>
    );
}

function StatistiqueCommunes() {
    return (
        <div className="statistique">
            <span className="stat-chiffre">3</span>
            <span className="stat-label">Communes</span>
        </div>
    );
}

export { StatistiqueLignes, StatistiqueArrets, StatistiqueCommunes };
